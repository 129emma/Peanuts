import ProductsView from "../views/ProductsView/ProductsView";
import ShoppingCartView from "../views/ShoppingCartView/ShoppingCartView";
import HomePage from "../views/HomePage/HomePage";
import {RouteItem} from "../views/interface";

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

export const routes: RouteItem[] = [
    PRODUCTS,
    HOME,
    CARTS
];