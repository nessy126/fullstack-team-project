import axios from "axios";

const endPoint = "api/books/";

export const addBookAPI = (newBook, auth) => {
  return axios
    .post(endPoint, newBook)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getAllBooksAPI = (auth) => {
  return axios
    .get(endPoint)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
