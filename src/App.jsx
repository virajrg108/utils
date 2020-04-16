import React from 'react';
import { DatePicker, Button } from 'antd';
import { Router, Route } from "react-router-dom";

import './App.css';
import './css/app.css';
import LoginContainer from "./components/Login/loginContainer";
import HomeContainer from "./components/Home/homeContainer";

import 'antd/dist/antd.css';
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/home" component={HomeContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
