import axios from "axios";

//60863800/json

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
})

export default api;