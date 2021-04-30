import * as api from '../api'

export const fetchCategories = (category) => async (dispatch) => {
    try {
        const { data } = await api.fetchCategories(category)
        dispatch({ type: "FETCH_CATEGORY", payload: data })
    } catch (error) {
        console.log(error)    
    }
}

export const filterSubcategories = (data) => async (dispatch) => {
    dispatch({ type: "SET_FILTERS", payload: data })
}