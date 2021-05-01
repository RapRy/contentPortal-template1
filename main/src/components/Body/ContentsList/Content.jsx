import styled from 'styled-components'
import { useTransition, animated } from 'react-spring'

const Content = ({ data }) => {

    const { name, thumbnail } = data

    return (
            <ContentWrap>
                <ImgThumb src={thumbnail} alt={name} />
                <Title>{name}</Title>
            </ContentWrap>
    )
}

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

export default Content
