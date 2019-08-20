export const GET_USER_INPUT_NAME = "GET_USER_INPUT_NAME";
export const GET_USER_LOGIN_STATUS = "GET_USER_LOGIN_STATUS";

export interface UserNameInputTypes {
    type: typeof GET_USER_INPUT_NAME,
    inputValue: string
}

export interface UserLoginTypes {
    type: typeof GET_USER_LOGIN_STATUS,
    loginStatus: boolean
}

export type LoginActionTypes = UserLoginTypes | UserNameInputTypes;