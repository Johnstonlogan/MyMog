import axios from "axios"
const baseURL = "https://e2h7r9igbl.execute-api.us-west-1.amazonaws.com/api";


export const submitFeedback = (feedback) =>{
    axios
    .post(baseURL + "/feedback", feedback).then(res =>{
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}