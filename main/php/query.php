<?php
    header('Access-Control-Allow-Origin: *');
?>

<?php
    $mysqli = new mysqli("qnetdbreplica.cmftoqajaxu1.ap-southeast-1.rds.amazonaws.com", "qnet2018", "dOgV$&8S", "cms");

    if(mysqli_connect_errno()){
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
?>

<?php
    class Query{

        public $catCondition;
        public $cat;
        public $contentId;
        public $data = ["subCategories" => [], "contents" => [], "currentContent" => []];

        function getCategories($mysqli){
            $this->cat = filter_var($_POST['cat'], FILTER_SANITIZE_SPECIAL_CHARS);

            if($this->cat === "Games-apk"){
                $this->catCondition = "and (b.sub_category='Action' or b.sub_category='Arcade' or b.sub_category='Strategy')";
            }else{
                $this->catCondition = "and (b.sub_category='Embed-Games')";
            }

            $bindCat = "{$this->cat}%";

            $stmt = $mysqli->prepare("SELECT a.id, a.category, b.id as sc_id, b.sub_category FROM cms.categories a, cms.sub_categories b WHERE a.id = b.category_id $this->catCondition and category LIKE ?");
            $stmt->bind_param("s", $bindCat);
            $stmt->execute();
            $stmt->store_result();
            $stmt->num_rows();

            $stmt->bind_result($catId, $category, $subCatId, $subCategory);

            $contentArr = [];

            while($stmt->fetch()){
                $dataAssoc = [
                    "catId" => $catId,
                    "subCatId" => $subCatId,
                    "subCategory" => $subCategory,
                    "category" => $category,
                    "isShow" => true
                ];
                array_push($this->data['subCategories'], $dataAssoc);
                array_push($this->data['contents'], $this->getContents($mysqli, $catId, $subCatId, $category, $subCategory));
                // array_merge($contentArr, $this->getContents($mysqli, $catId, $subCatId, $category, $subCategory));
            }

            // array_push($this->data['contents'], $contentArr);

            $stmt->close();
        }

        function getContents($mysqli, $catId, $subCatId, $category, $subCategory){
            $htmlRef = ($this->cat === 'html5') ? "AND status = 1" : "";
            $stmt = $mysqli->prepare("SELECT id, title, description, file_name, original_file_name FROM cms.contents WHERE id!=1 AND category_id = ? AND sub_category_id = ? $htmlRef ORDER BY id DESC LIMIT 5");
            $stmt->bind_param("ii", $catId, $subCatId);
            $stmt->execute();
            $stmt->store_result();
            $stmt->bind_result($id, $title, $description, $fileName, $origFileName);

            $data = [];

            while($stmt->fetch()){
                $dataAssoc = [
                    "id" => $id,
                    "title" => $title,
                    "description" => $description,
                    "fileName" => $fileName,
                    "origFileName" => $origFileName,
                    "category" => $category,
                    "catId" => $catId,
                    "subCategory" => $subCategory,
                    "subCatId" => $subCatId
                ];

                array_push($data, $dataAssoc);
            }

            return $data;
        }

        function getContentDetails($mysqli){
            $this->contentId = filter_var($_POST['contentId'], FILTER_SANITIZE_SPECIAL_CHARS);

            $stmt = $mysqli->prepare("SELECT id, title, description, file_name, original_file_name FROM cms.contents WHERE id=?");
            $stmt->bind_param("i", $this->contentId);
            $stmt->execute();
            $stmt->store_result();
            $stmt->bind_result($id, $title, $description, $fileName, $origFileName);

            $details = [];

            while($stmt->fetch()){
                $dataAssoc = [
                    "id" => $id,
                    "title" => $title,
                    "description" => $description,
                    "fileName" => $fileName,
                    "origFileName" => $origFileName,
                    "subCategory" => $_POST['subCat']
                ];

                array_push($details, $dataAssoc);
            }

            array_push($this->data['currentContent'], $details);
        }
    }

    $query = new Query;

    if(isset($_POST['cat'])){
        $query->getCategories($mysqli);
        echo json_encode($query->data);
    }else if(isset($_POST['contentId'])){
        $query->getContentDetails($mysqli);
        echo json_encode($query->data['currentContent']);
    }

?>