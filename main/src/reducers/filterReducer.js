const filterReducer = (data = [], action) => {
    switch(action.type){
        case "SET_FILTERS":
            return action.payload
        default:
            return data
    }
}

export default filterReducer