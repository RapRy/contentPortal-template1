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
        cursor:pointer;
    `

    const Title = styled.p`
        font-size:.8rem;
    `

    const setDetails = (id, subCat) => {
        const dataForm = new FormData;
        dataForm.append('contentId', id)
        dataForm.append('subCat', subCat)

        axios({
            method:'post',
            url:'http://localhost/_ry/contentportal-template1/main/php/query.php',
            headers:{'content-type':'application/x-www-form-urlencoded'},
            data:dataForm
        })
        .then(res => {
            // console.log(res.data)
            setSelected([res.data])
        })
    }
    
    return (
        <ContentWrap>
            <ImgThumb onClick={(e) => setDetails(id, subCategory)} src={`https://s3-ap-southeast-1.amazonaws.com/qcnt/${category === "Games-apk" ? fileName.substring(0, fileName.length - 3) : "content/"+origFileName+"."}png`} />
            <Title>{title}</Title>
        </ContentWrap>
    )
}

export default Content
