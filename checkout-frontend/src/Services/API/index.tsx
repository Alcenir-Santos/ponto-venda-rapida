import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: "https://ponto-vendas-rapida.herokuapp.com",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('token') || ''
  },
});

export default API;