import * as React from "react";
import {Route} from "react-router-dom";
import {RouteItem} from "../utils/types";

/**Component Description
 *@author Emma
 *@date 2019-08-01
 **/

interface Props {
    routes: RouteItem[]
}

const PublicRoute: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            {
                props.routes.map(route => (
                    <Route key={route.path} {...route}/>
                ))
            }
        </>
    )
};
export default PublicRoute;