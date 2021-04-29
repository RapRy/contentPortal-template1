import axios from 'axios'

const url = "http://localhost:5000"

export const fetchFirstLoad = () => axios.get(`${url}/categories/Games`)