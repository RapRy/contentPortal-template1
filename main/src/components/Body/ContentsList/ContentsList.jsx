import {useEffect, useState} from 'react'
import styled from 'styled-components'

const ContentsList = ({contents, filtered}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if(contents != undefined){
            let conCatData = []

            contents.forEach(conts => {
                conts.forEach(cont => conCatData.push(cont))
            })

            console.log(conCatData)
        }
    }, [contents])

    return (
        <div>
            
        </div>
    )
}

export default ContentsList
