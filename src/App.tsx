import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavItem} from "./views/interface";
import {routes} from "./routing/Routes";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./views/Navigation/NavBar";
import RouteContent from "./routing/RouteContent";

const App: React.FunctionComponent = () => {
    const navItems: NavItem[] = routes.map(route => ({label: route.name, path: route.path} as NavItem));
    return (
        <BrowserRouter>
            <NavBar items={navItems} selectedItem={false}/>
            <RouteContent routes={routes}/>
        </BrowserRouter>
    )
};

export default App;
