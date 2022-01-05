import { useState } from "react";
import "./Form.css";
import { connect } from "react-redux";

const LoginForm = ({setOpenModal, setCurrentUser}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  
  const handleLogin = async (e) => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })
      .then(res => {
      if (res.ok) {
          res.json()
          .then(user => {
          setCurrentUser(user)
          setOpenModal(false)  
          }
          )

      } else {
          res.json()
          .then(errors => {
            setErrors(errors.error)
          })
      }
      })
  }

  return (
    <div className="form__wrapper">
      <form onSubmit={handleLogin}> 
        <div className="form__header">
          <h1>Login</h1>
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
        <div className='form__button'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
