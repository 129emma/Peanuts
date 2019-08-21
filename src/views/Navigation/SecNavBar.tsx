import * as React from "react";
import {RouteItem} from "../../utils/types";
import {Link} from "react-router-dom";

interface Props{
    items: RouteItem[];
    selectedItem: RouteItem | false;
}

const SecondNavBar: React.FunctionComponent<Props> = (props) => {
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

export default SecondNavBar;