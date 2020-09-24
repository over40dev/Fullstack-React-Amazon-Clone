import './Login.css';
import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../config/firebase';
// import {useStateValue} from '../State/StateProvider';

function Login() {

  // context API


  // programatically change URL
  const history = useHistory();

  // State email|password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
      e.preventDefault();
      // @TODO: convert to Async/Await
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(err => console.warn(err.message));
  };
  // @TODO: convert to Async/Await
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          history.push('/');
        }
      })
      .catch(err => console.warn(err.message));
  }

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
          <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}/>

          <button className='login__signInButton' type='submit' onClick={signIn}>
            Sign in
          </button>

        </form>

        <p>By continuing, you agree to the AMAZON FAKE CLONE Conditions of Use and
          Privacy Notice.</p>

        <p className='login__newText'>New to Amazon FAKE Clone?</p>

        <button className='login__registerButton' onClick={register}>
          Create your Amazon FAKE Clone account
        </button>

      </div>
    </div>
  )
}

export default Login
