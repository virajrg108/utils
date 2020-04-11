import React from "react"
import { Button } from "antd"
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = e => {
        this.props.setUser("viraj");
    }
    // componentDidMount (){
        
    // }
    render() {
        return (
            <div>
                <Button onClick={this.handleClick} type="primary">Set user</Button>
            </div>
        )
    }
}

export default Login;