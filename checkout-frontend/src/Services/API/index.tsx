import axios from "axios";

const API = axios.create({
  baseURL: "https://ponto-vendas-rapida.herokuapp.com/",
});

export default API;