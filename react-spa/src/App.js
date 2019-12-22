import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import WelcomeContainer from './modules/welcome/welcomeContainer';
import MovieContainer from './modules/movie/movieContainer';
import HeaderContainer from './modules/header/headerContainer';

function App() {
  return (    
    <div>
    <HeaderContainer/>
    <Switch>
        <Route path='/movie'>
          <MovieContainer/>
        </Route>
        <Route exact path='/'>
          <WelcomeContainer/>
        </Route>
    </Switch>
    </div>
  );
}

export default App;
