import _ from 'lodash'

const dataReducer = (data = [], action) => {
    switch(action.type){
        case "FETCH_CATEGORY":
            const { activeCat, activeSubcat, categories, contents } = action.payload
            const shuffledContent =  _.shuffle(contents)
            return { activeCat, activeSubcat, categories, contents:shuffledContent, preview: {} }
        default:
            return data
    }
}

export default dataReducer