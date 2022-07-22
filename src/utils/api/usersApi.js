import axios from "axios";
import api from "./api";

api();

const endPoint = "api/users/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUpApi = (user) => {
  return axios
    .post(endPoint + "signup", user)
    .then((res) => {
      token.set(res.data.token);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const loginApi = (user) => {
  return axios
    .post(endPoint + "login", user)
    .then((res) => {
      token.set(res.data.token);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const currentApi = (auth) => {
  token.set(auth.token);
  return axios
    .get(endPoint + "current")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const logoutApi = (auth) => {
  token.set(auth.token);
  return axios
    .post(endPoint + "logout")
    .then(token.unset())
    .catch((err) => {
      throw err;
    });
};

export const resendApi = (email) => {
  return axios
    .post(endPoint + "verify", email)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
