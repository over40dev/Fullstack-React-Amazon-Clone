import './Login.css';
import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <Link to='/'>
        <img
          className="login__logo"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt="amazon-logo"/>
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type='text'/>

          <h5>Password</h5>
          <input type='password'/>

          <button className='login__signInButton'>Sign in</button>

        </form>

        <p>By continuing, you agree to the AMAZON FAKE CLONE Conditions of Use and Privacy Notice.</p>

        <p className='login__newText'>New to Amazon FAKE Clone?</p>

        <button className='login__registerButton'>Create your Amazon FAKE Clone account</button>

      </div>
    </div>
  )
}

export default Login
