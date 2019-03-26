import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Helmet from 'react-helmet';
import UserProfile from './components/UserProfile';
import HobbyIndex from './components/HobbyIndex';
import { Container, } from 'semantic-ui-react';
import { Switch, Route, } from 'react-router-dom';

const App = () => (
  <>
    <Helmet bodyAttributes={{style: 'background-color : #2e333a'}} />
    <Container>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/profile' component={UserProfile} />
        <Route exact path='/user/hobbies' component={HobbyIndex} />
      </Switch>
    </Container>
  </>
)

export default App;