const contentReducer = (data = [], action) => {
    switch(action.type){
        case "FETCH_CONTENT_DETAILS":
            return action.payload
        case "REMOVE_CONTENT_DETAILS":
            return []
        default:
            return data
    }
}

export default contentReducer