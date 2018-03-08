import axios from "axios";
export const SUBMIT_CLAIM = "submitclaim";
export const LOGIN = "login";

const ROOT_URL = "http://localhost:8080";

export function createClaimTRMS(values, callback){
    const request = axios.post(`${ROOT_URL}/submitclaim`, values).then(()=> callback());

    return{
        type: SUBMIT_CLAIM,
        payload: request
    };
}

export function loginTRMS(values, callback){
    const request = axios.post(`${ROOT_URL}/login`, values).then(()=>callback());

    return{
        type: LOGIN,
        payload: request
    };
}