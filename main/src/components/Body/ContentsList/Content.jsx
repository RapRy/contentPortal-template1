import { useEffect } from 'react'
import styled from 'styled-components'
// import { useTransition, animated } from 'react-spring'
import { useDispatch, useSelector } from 'react-redux'

import { fetchContentDetails } from '../../../actions/content'



const Content = ({ data }) => {
    const dispatch = useDispatch()
    const { name, thumbnail, _id } = data
    
    return (
            <ContentWrap>
                <ImgThumb src={thumbnail} alt={name} onClick={() => dispatch(fetchContentDetails(_id))} />
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
