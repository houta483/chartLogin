import React from 'react';
import '../styling/loginFeatures.css'
import { stringify } from 'querystring';
import { Mongoose } from 'mongoose';

class LoginFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: '',
      Password: '',
      Page: false
    }

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.changePage = this.changePage.bind(this);
    this.fetchUsername = this.fetchUsername.bind(this);
    this.fetchAccount = this.fetchAccount.bind(this);
  }

  fetchUsername() {
    fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.Username,
        password: this.state.Password,
      })
    })
    .then(response => response.json())
    .then(response => console.log(response))
    // console.log(this.state.Page)
  }

  fetchAccount() {
    console.log('I love TACO BELL')
    fetch('/test/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.Username,
        password: this.state.Password,
      })
    })
    .then(response => {
      console.log(response)
      return response.json();
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => console.log(err))
    // .then(
    //   // if respnoes is in database, then reditect
    // )
  }
  
  usernameChange(event) {
    console.log(this.state);
    this.setState({ Username: event.target.value });
  }

  passwordChange(event) {
    console.log(this.state);
    this.setState({ Password: event.target.value });
  }
  
  createAccount(event) {
    alert('A username was submitted: ' + this.state.Username );
    event.preventDefault();
  }

  changePage() {
      if (this.state.Page === true) {
        this.setState({ Page: false })
      } else {
        this.setState({ Page: true })
      }
    }

    render() {
      // this.fetchTanner();

      if (this.state.Page === true) {
        return ( 
          <div>
            <h1 id='loginTitle'>Create Account</h1>
    
            <input 
            id='username' 
            type="text"
            placeholder='Username'
            value={this.state.Username}
            onChange={this.usernameChange}
            /> 
    
            <input 
            id='password' 
            type="text"
            placeholder='Password'
            value={this.state.Password}
            onChange={this.passwordChange}
            />
    
            <button
            id='submit'
            onClick={this.fetchUsername}
            >
            Create Account
            </button>

            <button
            id='CreateAccount'
            onClick={this.changePage}
            >
            Already have an account?
            </button>

          </div>
        )
      } else {
      return (
        <div>
          <h1 id='loginTitle'>Login to Your Account</h1>
  
          <input 
          id='username' 
          type="text"
          placeholder='Username'
          value={this.state.Username}
          onChange={this.usernameChange}
          /> 
  
          <input 
          id='password' 
          type="text"
          placeholder='Password'
          value={this.state.Password}
          onChange={this.passwordChange}
          />
  
          <button
          id='submit'
          onClick={this.fetchAccount}
          >
          Login
          </button>
  
          <button
          id='signUpButton'
          onClick={this.changePage}
          >
            Don't have an account?
          </button>
  
        </div>
      )
    }
  }
}

export default LoginFeatures;