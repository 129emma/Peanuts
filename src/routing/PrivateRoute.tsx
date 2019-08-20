import * as React from "react";
import {RouteProps, Route, Redirect} from "react-router";
import fakeAuth from "../auth/FakeAuth";
import {RouteItem} from "../utils/types";

interface Props extends RouteProps {
    // isLogged: boolean;
    // getLoginStatus:(redirectString?: string) => void;
    routes: RouteItem[]
}

const PrivateRoute: React.FunctionComponent<Props> = (props) => {
    if (!fakeAuth.isLogged) {
        return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
    } else {
        return (
            <React.Fragment>
                {
                    props.routes.map(item => (
                        <Route key={item.path} {...item}/>
                    ))
                }
            </React.Fragment>
        )
    }
};

export default PrivateRoute;