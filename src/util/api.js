import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://6650c9b320f4f4c442761e2d.mockapi.io/api/"
});

export const getProducts = async () => {
    const resp = await axiosInstance.get('/articles')
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post('/message', body)
    return resp.data
}

export const postProducts = async body => {
    const resp = await axiosInstance.post('/articles', body)
    return resp.data
}