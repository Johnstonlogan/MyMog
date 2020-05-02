import axios from "axios";
import { useHistory } from "react-router-dom";
const baseURL ="https://kgfjkanet5.execute-api.us-west-1.amazonaws.com/user"


// create user, if error return to <Message /> on App.js level
export const createUser = (userInfo, errorFunction) => {
    console.log(userInfo)
    axios
      .post(baseURL+ "/", userInfo)
      .then(() => {
        useHistory().push("/home");
      })
      .catch(error => {
  
        if (error.response) {
          if (error.response.status === 404 || 401) {
            errorFunction(error.response);
          }
        }
      });
  };