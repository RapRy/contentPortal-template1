import {useEffect, useState} from 'react'

import Categories from './Categories/Categories'

const Body = ({data}) => {
    return (
        <div>
            <Categories subCategories={data.subCategories} />
        </div>
    )
}

export default Body
