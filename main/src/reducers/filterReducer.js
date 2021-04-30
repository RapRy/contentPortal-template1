const filterReducer = (data = [], action) => {
    switch(action.type){
        case "SET_FILTERS":
            console.log(action.payload)
            return action.payload
        default:
            return data
    }
}

export default filterReducer