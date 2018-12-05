import React, { Component } from 'react';
import database from './firebase-backend/firebase';
import './App.css';
import ComicBookCharacterContainer from './ComicBookCharacterContainer/ComicBookCharacter';

class App extends Component {
  constructor(){
    super();
    this.state = {
      real_name: "",
      aliases: "",
      description: "",
      id: "",
      first_appeared_in_issue: "",
    }
  }

  componentDidMount(){
    database.ref().set({
      "name": "Steven Ariol"
    })
    .then(() => console.log('Data Written Successfully'))
    .catch((error) => console.log('Firebase Error ', error))
  }


  render() {
    return (
      <div className="App">
        <ComicBookCharacterContainer name={this.state.name} aliases={this.state.aliases} description={this.state.description} id={this.state.id} powers={this.state.powers} />
      </div>
    );
  }
}

export default App;
