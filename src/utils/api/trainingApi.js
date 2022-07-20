import axios from "axios";

const endPoint = "api/training/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const addTrainingAPI = (newTraining, auth) => {
  token.set(auth.token);
  return axios
    .post(endPoint + "start", newTraining)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getProgressAPI = (auth) => {
  token.set(auth.token);
  return axios
    .get(endPoint)
    .then((res) => {
      console.log(res);
      token.set(res.data.token);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
