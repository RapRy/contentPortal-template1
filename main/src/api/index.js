import axios from "axios";

const url = "http://localhost:5000";
// const url = "https://port-template-1.herokuapp.com"
// const url = "http://downloadstoreportal.herokuapp.com";

export const fetchCategories = () => axios.get(`${url}/categories`);
export const fetchContents = (category) =>
  axios.get(`${url}/contents/${category}?group=main`);
export const fetchContentDetails = (id) =>
  axios.get(`${url}/contents/details/${id}`);
