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

export const createUser = userInfo => {
  console.log(userInfo, "user info");
  axios
    .post("/user/new_user", userInfo)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error.response.status);
      if (error.response.status == 400) {
        alert("This email is already in use, return to log in");
      }
    });
};
