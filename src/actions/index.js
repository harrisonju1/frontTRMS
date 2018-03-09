import axios from "axios";
export const SUBMIT_CLAIM = "submitclaim";
export const LOGIN = "login";
export const CLAIM_STATUS = 'claimstatus';

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

export function claimStatusTRMS(values, callback){
    const request = axios.post(`${ROOT_URL}/claimstatus`,values).then(()=>callback());

    return{
        type:CLAIM_STATUS,
        payload: request
    };
}


