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
      <Form inverted onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            label="Name"
            name="name"
            value={name}
            width={12}
            onChange={this.handleChange}
            required
          />
          <Form.Input
            label="Id"
            name="id"
            value={id}
            width={4}
            type="integer"
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Button inverted color="green" content="Submit" />
      </Form>
    )
  }
}

export default HobbyForm;