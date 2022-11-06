import axios from 'axios';
axios.defaults.proxy = "https://youtube-clone-nodejs.herokuapp.com/api/"
export function api(){
    return axios.create({
        baseURL: "https://youtube-clone-nodejs.herokuapp.com/api/",
        
    })
}
