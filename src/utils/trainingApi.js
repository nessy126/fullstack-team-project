import axios from 'axios';

axios.defaults.baseURL  = "http://localhost:8000.api/training/";

export const addTraining = (newTraining) => {
    return axios
    .post("/start", newTraining)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        throw err;
    });
}

export const getProgress = () => {
    return axios
    .get("/")
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        throw err;
    });
}