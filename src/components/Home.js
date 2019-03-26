import React from 'react';
import { Header, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

const Home = () => (
  <UserConsumer>
    {value => (
       <Header size="huge" textAlign="center" inverted color="grey" content={`Welcome ${value.firstName}`} />
    )}
  </UserConsumer>
)

export default Home;