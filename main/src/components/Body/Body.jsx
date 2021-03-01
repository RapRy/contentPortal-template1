import {useEffect, useState} from 'react'

import Categories from './Categories/Categories'
import ContentsList from './ContentsList/ContentsList'

const Body = ({data}) => {
    const [filtered, setFiltered] = useState([]);

    return (
        <div>
            <Categories subCategories={data.subCategories} setFiltered={setFiltered} filtered={filtered} />
            <ContentsList contents={data.contents} filtered={filtered} />
        </div>
    )
}

export default Body
