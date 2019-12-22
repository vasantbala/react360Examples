import React from 'react';
import './App.css';
import {
  Switch,
  Route,
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import WelcomeContainer from './modules/welcome/welcomeContainer';
import MovieContainer from './modules/movie/movieContainer';
import HeaderContainer from './modules/header/headerContainer';

function App() {
  return (    
    <div>
    <HeaderContainer/>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xlg">
        <Typography component="div" style={{ backgroundColor: '#f5f5f5', height: '90vh' }}>
          <Switch>
            <Route path='/movie'>
              <MovieContainer/>
            </Route>
            <Route exact path='/'>
              <WelcomeContainer/>
            </Route>
          </Switch>
        </Typography>
      </Container>
    </React.Fragment>

    </div>
  );
}

export default App;
