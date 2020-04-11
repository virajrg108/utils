import React from 'react';
import './App.css';
import Test from "./Test"
import { DatePicker } from 'antd';

import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>
      <DatePicker />
      <Test />
    </div>
  );
}

export default App;
