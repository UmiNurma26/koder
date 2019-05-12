import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
// import CHeader from './Component/CHeader.jsx';
// import CSlider from './Component/CSlider.jsx';
// import Home from './Page/Home.jsx'
import Main from './Main.jsx'

let time= new Date().toLocaleString();
let name = "alex";

ReactDOM.render(
  <App name={name} />,
  document.getElementById('root')
);
function App() {
  return (
    <div className="App">
      <Main></Main>
      
    </div>
    
  );
}

export default App;
