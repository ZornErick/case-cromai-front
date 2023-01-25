import axios from "axios";

export const api = axios.create({
    baseURL: "https://case-cromai-back.herokuapp.com/",
    timeout: 5 * 1000
})
