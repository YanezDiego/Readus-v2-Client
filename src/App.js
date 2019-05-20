import React from 'react';
import  { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';


import NavBar from './component/Navbar'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
    </Router>
    </div>
  );
}

export default App;
