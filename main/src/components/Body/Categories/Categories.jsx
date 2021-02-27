import {useEffect, useState} from 'react'
import styled from 'styled-components'

const Categories = ({subCategories}) => {
    const [selected, setSelected] = useState(0);

    const CategoriesWrap = styled.ul`
        max-width:900px;
        margin:0 auto;
        padding:0 20px;

        li{
            display:inline-block;
            margin-right:15px;

            &:last-child{margin-right:0;}
        }
    `

    const Checkbox = styled.input`
        margin-right:5px;
    `

    const Label = styled.label`
        
    `

    useEffect(() => {
        console.log(subCategories)
        subCategories != undefined && setSelected(subCategories[0].subCatId);
    }, [subCategories])

    return (
        <div>
            <CategoriesWrap>
                <li><Checkbox type="checkbox" id="All" /><Label htmlFor="All">All</Label></li>
                {
                   subCategories != undefined && subCategories.map((subCat) => 
                        ( <li key={subCat.subCatId}>
                            <Checkbox type="checkbox" id={subCat.subCategory} />
                            <Label htmlFor={subCat.subCategory}>{subCat.subCategory}</Label>
                        </li> )
                    )
                }
            </CategoriesWrap>
        </div>
    )
}

export default Categories
