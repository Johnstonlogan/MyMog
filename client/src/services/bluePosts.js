import axios from 'axios'
const baseURL ="https://e2h7r9igbl.execute-api.us-west-1.amazonaws.com/api"

  export async function getBluePosts() {
  return await axios.get(baseURL + "/bluePosts").then(res => {
    return res.data.newsArray;
  });
}
