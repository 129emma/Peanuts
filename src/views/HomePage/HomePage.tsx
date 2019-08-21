import * as React from "react";
import {Link} from "react-router-dom";
import {CARTS, PRODUCTS} from "../../routing/Routes";
import {TextField} from "@material-ui/core";
import Select from "react-select";

const fakeOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' }
];

const HomePage: React.FunctionComponent = () => {
    return (
        <>
            <TextField placeholder={"Please enter"} />
            <Select isClearable={true} isSearchable={true} name={"selection"} options={fakeOptions}/>
            <Link to={CARTS.path}>Cart</Link>
            <h2>Welcome!</h2>
            <h3><Link to={PRODUCTS.path}>Click to start</Link></h3>
        </>
    )
};

export default HomePage;