import React from 'react';
import {LOGIN, privateRoutes, publicRoutes} from "./routing/Routes";
import {BrowserRouter, Switch} from "react-router-dom";
import NavBar from "./views/Navigation/NavBar";
import PublicRoute from "./routing/PublicRoute";
import PrivateRoute from "./routing/PrivateRoute";
import {RouteItem} from "./utils/types";
import {MainState} from "./store/store";
import {connect} from "react-redux";

interface Props {
    loginStatus: boolean
}

const App: React.FunctionComponent<Props> = (props) => {
    const renderRoutes = () => {
        const navItems: RouteItem[] = publicRoutes;
        if (props.loginStatus) {
            navItems.push(...privateRoutes)
        }
        return navItems;
    };

    return (
        <BrowserRouter>
            <NavBar items={renderRoutes()} selectedItem={false}/>
            <Switch>
                <PublicRoute routes={publicRoutes}/>
                {/*TODO fix redirect issue*/}
                <PrivateRoute routes={privateRoutes} redirectPath={LOGIN.path} loginStatus={props.loginStatus}/>
            </Switch>
        </BrowserRouter>
    )
};

const mapStateToProps = (state: MainState) => ({
    loginStatus: state.login.loginStatus
});

export default connect(mapStateToProps, null)(App);
