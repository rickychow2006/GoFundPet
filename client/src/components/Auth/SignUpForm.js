import {useState} from 'react';
import "./Form.css";


const SignUpForm = ({setOpenModal, setCurrentUser}) => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("")

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (confirmPassword === password ) {
    fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({username, password})
    })
      .then(res => {
      if (res.ok) {
          res.json().then(user => {
          setCurrentUser(user)
          })
          setOpenModal(false)
      } else {
        res.json()
        .then(errors => {
          setErrors(...errors)
        })
    }
    })
    } else { setErrors("Password doesn't match!")}
  }

  return (
    <div className="form__wrapper">
      <form onSubmit={handleSignUp}> 
        <div className="form__header">
          <h1>Sign up</h1>
        </div>
        <div className="errors">
          {errors?
            <div>{errors}</div>:""
          }
        </div>
        <div className="form__input">
          <input 
              type="text"
              name="username"
              placeholder="Please Type Your Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
          >
          </input>
        </div>
        <div className="form__input">
          <input
              type="password"
              name="password"
              placeholder="Input PassWord..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          >
          </input>
        </div>
        <div className="form__input">
          <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default SignUpForm;