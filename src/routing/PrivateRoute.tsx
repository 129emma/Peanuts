import * as React from "react";
import {RouteProps, Route, Redirect} from "react-router";
import {RouteItem} from "../utils/types";

interface Props extends RouteProps{
    routes: RouteItem[],
    loginStatus: boolean,
    redirectPath: string
}

const PrivateRoute: React.FunctionComponent<Props> = (props) => {
    if (!props.loginStatus) {
        return <Redirect to={props.redirectPath}/>
    } else {
        return (
            <>
                {
                    props.routes.map(item => (
                        <Route key={item.path} {...item}/>
                    ))
                }
            </>
        )
    }
};

export default PrivateRoute;