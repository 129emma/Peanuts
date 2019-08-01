import * as React from "react";

/**Component Description
 *@author Emma
 *@date 2019-08-01
 **/
interface Props {
    i: string
}
interface State {
    i: boolean
}

export default class ProductsView extends React.Component<Props, State>{
    render(){
        return <h1>Products view</h1>
    }
}