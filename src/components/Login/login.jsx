import React from "react"
import { Button, Input } from "antd"
import axios from 'axios'

import history from '../../history';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { name:'', pass:''}
    }
    handleClick = e => {
        const cred = {name:this.state.name, pass:this.state.pass}
        console.log(cred)
        axios
            .post('https://prism-organized-column.glitch.me/login/', cred)
            .then((res) => this.props.setUser("viraj"))
            .catch(err => {
                console.error(err);
            });
    }
    handleChange = e => {
        var name = e.target.id;
        this.setState({[name]:e.target.value})
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <Input value={this.state.name} onChange={this.handleChange} id="name" placeholder="Username" /><br/><br/>
                <Input.Password value={this.state.pass} onChange={this.handleChange} id="pass" placeholder="Password" /><br/><br/>
                <Button onClick={this.handleClick} type="primary">Set user</Button>
            </div>
        )
    }
}

export default Login;