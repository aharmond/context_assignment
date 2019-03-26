import React from 'react';

const HobbiesContext = React.createContext();

export const HobbiesConsumer = HobbiesContext.Consumer;

class HobbiesProvider extends React.Component {
  state = {
    hobbies: [
      { name: 'Reading', id: 1 }
    ],
    addHobby: (hobby) => this.addHobby(hobby),
    deleteHobby: (id) => this.deleteHobby(id),
    editHobby: (hobby) => this.editHobby(hobby),
  };

  addHobby = (hobby) => {
    this.setState({ hobbies: [...this.state.hobbies, hobby] })
  }

  deleteHobby = (id) => {
    let hobbies = this.state.hobbies.filter( h => {
      if (h.id !== id)
        return h 
    })
    this.setState({ hobbies, })
  }

  editHobby = (hobby) => {
    let hobbies = this.state.hobbies.map( h => {
      if (h.id === hobby.id)
        return hobby
      return h
    })
    this.setState({ hobbies, })
  }

  render() {
    return (
      <HobbiesContext.Provider value={this.state}>
        { this.props.children }
      </HobbiesContext.Provider>
    )
  }
}

export default HobbiesProvider;