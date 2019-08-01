import * as React from "react";
import {Route, Switch} from "react-router-dom";
import {RouteItem} from "../views/interface";

/**Component Description
 *@author Emma
 *@date 2019-08-01
 **/

interface Props {
    routes: RouteItem[]
}
const RouteContent:React.FunctionComponent<Props> = (props) => {
    return (
        <Switch>
            {props.routes.map(route => (
                <Route key={route.path}
                           path={route.path}
                           exact={route.exact}
                           component={route.component}
                />
            ))}
        </Switch>
    )
};
export default RouteContent;