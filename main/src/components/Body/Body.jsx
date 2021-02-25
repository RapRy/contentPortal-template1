import {useEffect} from 'react'

import Categories from './Categories/Categories'

const Body = ({data}) => {

    useEffect(() => {
        console.log(data)
    }, [data])

    return (
        <div>
            <Categories subCategories={data} />
        </div>
    )
}

export default Body
