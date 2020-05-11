import axios from 'axios'
import {setCurrentUser} from "../App"
const baseURL ="https://e2h7r9igbl.execute-api.us-west-1.amazonaws.com/api"
const tokenBody = localStorage.getItem('loggedIn')

export const checkToken = () => {
    return new Promise((resolve, reject) =>{
        axios.post(baseURL+ "/cookieCheck", {withCredentials: true, token: tokenBody} ).then(res => {
       
            if(Number.isNaN((res.data.exp * 1000) - Date.now())){
                resolve(false)
            }
            else{
                resolve(res.data)
            }
      
      
        })

    })
    
    }

