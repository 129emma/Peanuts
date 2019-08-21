import * as React from "react";
import {Link} from "react-router-dom";
import {RouteItem} from "../../utils/types";

/**Component Description
 *@author Emma
 *@date 2019-07-31
 **/

interface Props{
    items: RouteItem[];
    selectedItem: RouteItem | false;
}

const NavBar: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.items.map(item => (
                <Link to={item.path} key={item.path}>{item.label}</Link>
            ))}
        </div>
    )
};

export default NavBar;