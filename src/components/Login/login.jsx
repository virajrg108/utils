import React from "react"
import { Button } from "antd"

import history from '../../history';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = e => {
        this.props.setUser("viraj");
    }
    componentDidMount() {
        fetch("http://localhost:8080")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("result : ", result)
                },
                (error) => {
                }
            )
    }
    render() {
        return (
            <div>
                <Button onClick={this.handleClick} type="primary">Set user</Button>
            </div>
        )
    }
}

export default Login;