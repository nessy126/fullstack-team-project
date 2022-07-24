import axios from "axios";

const endPoint = "api/training/";

export const addTrainingAPI = (newTraining) => {
  return axios
    .post(endPoint + "start", newTraining)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getProgressAPI = () => {
  return axios
    .get(endPoint)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addStatistics = (data) => {
  console.log("data :>> ", data);
  return axios
    .patch(endPoint + "statistics", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const finishTraiiningApi = (data) => {
  return axios
    .patch(endPoint + "finish", data)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
