import React from 'react';
import Hobby from './Hobby';
import HobbyForm from './HobbyForm';
import { List, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import { HobbiesConsumer, } from '../providers/HobbiesProvider';

const HobbyIndex = () => (
  <HobbiesConsumer >
    { value => (
      <>
        <HobbyForm addHobby={value.addHobby} />
        <List inverted bulleted>
          {value.hobbies.map( h => (
              <Hobby hobby={{...h}} deleteHobby={value.deleteHobby} editHobby={value.editHobby} key={h.id} />
            )
          )}
        </List>
        <Button inverted as={Link} to='/user/profile' color='olive' content='Return to Profile' />
      </>
    )}
  </HobbiesConsumer >
)

export default HobbyIndex
