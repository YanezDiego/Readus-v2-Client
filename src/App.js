import React from 'react';
import  { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';


import NavBar from './component/layout/Navbar'
import Landing from './component/layout/Landing'

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Route exact path = "/" component={Landing}/>
    </Router>
    </div>
  );
}

export default App;
