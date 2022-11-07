import axios from 'axios';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjE1MTMwNTYzNDg1YjExZTMyZmJmNyIsImlhdCI6MTY2Nzg1MDAyNH0.o6Xt05qjGXidxxs5LQPAOVhwiXDON9M4Y1UOryInZ8Y";
const BASE_URL = "http://localhost:5050/api";

export function api(){
    return axios.create({
        baseURL: BASE_URL,
        headers: {token: `Bearer ${TOKEN}`},
    })
}

export function userRequest(){
    return axios.create({
        baseURL: BASE_URL,
        headers: {token: `Bearer ${TOKEN}`},
    })
}