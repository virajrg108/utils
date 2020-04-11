import React from 'react';
import './App.css';
import v1 from "./videos/v1.mp4"
import Test from "./Test"
function App() {
  // const [data, setData] = useState([])
  // useEffect(()=> {
  //   const fetchData = async () => {
  //     const result = await fetch('http://orangevalleycaa.org/api/videos').then(
  //       response => response.json()
  //     )
  //     setData(result);
  //   }
  //   fetchData();
  // }, []);
  return (
    <div className="App">
      <header>
        <h1>Videos</h1>
      </header>
      <Test />
    </div>
  );
}

export default App;
