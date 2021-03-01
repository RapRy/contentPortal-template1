import {useEffect, useState} from 'react'
import styled from 'styled-components'

const Categories = ({subCategories}) => {
    const [selected, setSelected] = useState(0);
    const [data, setData] = useState([]);

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
        border:2px solid #000;
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
        }
    `

    const Label = styled.label`
        cursor:pointer;
        font-size:.9rem;
        font-weight:500;
    `

    const toggleCheck = (val) => {
        console.log(!val)
    }

    useEffect(() => {
        if(subCategories != undefined){
            setSelected(subCategories[0].subCatId);
            setData([{catId:subCategories[0].catId, category:subCategories[0].category, isShow: true, subCatId: null, subCategory: "All"}, ...subCategories]);
        }
    }, [subCategories])

    return (
        <div>
            <CategoriesWrap>
                {
                   data != undefined && data.map((subCat) => 
                        ( <li key={subCat.subCatId}>
                            <Checkbox>
                                <CheckIcon>{subCat.isShow === true ? <span>✔</span> : ""}</CheckIcon>
                                <input type="checkbox" id={subCat.subCategory} onClick={() => toggleCheck(subCat.isShow)} checked={subCat.isShow} onChange={e => {}} />
                            </Checkbox>
                            <Label htmlFor={subCat.subCategory}>{subCat.subCategory}</Label>
                        </li> )
                    )
                }
            </CategoriesWrap>
        </div>
    )
}

export default Categories
