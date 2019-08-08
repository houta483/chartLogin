import React from 'react';
import '../styling/loginPage.css';
import LoginFeatures from './loginFeatures';


class Login extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return ( 
    <div>
      <LoginFeatures />
    </div>
    )
  }
}

export default Login;