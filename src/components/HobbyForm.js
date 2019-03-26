import React from 'react';
import { Form, } from 'semantic-ui-react';

class HobbyForm extends React.Component {
  state = { name: "", id: "", }

  handleChange = (e, { name, value, }) => this.setState({ [name]: value, })

  handleSubmit = (e) => {
    e.preventDefault();
    const hobby = {...this.state};
    this.props.addHobby(hobby);
    this.setState({ name: "", id: "",})
  }

  render() {
    const { name, id, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            width={12}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Id"
            name="id"
            value={id}
            width={4}
            type="integer"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button content="Submit" />
      </Form>
    )
  }
}

export default HobbyForm;