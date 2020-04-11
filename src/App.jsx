import React from 'react';
import './App.css';
import LoginContainer from "./components/Login/loginContainer";
import { DatePicker, Button } from 'antd';
import { Router, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import history from "./history";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <div>
          <Route exact path="/" component={LoginContainer} />
        </div>
      </Router>
    </div>
  );
}

export default App;
