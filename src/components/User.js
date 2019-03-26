import React from 'react';
import { Segment, Header, Image, Divider, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

const User = () => (
  <UserConsumer>
    { value => (
      <Segment>
        <Image src={`https://robohash.org/${value.lastName}`} size='medium' circular centered/>
        <Header size='large' textAlign='center' content={`${value.firstName} ${value.lastName}`} />
        <Header size='medium' textAlign='center' content={value.email} />
        <Divider />
      </Segment>
    )}
  </UserConsumer>
)

export default User;