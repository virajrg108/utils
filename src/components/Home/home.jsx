import React, { Component } from 'react';
import { message, Layout, Menu, Icon, Button, Avatar } from 'antd';

import history from '../../history'

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        this.props.getUser();
    }
    render() {
        return (
            <div>Home
                <Button onClick={this.handleChange} type="primary">Get User</Button>
            </div>
        );
    }
}

export default Home;