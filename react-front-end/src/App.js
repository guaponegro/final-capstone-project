import React, { Component } from 'react';
import firebase from 'firebase';
import database from './firebase-backend/firebase';
import './App.css';
import ComicBookCharacterContainer from './ComicBookCharacterContainer/ComicBookCharacter';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccess: () => false
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      real_name: "",
      aliases: "",
      description: "",
      id: "",
      first_appeared_in_issue: "",
      isSignedIn: false,
    }
  }


  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user =>{
      this.setState({isSignedIn: !!user})
    })
  }


  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? 
          (<span>
            <button onClick={() => firebase.auth().signOut()}>Sign Out!</button>
            <ComicBookCharacterContainer name={this.state.name} aliases={this.state.aliases} description={this.state.description} id={this.state.id} powers={this.state.powers} />
          </span>)
        : 
        (<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>)}
      </div>
    );
  }
}

export default App;
