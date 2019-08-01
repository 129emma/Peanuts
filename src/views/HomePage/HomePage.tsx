import * as React from "react";

/**Component Description
 *@author Emma
 *@date 2019-07-31
 **/
interface Props {
    i?: boolean
}

interface State {
    i: string
}

export default class HomePage extends React.Component<Props, State> {

    render() {
      return <h1>Homepage</h1>
    }
}