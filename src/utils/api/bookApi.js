import axios from "axios";
const endPoint = "api/books/";

// newBook - пример:
// {
//   "title": "My 4th book",
//   "author": "Who if not me",
//   "year": 1834,
//   "pageTotal": 345
// }
export const addBookAPI = (newBook) => {
  return axios
    .post("books")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getAllBooksAPI = () => {
  return axios
    .get("books")
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
