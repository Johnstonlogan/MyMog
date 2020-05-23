import axios from "axios";
const baseURL = "https://e2h7r9igbl.execute-api.us-west-1.amazonaws.com/api";


export const login = (userInfo, errorFunction, setUser, setToHome) => {
  axios
    .post(baseURL + "/login", userInfo)
    .then((res) => {
      localStorage.setItem("uId", res.data.JSONtoken);
      localStorage.setItem("loggedIn", true)
      setUser(res.data.User);
      setToHome(true)
    })
    .catch((error) => {
      if (error.response) {
        if (error.response.status === 404 || 401) {
          console.log(error)
        }
      }
    });
};
