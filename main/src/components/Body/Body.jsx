import {useEffect, useState} from 'react'

import Categories from './Categories/Categories'
import ContentsList from './ContentsList/ContentsList'

const Body = ({data}) => {
    const [filtered, setFiltered] = useState([]);
    const [contents, setContents] = useState([]);
    const [current, setCurrent] = useState({});

    useEffect(() => {
        if(data.contents != undefined){
            let conCatData = []
            data.contents.forEach(conts => {
                conts.forEach(cont => conCatData.push(cont))
            })
            
            setContents(conCatData)

            console.log("body")
        }
    }, [filtered, data])

    return (
        <div>
            <Categories subCategories={data.subCategories} setFiltered={setFiltered} filtered={filtered} setCurrent={setCurrent} />
            <ContentsList contents={contents} filtered={filtered} current={current} />
        </div>
    )
}

export default Body
