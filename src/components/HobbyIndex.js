import React from 'react';
import Hobby from './Hobby';
import HobbyForm from './HobbyForm';
import { List, } from 'semantic-ui-react';
import { HobbiesConsumer, } from '../providers/HobbiesProvider';

const HobbyIndex = () => (
  <HobbiesConsumer >
    { value => (
      <>
        <HobbyForm addHobby={value.addHobby} />
        <List bulleted>
          {value.hobbies.map( h => (
              <Hobby hobby={{...h}} deleteHobby={value.deleteHobby} editHobby={value.editHobby} key={h.id} />
            )
          )}
        </List>
      </>
    )}
  </HobbiesConsumer >
)

export default HobbyIndex
