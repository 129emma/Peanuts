import ProductsView from "../views/ProductsView/ProductsView";
import ShoppingCartView from "../views/ShoppingCartView/ShoppingCartView";
import HomePage from "../views/HomePage/HomePage";
import {RouteItem} from "../utils/types";
import LoginView from "../views/LoginView/LoginView";
import NewProductView from "../views/NewProductView/NewProductView";
import GenreView from "../views/GenreView/GenreView";

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

export const NEW_PRODUCT: RouteItem = {
    label:"New",
    path:"/new",
    component: NewProductView
};

export const GENRE: RouteItem = {
    label:"Genre",
    path:"/genre",
    component:GenreView
}

/**
 * Allow login users
 */
export const privateRoutes: RouteItem[] = [

];

/**
 * Allow All users
 */
export const publicRoutes: RouteItem[] = [
    HOME,
    LOGIN,
    PRODUCTS,
    CARTS,
    NEW_PRODUCT,
    GENRE
];

export const navBarRoutes: RouteItem[] = [
    HOME,
    LOGIN,
    PRODUCTS,
    CARTS
];

export const secondNavRoutes: RouteItem[] = [
    NEW_PRODUCT,
    GENRE
];