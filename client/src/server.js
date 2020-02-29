import axios from "axios";
import { useHistory } from "react-router-dom";

// create user, if error return to <Message /> on App.js level
export const createUser = (userInfo, errorFunction) => {
  console.log(userInfo, "user info");
  axios
    .post("/user/new_user", userInfo)
    .then(() => {
      useHistory().push("/home");
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
