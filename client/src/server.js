
import axios from "axios";




// log in, create JWT
export const login = (userInfo, errorFunction,setUser) => {
  axios
    .post("/user/login", userInfo)
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
export const checkToken = () => {
axios.get("/user/checkToken", {params: {token: "aslkdfjsa;lkfjls"}}).then(res => {
  console.log(res)
})
}

export async function getBluePosts() {
  return await axios.get("/blueposts").then(res => {
    return res.data.newsArray;
  });
}
