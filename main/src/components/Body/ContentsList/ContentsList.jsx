import {useEffect, useState} from 'react'
import styled from 'styled-components'

import Content from './Content'
import Preview from './Preview'

const ContentsList = ({contents, filtered, current}) => {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState([]);

    const ContentListContainer = styled.div`
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        grid-gap:15px;
        max-width:900px;
        margin:0 auto;
        padding:0 20px 20px;
    `

    useEffect(() => {        

        setData(contents)
        setSelected([]);

        console.log("content lists")

        if(contents.length > 0){
            
            if(filtered.length != 0){
                if(current.isShow === false){
                    let filteredData = current.subCatId != null ? data.filter((dat, i) => dat.subCatId != current.subCatId) : [];

                    setData(filteredData)
                }else if(current.isShow === true){
                    if(current.subCatId === null){
                        setData(contents)
                    }else{
                        let filteredData = contents.filter((cont) => cont.subCatId == current.subCatId)

                        setData([...data, ...filteredData])
                    }
                }
            }else{
                if(current.isShow === true){
                    if(current.subCatId === null){
                        setData(contents)
                    }else{
                        let filteredData = contents.filter((cont) => cont.subCatId == current.subCatId)

                        setData([...data, ...filteredData])
                    }
                }
            }
        }
    }, [contents])

    return (
        <>
            {selected.length > 0 && <Preview data={selected} category={data[0].category} setSelected={setSelected}/>}
            <ContentListContainer>
                {data.map((cont) => <Content key={cont.id} data={cont} setSelected={setSelected} />)}
            </ContentListContainer>
        </>
    )
}

export default ContentsList
