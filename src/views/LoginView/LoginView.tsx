import * as React from "react";
import {Button} from "@material-ui/core";
import {getUserLoginStatus} from "../../store/LoginStore/LoginActions";
import {MainState} from "../../store/store";
import {connect} from "react-redux";

interface State {
    loginStatus: boolean
}

interface Props extends DispatchProps{
    loginStatus: boolean,
}

interface DispatchProps {
    getLoginStatus: typeof getUserLoginStatus
}

class LoginView extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            loginStatus: false
        }
    }

    public render(): React.ReactNode {
        return (
            <div>

                <h1>Login Page</h1>
                {this.props.loginStatus ? <Button onClick={this.handleLogoutClick}>Logout</Button> : <Button onClick={this.handleLoginClick}>Log In</Button>}
            </div>
        )
    }

    private handleLoginClick = () => {
        this.props.getLoginStatus(this.props.loginStatus);
    };

    private handleLogoutClick= () => {
        this.props.getLoginStatus(this.props.loginStatus);
    }
}

const mapStateToProps = (state: MainState) => {
    return {
        loginStatus: state.login.loginStatus,
    }
};

export default connect(mapStateToProps, {getLoginStatus:getUserLoginStatus})(LoginView);


