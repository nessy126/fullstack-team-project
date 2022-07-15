import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/users/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerApi = (newUser) => {
  return axios
    .post("signup/", newUser)
    .then((res) => {
      console.log(res.data);
      token.set(res.data.token);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const loginApi = (user) => {
  return axios
    .get("login/", user)
    .then((res) => {
      console.log(res.data);
      token.set(res.data.token);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const logOut = () => {
  token.unset();
  return axios.post("/users/logout");
};
