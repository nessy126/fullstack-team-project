
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
    .then(res => {
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
<<<<<<< HEAD:src/utils/bookApi.js
    .get(baseUrl)
    .then((res) => {
=======
    .get('books')
    .then(res => {
>>>>>>> ab15d2d058478e17b35de10caa124261956a243a:src/utils/api/bookApi.js
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
          console.log(err);
      throw err;
    });
};
