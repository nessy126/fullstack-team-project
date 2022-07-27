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

export const finishTrainingApi = (trainingID) => {
  return axios
    .get(endPoint + trainingID + "/finish")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
