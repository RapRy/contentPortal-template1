import * as api from '../api'

export const fetchContentDetails = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchContentDetails(id)
        dispatch({ type: "FETCH_CONTENT_DETAILS", payload: data })   
    } catch (error) {
        console.log(error) 
    }
}

export const removeDetails = () => async (dispatch) => {
    dispatch({ type: "REMOVE_CONTENT_DETAILS" })
}