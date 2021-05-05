import Categories from './Categories/Categories'
import ContentsList from './ContentsList/ContentsList'
import { useHistory, withRouter } from 'react-router-dom'
import { useEffect } from 'react'


const Body = () => {
    
    const history = useHistory()

    useEffect(() => {
        console.log(history)
    }, [history])

    return (
        <div>
            <Categories />
            <ContentsList />
        </div>
    )
}

export default withRouter(Body)
