import React, { Component } from 'react';
import firebase from '../firebase-backend/firebase';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {    
        }).catch((error) => {
            console.log(error);
        });
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render(){
        return (
        <div>
            <form>
                <div>
                    <label for='exampleInputEmail'>Email Address</label>
                    <input value={this.state.email} onChange={this.handleChange} type='email' name='email'
                    placeholder='Enter email'/>
                </div>
                <div>
                    <label for='exampleInputPassword'>Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type='password' name='password'
                    placeholder='Password'/>
                </div>
                <button type='submit' onClick={this.login}>Login</button>
                <button onClick={this.signup}>Signup</button>
            </form>
        </div>
        );
    }
}

export default Login;