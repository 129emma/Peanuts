import React from 'react';
import {privateRoutes, routes} from "./routing/Routes";
import {BrowserRouter, Switch} from "react-router-dom";
import NavBar from "./views/Navigation/NavBar";
import PublicRoute from "./routing/PublicRoute";
import PrivateRoute from "./routing/PrivateRoute";
import {NavItem} from "./utils/types";

const App: React.FunctionComponent = () => {
    const navItems: NavItem[] = routes.map(route => ({label: route.name, path: route.path} as NavItem));
    return (
        <BrowserRouter>
            <NavBar items={navItems} selectedItem={false}/>
            <Switch>
                <PublicRoute routes={routes}/>
                <PrivateRoute routes={privateRoutes} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;
