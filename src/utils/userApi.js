import axios from 'axios';

const baseUrl = "http://localhost:8000.api/users/";


// newUser - пример:
// {
//   "name": "user.name",
//   "email": "123456@i.ua",
//   "password": "123456"
// }
export const registerApi = (newUser) => {
  return axios
    .post(baseUrl + 'signup/')
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}

// console.log(singupApi(
//   {
//       "name": "user.name",
//       "email": "123456@i.ua",
//       "password": "123456"
//     }
// ));

export const loginApi = () => {
  return axios
    .get(baseUrl + "login/")
    .then(res => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
}