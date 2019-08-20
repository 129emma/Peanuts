import ProductsView from "../views/ProductsView/ProductsView";
import ShoppingCartView from "../views/ShoppingCartView/ShoppingCartView";
import HomePage from "../views/HomePage/HomePage";
import {RouteItem} from "../utils/types";
import LoginView from "../views/LoginView/LoginView";

export const PRODUCTS: RouteItem = {
    name:"Products",
    path:"/viewall",
    component:ProductsView
};

export const CARTS: RouteItem = {
    name:"Shopping cart",
    path:"/viewcart",
    component:ShoppingCartView
};

export const HOME: RouteItem = {
    name:"Homepage",
    path:"/",
    exact:true,
    component: HomePage
};

export const LOGIN: RouteItem = {
    name:"Login",
    path:"/login",
    component: LoginView
};

/*
  Allow all users
 */
export const guestRoutes: RouteItem[] = [
    PRODUCTS,
    HOME,
    LOGIN,
];

/*
   Allow login users
 */
export const privateRoutes: RouteItem[] = [
    CARTS
];


export const routes: RouteItem[] = [
    PRODUCTS,
    HOME,
    CARTS,
    LOGIN
];