import React from "react"
import { Button } from "antd"
import axios from 'axios'

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
        axios
            .post('https://prism-organized-column.glitch.me/login/', {username:'viraj', pass: '123'})
            .then((res) => console.log(res.data))
            .catch(err => {
                console.error(err);
            });
        // fetch("https://prism-organized-column.glitch.me", {
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *client
        //     body: JSON.stringify({ username: 'viraj', pass: 'v' }) // body data type must match "Content-Type" header
        // }).then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log("result : ", result)
        //         },
        //         (error) => {
        //         }
        //     );
        // fetch("https://prism-organized-column.glitch.me")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             console.log("result : ", result)
        //         },
        //         (error) => {
        //         }
        //     )
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