import styled from 'styled-components'

const Categories = () => {
    const CategoriesWrap = styled.ul`

    `

    const Checkbox = styled.input`

    `

    return (
        <div>
            <CategoriesWrap>
                <li id="All"><Checkbox type="checkbox" /><label htmlFor="All">All</label></li>
            </CategoriesWrap>
        </div>
    )
}

export default Categories
