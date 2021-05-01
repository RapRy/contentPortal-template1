import {useEffect, useState} from 'react'
import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'

import Content from './Content'
import Preview from './Preview'

const ContentsList = () => {
    const filters = useSelector(state => state.filterReducer)
    const { contents } = useSelector(state => state.dataReducer)

    const [data, setData] = useState([])

    useEffect(() => {  

        if(filters.length > 0){
            let newData = []

            contents.forEach((cont) => {
                if(!filters.includes(cont.subCatName))
                    newData.push(cont)
            })

            setData(newData)
        }else{
            setData(contents)
        }

    }, [filters, contents])

    return (
        <>
            <ContentListContainer>
                {
                    data != undefined && data.map((cont) => <Content key={cont._id} data={cont} />)
                }
            </ContentListContainer>
        </>
    )
}

const ContentListContainer = styled.div`
    display:grid;
    grid-template-columns:repeat(4, 1fr);
    grid-gap:15px;
    max-width:900px;
    margin:0 auto;
    padding:0 20px 20px;
`

export default ContentsList
