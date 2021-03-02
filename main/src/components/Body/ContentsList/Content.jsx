import styled from 'styled-components'

const Content = ({data}) => {
    const {title} = data
    
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

export default Content
