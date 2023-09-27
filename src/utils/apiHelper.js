import axios from "axios";

const instance = axios.create({
    baseURL:process.env.REACT_APP_API_URL
});

export const getDataAPI = async (url, token) => {
    const res = await instance.get(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}

export const postDataAPI = async (url, post, token) => {
    const res = await instance.post(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const putDataAPI = async (url, post, token) => {
    const res = await instance.put(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const patchDataAPI = async (url, post, token) => {
    const res = await instance.patch(`/api/${url}`, post, {
        headers: { Authorization: token}
    })
    return res;
}

export const deleteDataAPI = async (url, token) => {
    const res = await instance.delete(`/api/${url}`, {
        headers: { Authorization: token}
    })
    return res;
}