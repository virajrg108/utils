import React, { Component } from 'react';
import { message, Layout, Menu, Icon, Button, Avatar } from 'antd';

import history from '../../history'

class Home extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event) => {
        history.push('/snippets');
    }
    render() {
        return (
            <div className="home">
                <div className="title">HOME</div>
                <Button onClick={this.handleChange} type="primary">CODE SNIPPETS</Button>
            </div>
        );
    }
}

export default Home;