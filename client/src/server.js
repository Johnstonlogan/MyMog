import axios from "axios";
import { useHistory } from "react-router-dom";

// create user, if error return to <Message /> on App.js level
export const createUser = (userInfo, errorFunction) => {
  axios
    .post("/user/new_user", userInfo)
    .then(() => {
      useHistory().push("/home");
    })
    .catch(error => {
      console.log(error.response, "response");
      if (error.response) {
        if (error.response.status === 404 || 401) {
          errorFunction(error.response);
        }
      }
    });
};
// log in, create JWT
export const login = (userInfo, errorFunction) => {
  axios
    .post("/user/login", userInfo)
    .then(res => {
      console.log(res, "login results");
      return res;
    })
    .catch(error => {
      if (error.response.status === 404 || 401) {
        errorFunction(error.response);
      }
    });
};

export async function getBluePosts() {
  return await axios.get("/blueposts").then(res => {
    return res.data.newsArray;
  });
}
