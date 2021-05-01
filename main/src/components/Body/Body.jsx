import {useEffect, useState} from 'react'

import Categories from './Categories/Categories'
import ContentsList from './ContentsList/ContentsList'

const Body = () => {

    return (
        <div>
            <Categories />
            <ContentsList />
        </div>
    )
}

export default Body
