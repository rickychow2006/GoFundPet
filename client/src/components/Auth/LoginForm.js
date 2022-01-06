import "./Form.css";
import React, {useState, useEffect} from 'react';
import { login } from "../../actions/session";
import { connect } from 'react-redux';

const LoginForm = ({user, login}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = await login(username, password);
    if(data.error) {
      console.log(data.error)
    }
  }

  return (
    <div className="form-page">
    <div className="form__wrapper">
      <form onSubmit={handleLogin}> 
        <div className="form__header">
          <h1>Login</h1>
        </div>
        <div className="form__input">
          <input 
              type="text"
              name="username"
              placeholder="Please Type Your Username..."
              value={username}
              onChange={e => setUsername(e.target.value)}
          >
          </input>
        </div>
        <div className="form__input">
          <input
              type="password"
              name="password"
              placeholder="Input PassWord..."
              value={password}
              onChange={e => setPassword(e.target.value)}
          >
          </input>
        </div>
        <div className='form__button'>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    user: state.session.user
  }
}

export default connect(mapStateToProps, {login})(LoginForm);


