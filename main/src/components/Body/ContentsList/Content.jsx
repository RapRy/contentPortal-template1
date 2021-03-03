import styled from 'styled-components'
import axios from 'axios'

const Content = ({data, setSelected}) => {
    const {title, id, category, description, fileName, catId, subCatId, subCategory, origFileName} = data

    const ContentWrap = styled.div`
        text-align:center;
    `

    const ImgThumb = styled.img`
        border-radius:10px;
        width:80px;
        height:80px;
    `

    const Title = styled.p`
        font-size:.8rem;
    `

    const getDetails = (id, subCat) => {
        const dataForm = new FormData;
        dataForm.append('contentId', id)
        dataForm.append('subCat', subCat)

        let details = [];

        axios({
            method:'post',
            url:'http://localhost/_ry/contentportal-template1/main/php/query.php',
            headers:{'content-type':'application/x-www-form-urlencoded'},
            data:dataForm
        })
        .then(res => details.push(res.data))

        return details;
    }

    const setDetails = async (id, subCat) => {

        const details = await getDetails(id, subCat)

        setSelected([details]);
    }
    
    return (
        <ContentWrap>
            <ImgThumb onClick={(e) => setDetails(id, subCategory)} src={`https://s3-ap-southeast-1.amazonaws.com/qcnt/${category === "Games-apk" ? fileName.substring(0, fileName.length - 3) : ""}png`} />
            <Title>{title}</Title>
        </ContentWrap>
    )
}

export default Content
