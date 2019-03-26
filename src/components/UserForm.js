import React from 'react';
import { Form, } from 'semantic-ui-react';
import { UserConsumer, } from '../providers/UserProvider';

class UserForm extends React.Component {
  state = { 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    email: this.props.email,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...this.state, };
    this.props.updateUser(user);
  }

  render() {
    const { firstName, lastName, email, } = this.state
    return (
      <Form inverted onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Input
          label="Email"
          name="email"
          value={email}
          onChange={this.handleChange}
        />
        <Form.Button inverted color="green" >Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      { value => (
        <UserForm
          { ...props }
          firstName={value.firstName}
          lastName={value.lastName}
          email={value.email}
          updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm;