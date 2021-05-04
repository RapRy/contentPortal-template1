import {useEffect, useState} from 'react'
import styled from 'styled-components'

import Preview from './Preview'

import { useSelector } from 'react-redux'

import _ from 'lodash'


import Content from './Content'

const ContentsList = () => {

    const filters = useSelector(state => state.filterReducer)
    const { contents } = useSelector(state => state.dataReducer)
    const details = useSelector(state => state.contentReducer)

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

    }, [filters, contents, details])

    return (
        <>
            {
                _.isEmpty(details) === false && <Preview data={details} />
            }
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
