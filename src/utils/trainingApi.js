import axios from "axios";

export const addTrainingAPI = (newTraining) => {
  return axios
    .post("training/start", newTraining)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const getProgressAPI = () => {
  return axios
    .get("training/")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
