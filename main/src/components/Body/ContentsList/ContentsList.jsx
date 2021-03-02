import {useEffect, useState} from 'react'
import styled from 'styled-components'

import Content from './Content'

const ContentsList = ({contents, filtered, current}) => {
    const [data, setData] = useState([]);

    // const updateContentList = () => {

    // }

    useEffect(() => {        

        setData(contents)

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
        <div>
            {data.map((cont) => <Content key={cont.id} data={cont} />)}
        </div>
    )
}

export default ContentsList
