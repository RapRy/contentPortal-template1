import * as api from '../api'

export const fetchFirstLoad = () => async (dispatch) => {
    try {
        const { data } = await api.fetchFirstLoad()
        dispatch({ type: "FETCH_CATEGORY", payload: data })
    } catch (error) {
        console.log(error)    
    }
}