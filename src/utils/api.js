import axios from 'axios';

const BASE_URL = "https://youtube-clone-nodejs.herokuapp.com/api";

export function api(access_token){
        
        return axios.create({
        baseURL: BASE_URL,
        headers: {token: `Bearer ${access_token ? access_token : ""}`},
    })
    
}
