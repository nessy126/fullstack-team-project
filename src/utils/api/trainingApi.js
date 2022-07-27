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
    .get(endPoint + "current")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addStatistics = (data, IdTraining) => {
  console.log("data :>> ", data);
  console.log("IdTraining :>> ", IdTraining);
  return axios
    .patch(endPoint + IdTraining + "/statistics", data)
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
