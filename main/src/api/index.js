import axios from 'axios'

// const url = "http://localhost:5000"
const url = "https://port-template-1.herokuapp.com"

export const fetchCategories = (category) => axios.get(`${url}/categories/${category}`)
export const fetchContentDetails = (id) => axios.get(`${url}/content/${id}`)