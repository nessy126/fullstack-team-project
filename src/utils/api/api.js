import axios from "axios";

const { BASE_URL } = process.env;
console.log(BASE_URL);

//change
function api() {
  axios.defaults.baseURL = BASE_URL;
  //   axios.defaults.baseURL = "http://localhost:8000/";
  //   axios.defaults.baseURL = "https://book-reader-team-project.herokuapp.com/";
}

export default api;
