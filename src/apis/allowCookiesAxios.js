import axios from "axios";

const allowCookiesAxios = axios.create({
    withCredentials: true
})

export default allowCookiesAxios;