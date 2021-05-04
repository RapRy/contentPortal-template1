import styled from 'styled-components'
// import { useTransition, animated } from 'react-spring'
import { useDispatch } from 'react-redux'

import { fetchContentDetails } from '../../../actions/content'



const Content = ({ data, setShowPrev }) => {
    const dispatch = useDispatch()
    const { name, thumbnail, _id } = data

    const clickEvt= (id) => {
        dispatch(fetchContentDetails(id))
        setShowPrev(true)
    }
    
    return (
            <ContentWrap>
                <ImgThumb src={thumbnail} alt={name} onClick={() => clickEvt(_id)} />
                <Title>{name}</Title>
            </ContentWrap>
    )
}

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

export default Content
