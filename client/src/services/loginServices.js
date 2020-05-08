

import axios from "axios"
const baseURL ="https://e2h7r9igbl.execute-api.us-west-1.amazonaws.com/api"

export const login = (userInfo, errorFunction,setUser) => {
    axios
      .post(baseURL + "/login", userInfo)
      .then((res) => {
        setUser(res.data.User)

      })
      .catch(error => {
        console.log(error)
        if(error.response){
        if (error.response.status === 404 || 401) {
          errorFunction(error.response);
        }
      }
      });
  };