import axios from 'axios'

const url = "http://localhost:5000"

export const fetchCategories = (category) => axios.get(`${url}/categories/${category}`)