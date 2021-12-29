import { useState, useEffect } from "react";
import LoginFormModal from "./components/Auth/LoginFormModal";
import SignUpFormModal from "./components/Auth/SignUpFormModal";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  const handleLogout = () => {
    fetch("/logout", {method: "DELETE"}).then((r) => {
      if (r.ok) {
        setCurrentUser(null);
      }
    })
  }

  useEffect(() => {
    fetch('/me',)
        .then(res => {
        if (res.ok) {
            res.json().then(user => {
            setCurrentUser(user)})
        }})
    }, [])
  
  return (
    <div>
          <button onClick = {() => {setShowLogin(!showLogin)}} style={{cursor: 'pointer'}}>
              Login
          </button>
          {showLogin && <LoginFormModal setOpenModal = {setShowLogin} setCurrentUser = {setCurrentUser}/>}

          <button onClick={() => {setShowSignUp(!showSignUp)}} style={{cursor: 'pointer'}} >
              Sign Up
          </button>
          {showSignUp && <SignUpFormModal setOpenModal = {setShowSignUp} setCurrentUser = {setCurrentUser}/>}
          
          {currentUser? <button onClick={handleLogout}> Logout </button> : ""}
          {currentUser? <h3>Welcome {currentUser.username}</h3> : ""}
    </div>
  );
}

export default App;
