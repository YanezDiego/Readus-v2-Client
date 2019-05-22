import React from 'react';
import  { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


import NavBar from './component/layout/Navbar';
import Landing from './component/layout/Landing';
import MostSharedContainer from './containers/MostSharedContainer';
import TopStoriesContainer from './containers/TopStoriesContainer';
import MovieReviewsContainer from './containers/MovieReviewsContainer';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Route exact path = "/" component ={ Landing }/>
      <Route exact path = "/mostshared" component = { MostSharedContainer }/>
      <Route exact path = "/topstories" component = { TopStoriesContainer }/>
      <Route exact path = "/moviereviews" component = { MovieReviewsContainer }/>
    </Router>
    </div>
  );
}

export default App;
