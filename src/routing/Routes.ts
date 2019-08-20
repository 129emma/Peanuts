import ProductsView from "../views/ProductsView/ProductsView";
import ShoppingCartView from "../views/ShoppingCartView/ShoppingCartView";
import HomePage from "../views/HomePage/HomePage";
import {RouteItem} from "../utils/types";
import LoginView from "../views/LoginView/LoginView";

export const PRODUCTS: RouteItem = {
    label:"Products",
    path:"/viewall",
    component:ProductsView
};

export const CARTS: RouteItem = {
    label:"Shopping cart",
    path:"/viewcart",
    component:ShoppingCartView
};

export const HOME: RouteItem = {
    label:"Homepage",
    path:"/",
    exact:true,
    component: HomePage
};

export const LOGIN: RouteItem = {
    label:"Login",
    path:"/login",
    component: LoginView
};

/**
 * Allow login users
 */
export const privateRoutes: RouteItem[] = [
    CARTS
];

/**
 * Allow All users
 */
export const publicRoutes: RouteItem[] = [
    HOME,
    LOGIN,
    PRODUCTS,
];