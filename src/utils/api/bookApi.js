import axios from 'axios';

const baseUrl = "https://book-reader-team-project.herokuapp.com/api/books/";


// newBook - пример:
// {
//   "title": "My 4th book",
//   "author": "Who if not me",
//   "year": 1834,
//   "pageTotal": 345
// }
export const addBook = (newBook) => {
  return axios
    .post(baseUrl)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

export const getAllBooks = () => {
  return axios
    .get(baseUrl)
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}