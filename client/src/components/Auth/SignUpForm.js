import {useState} from 'react';
import "./Form.css";
import { updateSignupForm } from "../../actions/signupForm";
import { signup } from "../../actions/currentUser";
import { connect } from 'react-redux';

const SignupForm = ({signupFormData, updateSignupForm, signup}) => {

  const handleOnChange = e => {
    const { name, value } = e.target;
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    };
    updateSignupForm(updatedFormInfo);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    signup(signupFormData);
  };

  return (
    <div className="form__wrapper">
      <form onSubmit={handleOnSubmit}> 
        <div className="form__header">
          <h1>Sign up</h1>
        </div>
        <div className="form__input">
          <input 
              type="text"
              name="username"
              placeholder="Please Type Your Username..."
              value={signupFormData.username}
              onChange={handleOnChange}
          >
          </input>
        </div>
        <div className="form__input">
          <input
              type="password"
              name="password"
              placeholder="Input PassWord..."
              value={signupFormData.password}
              onChange={handleOnChange}
          >
          </input>
        </div>
        <div className='form__button'>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  };
};

export default connect(mapStateToProps, { updateSignupForm, signup })(SignupForm);


