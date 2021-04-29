const dataReducer = (data = [], action) => {
    switch(action.type){
        case "FETCH_CATEGORY":
            return action.payload
        default:
            return data
    }
}

export default dataReducer