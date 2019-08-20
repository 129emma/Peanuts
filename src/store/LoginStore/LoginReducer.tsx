import {LoginStatus} from "../../utils/types";
import {LoginActionTypes} from "./LoginActionTypes";

export const defaultUserState: LoginStatus = {
    loginStatus: false,
    userName: ""
};

export function loginReducer(
    state = defaultUserState,
    action: LoginActionTypes
) {
    switch (action.type) {
        case "GET_USER_INPUT_NAME":
            return {
                ...state,
                userName: action.inputValue
            };
        case "GET_USER_LOGIN_STATUS":
            return {
                ...state,
                loginStatus: !action.loginStatus,
            };
        default:
            return state
    }
}