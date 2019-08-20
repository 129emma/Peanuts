import * as React from "react";
import store from "../../store/store";

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

class ProductsView extends React.Component<Props, State>{
    public constructor(props: Props) {
        super(props);
        this.state = {
           i: false
        }
    }

    render(){
        return (
            <h1>Products view {console.log(store.getState)}</h1>
            )
    }
}

export default ProductsView;