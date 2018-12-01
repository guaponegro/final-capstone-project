import React, { Component } from 'react';
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
      // first_appeared_in_issue: "",
    }
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
