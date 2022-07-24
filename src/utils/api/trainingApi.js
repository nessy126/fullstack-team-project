import axios from "axios";

const endPoint = "api/training/";

export const addTrainingAPI = (newTraining, auth) => {
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
  return axios
    .get(endPoint)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const addStatistics = (data, auth) => {
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

//{
//   "factEndTraining": "111111111",
//   "trainingID": "62d6ef9f32198562acca2e3c"
// }

export const finishTraiiningApi = (data, auth) => {
  return axios
    .patch(endPoint + "finish", data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
