import React, { Component } from 'react';
import gql from 'graphql-tag';

class SongCreate extends Component {
  constructor(props){
    super(props);

    this.state = { title: '' };
  };

  onSubmit(event) {
    event.preventDefault();


  }

  render() {
    return (
      <div>
        <h3>Create New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input 
            onChange={event => this.setState({ title: event.target.value })}
            value={this.state.title} 
          />
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default SongCreate;