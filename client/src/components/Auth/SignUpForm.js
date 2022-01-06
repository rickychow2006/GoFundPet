import {useState} from 'react';
import "./Form.css";
import { connect } from 'react-redux';
import { signup } from '../../actions/session';

const SignupForm = ({user, signup}) => {

  const [username, setUsername] = useState("");
  const [passowrd, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const data = await signup(username, passowrd);
    if(data.error) {
      alert(data.error)
    }
  }

  return (
    <div className="form-page">
    <div className="form__wrapper">
      <form onSubmit={handleSignUp} > 
        <div className="form__header">
          <h1>Sign up</h1>
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
              value={passowrd}
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

export default connect(mapStateToProps, {signup})(SignupForm);


