import styled from 'styled-components'
import axios from 'axios'
import { useTransition, animated } from 'react-spring'
import { Link, useParams } from 'react-router-dom'

const Content = ({data, setSelected, current}) => {
    const {title, id, category, description, fileName, catId, subCatId, subCategory, origFileName} = data
    const { cat } = useParams()

    const ContentWrap = styled(animated.div)`
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

    // const transistion = useTransition(current.isShow, null, {
    //     from:{opacity:0},
    //     enter:{opacity:1},
    //     leave:{opacity:0}
    // })
    
    return (
        // transistion.map(({item, key, props}) => 
        //     item &&
        //         <ContentWrap style={props} key={key}>
        //             <ImgThumb onClick={(e) => setDetails(id, subCategory)} src={`https://s3-ap-southeast-1.amazonaws.com/qcnt/${category === "Games-apk" ? fileName.substring(0, fileName.length - 3) : "content/"+origFileName+"."}png`} />
        //             <Title>{title}</Title>
        //         </ContentWrap>
        // )
            <ContentWrap>
                <Link to={`/${cat}/${subCategory}/${id}`} style={{textDecoration: "none"}}>
                    <ImgThumb onClick={(e) => setDetails(id, subCategory)} src={`https://s3-ap-southeast-1.amazonaws.com/qcnt/${category === "Games-apk" ? fileName.substring(0, fileName.length - 3) : "content/"+origFileName+"."}png`} />
                </Link>
                <Title>{title}</Title>
            </ContentWrap>
    )
}

export default Content
