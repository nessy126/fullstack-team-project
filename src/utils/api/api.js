import axios from "axios";

//change
function api() {
// axios.defaults.baseURL = "https://book-reader-team-project.herokuapp.com/";
    axios.defaults.baseURL = "http://localhost:8000/";
}

export default api;
