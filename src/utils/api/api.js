import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;

//change
function api() {
  axios.defaults.baseURL = REACT_APP_BASE_URL;
  //   axios.defaults.baseURL = "http://localhost:8000/";
    // axios.defaults.baseURL = "https://book-reader-team-project.herokuapp.com/";
}

export default api;
