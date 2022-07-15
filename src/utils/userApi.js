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
    .post("signup", newUser)
    .then((res) => {
      // console.log(res);
      // token.set(res.data.token);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const loginApi = (user) => {
  console.log(user);
  return axios
    .post("login", user)
    .then((res) => {
      token.set(res.data.token);
      return res.data;
    })
    .catch((err) => {
      console.log(err);

      throw err;
    });
};

export const current = (res) => {
  token.set(res);
  return axios.get("current").then((res) => {
    return res.data;
  });
};

export const logOut = () => {
  return axios
    .get("logout")
    .then(token.unset())
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
