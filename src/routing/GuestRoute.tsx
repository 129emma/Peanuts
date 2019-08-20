import * as React from "react";
import {Route, RouteProps, Redirect} from "react-router";
import fakeAuth from "../auth/FakeAuth";

interface Props extends RouteProps{
    // isLogged: boolean;
    redirectPath: string;
}

const GuestRoute:React.FunctionComponent<Props> = (props) => {
    return (
        fakeAuth.isLogged
            ? <Route {...props}/>
            : <Redirect to={props.redirectPath} />
    )
};

export default GuestRoute;