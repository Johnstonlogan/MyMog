import axios from "axios";
import { useHistory } from "react-router-dom";
const baseURL ="https://e2h7r9igbl.execute-api.us-west-1.amazonaws.com/api"


// create user, if error return to <Message /> on App.js level
export const createUser = (userInfo, errorFunction) => {
    axios
      .post(baseURL+ "/user", userInfo)
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