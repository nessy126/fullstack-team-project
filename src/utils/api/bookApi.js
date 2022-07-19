import axios from "axios";

const endPoint = "api/books/";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

export const addBookAPI = (newBook, auth) => {
    token.set(auth.token);
    return axios
    .post(endPoint, newBook)
    .then(res => {
        return res.data;
    })
    .catch((err) => {
        throw err;
    });
}

export const getAllBooksAPI = (auth) => {
    token.set(auth.token);
    return axios
    .get(endPoint)
        .then(res => {
        token.set(res.data.token);
        return res.data;
    })
    .catch((err) => {
        throw err;
    });
}
