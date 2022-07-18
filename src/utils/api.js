import axios from "axios";

function api() {
  axios.defaults.baseURL = "https://book-reader-team-project.herokuapp.com/";
}

export default api;

// api();
