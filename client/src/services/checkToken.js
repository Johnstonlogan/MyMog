import axios from 'axios'
const baseURL ="https://e2h7r9igbl.execute-api.us-west-1.amazonaws.com/api"
const tokenBody = {token: localStorage.getItem('uId')}

export const checkToken = () => {
    return new Promise((resolve, reject) =>{
        axios.post(baseURL+ "/userCheck", tokenBody ).then(res => {
            if(Number.isNaN((res.data.exp * 1000) - Date.now())){
                resolve(false)
            }
            else{
                resolve(res.data)
            }
      
      
        })

    })
    
    }

