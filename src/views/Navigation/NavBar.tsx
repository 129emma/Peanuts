import * as React from "react";
import {Link, RouteComponentProps} from "react-router-dom";
import {NavItem} from "../../utils/types";

/**Component Description
 *@author Emma
 *@date 2019-07-31
 **/

interface Props{
    items: NavItem[];
    selectedItem: NavItem | false;
}

const NavBar: React.FunctionComponent<Props> = (props) => {
    return (
        <ul>
            {props.items.map((item, index) => (
                <li key={index}>
                    <Link to={item.path}>{item.label}</Link>
                </li>
            ))}
        </ul>
    )
};

export default NavBar;