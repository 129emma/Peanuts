import {RouteProps} from "react-router";

export interface RouteItem {
    name?: string,
    path: string,
    exact?: boolean,
    component: RouteProps["component"];
}

export interface NavItem {
    label: string,
    path: string
}

export interface LoginStatus {
    loginStatus:boolean,
    userName: string
}