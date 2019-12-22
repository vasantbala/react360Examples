import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


import WelcomeContainer from './modules/welcome/welcomeContainer';
import MovieContainer from './modules/movie/movieContainer';
import HeaderContainer from './modules/header/headerContainer';

function App() {
  return (    
    <div>
    <HeaderContainer/>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie">Movie</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path='/movie'>
          <MovieContainer/>
        </Route>
        <Route path='/'>
          <WelcomeContainer/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
