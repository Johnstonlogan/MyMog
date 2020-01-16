import axios from "axios";

export const getUsers = () => {
  axios
    .get("/user")
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error, "this is error");
    });
};

export const createUser = (userInfo, errorFunction) => {
  console.log(userInfo, "user info");
  axios
    .post("/user/new_user", userInfo)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      if (error.response.status == 404) {
        errorFunction(error.response);
      }
    });
};
