import axios from 'axios';

// axios.defaults.baseURL  = "http://localhost:8000/api";

export const addTraining = (newTraining) => {
    return axios
    .post("training/start", newTraining)
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });
}

export const getProgress = () => {
    return axios
    .get("training/")
    .then(res => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        console.log(err);
        throw err;
    });
}