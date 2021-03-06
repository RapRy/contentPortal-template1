import {useEffect, useState} from 'react'
import styled from 'styled-components'

const Categories = ({subCategories, setFiltered, filtered, setCurrent}) => {
    const [data, setData] = useState([]);
    

    const CategoriesWrap = styled.ul`
        max-width:900px;
        margin:0 auto;
        padding:0 20px;
        margin-bottom:20px;

        li{
            display:inline-block;
            margin-right:15px;

            &:last-child{margin-right:0;}
        }
    `

    const Checkbox = styled.div`
        display:inline-block;
        margin-right:5px;
        position:relative;
        width:15px;
        height:15px;

        input{
            opacity:0;
            position:absolute;
            top:0;
            left:0;
            width:15px;
            height:15px;
            cursor:pointer;
        }
    `

    const CheckIcon = styled.div`
        display:block;
        width:15px;
        height:15px;
        border:2px solid ${({isShow}) => isShow === true ? "#7f1616" : "#ccc"};
        border-radius:2px;
        position:absolute;
        top:3px;
        left:0;
        
        span{
            font-size:.75rem;
            position:absolute;
            top:-3px;
            left:0px;
            font-weight:700;
            color:#7f1616;
        }
    `

    const Label = styled.label`
        cursor:pointer;
        font-size:.9rem;
        font-weight:500;
        color: ${({isShow}) => isShow === true ? "#7f1616" : "#ccc"}
    `

    const toggleCheck = (val, ind) => {

        if(data[ind].subCategory === "All"){
            let allData = [];

            data.forEach((dat) => {
                dat.isShow = !val
                allData.push(dat);
            })

            setData(allData);
            setCurrent(data[ind]);

            if(val === true){
                let idCont = []

                data.forEach((dat) => dat.subCatId != null && idCont.push(dat.subCatId))

                setFiltered(idCont)
            }else if(val === false){
                setFiltered([])
            }
        }else{
            data[ind].isShow = !val;

            let updatedData = data[ind];

            let filteredData = data.filter((dat, i) => dat.subCatId != data[ind].subCatId);

            filteredData.splice(ind, 0, updatedData)

            setCurrent(data[ind]);

            if(val === true){
                setFiltered([...filtered, data[ind].subCatId]);
                data[0].isShow = !val;
                
                filteredData.splice(0, 1, data[0])

                setData(filteredData);
            }else if(val === false){
                let filterFiltered = filtered.filter((fil) => fil != data[ind].subCatId);
                setFiltered(filterFiltered)

                if(filtered.length === 1){
                    data[0].isShow = !val;
                    filteredData.splice(0, 1, data[0])
                }

                setData(filteredData);
                
            }
        }
    }

    useEffect(() => {
        if(subCategories != undefined){
            if(subCategories.length > 1){
                setData([{catId:subCategories[0].catId, category:subCategories[0].category, isShow: true, subCatId: null, subCategory: "All"}, ...subCategories])
            }else{
                setData([...subCategories])
            }
        }
    }, [subCategories])

    return (
        <div>
            <CategoriesWrap>
                {
                   data != undefined && data.map((subCat, i) => 
                        ( <li key={subCat.subCatId}>
                            <Checkbox>
                                <CheckIcon isShow={subCat.isShow}>{subCat.isShow === true ? <span>✔</span> : ""}</CheckIcon>
                                <input type="checkbox" id={subCat.subCategory} checked={subCat.isShow} onChange={e => {toggleCheck(subCat.isShow, i)}} />
                            </Checkbox>
                            <Label htmlFor={subCat.subCategory} isShow={subCat.isShow}>{subCat.subCategory.replace("-", " ")}</Label>
                        </li> )
                    )
                }
            </CategoriesWrap>
        </div>
    )
}

export default Categories
