import {RouteProps} from "react-router";

export interface RouteItem {
    name?: string,
    label?:string,
    path: string,
    exact?: boolean,
    component: RouteProps["component"];
}

export interface LoginStatus {
    loginStatus:boolean,
    userName: string
}