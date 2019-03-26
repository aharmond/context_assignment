import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { NavLink, Link, } from 'react-router-dom';
import { UserConsumer, } from '../providers/UserProvider';

const Navbar = () => (
  <UserConsumer>
    { value => (
      <Menu inverted >
        <Menu.Item 
          as={Link}
          to='/'
          content='Home'
        />
        <Menu.Item
          as={NavLink}
          to='/user/profile'
          content={`${value.firstName} ${value.lastName}`}
        />
        <Menu.Item
          as={NavLink}
          to='/user/hobbies'
          content={`${value.firstName}'s Hobbies`}
        />
      </Menu>
    )}
  </UserConsumer>
)

export default Navbar;