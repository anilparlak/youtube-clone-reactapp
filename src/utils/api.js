import axios from 'axios';

export function api(){
    return axios.create({
        baseURL: "https://youtube-clone-nodejs.herokuapp.com/api/",
        proxy:"https://youtube-clone-nodejs.herokuapp.com/api/"
    })
}
