import axios from "axios";

const endPoint = "api/training/";

export const addTrainingAPI = (newTraining) => {
  return axios
    .post(endPoint, newTraining)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getProgressAPI = () => {
  return axios
    .get(endPoint + "current")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addStatistics = (data) => {
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
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
