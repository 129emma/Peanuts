import {GET_USER_INPUT_NAME, GET_USER_LOGIN_STATUS, LoginActionTypes} from "./LoginActionTypes";

export const getUsernameInput = (inputValue:string):LoginActionTypes => ({
    type: GET_USER_INPUT_NAME,
    inputValue
});

export const getUserLoginStatus = (loginStatus: boolean):LoginActionTypes => ({
    type:GET_USER_LOGIN_STATUS,
    loginStatus
});

