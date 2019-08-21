import * as React from "react";
import {TextField} from "@material-ui/core";
import Select from "react-select";
import {Link} from "react-router-dom";
import {CARTS} from "../../routing/Routes";
import * as styles from "./TopBar.module.scss";

const fakeOptions = [
    { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
    { value: 'chocolate', label: 'Chocolate', rating: 'good' },
    { value: 'strawberry', label: 'Strawberry', rating: 'wild' }
];

const TopBar: React.FunctionComponent = () => {
    return (
        <div className={styles.container}>
            <TextField placeholder={"Please enter"} />
            <Select isClearable={true} isSearchable={true} name={"selection"} options={fakeOptions}/>
            <Link to={CARTS.path}>Cart</Link>
        </div>
    )
};

export default TopBar;
