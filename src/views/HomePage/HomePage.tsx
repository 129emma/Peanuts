import * as React from "react";
import {Link} from "react-router-dom";
import {CARTS, PRODUCTS} from "../../routing/Routes";
import {TextField} from "@material-ui/core";
import Select from "react-select";


const HomePage: React.FunctionComponent = () => {
    return (
        <div className={"home-"}>

            <h2>Welcome!</h2>
            <h3><Link to={PRODUCTS.path}>Click to start</Link></h3>
        </div>
    )
};

export default HomePage;