import React from 'react';
import { List, Button, Form, Header, Segment, } from 'semantic-ui-react';

class Hobby extends React.Component {
  state = { showEdit: false, hobby: {name: this.props.hobby.name, id: this.props.hobby.id} }

  handleChange = (e, { value, }) => {
    const { id } = this.state.hobby
    this.setState({ hobby: {name: value, id } })
  } 

  handleSubmit = (e) => {
    e.preventDefault()
    const { hobby } = this.state
    this.props.editHobby(hobby)
    this.toggleEdit()
  }

  toggleEdit = () => this.setState({ showEdit: !this.state.showEdit })
   
  render() {
    const { name, id, } = this.props.hobby
    const { editHobby, deleteHobby, } = this.props
    const { showEdit, hobby, } = this.state

    return (
      <>
        { showEdit ?
          <>
            <Form inverted onSubmit={this.handleSubmit}>
              <Form.Input
                name="name"
                value={hobby.name}
                onChange={this.handleChange}
              />
              <Form.Button content="Submit" inverted/>
            </Form>
              <Button 
                color="orange"
                onClick={this.toggleEdit}
                content="Cancel"
                inverted
              />
          </>
        :
          <Segment compact inverted>
            <List.Item>
              <Header inverted color="grey" size="large" content={name} />
            </List.Item>
            <Button 
              color="red"
              content="Delete"
              size="tiny"
              inverted
              onClick={() => deleteHobby(id)}
            />
            <Button
              color="yellow"
              content="Edit"
              size="tiny"
              inverted
              onClick={this.toggleEdit}
            />
          </Segment>
        }
      </>
    )
  }
}

export default Hobby;
