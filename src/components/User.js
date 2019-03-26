import React from 'react';
import { Segment, Header, Image, Divider, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { UserConsumer, } from '../providers/UserProvider';

const User = () => (
  <UserConsumer>
    { value => (
      <Segment inverted>
        <Image src={`https://robohash.org/${value.lastName}`} size='medium' circular centered/>
        <Header inverted color='grey' size='large' textAlign='center' content={`${value.firstName} ${value.lastName}`} />
        <Header inverted color='grey' size='medium' textAlign='center' content={value.email} />
        <Divider />
        <Button as={Link} to='/user/hobbies' color='olive' inverted content='Hobbies' />
      </Segment>
    )}
  </UserConsumer>
)

export default User;