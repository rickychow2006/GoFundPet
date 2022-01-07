import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/Auth/SignUpForm";
import LoginForm from "./components/Auth/LoginForm";
import { Switch } from 'react-router-dom';
import { authenticate } from "./actions/session";
import FundingPage from "./components/FundingPage/FundingPage";
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Splash from "./components/Splash/Splash";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  };
  
  return (
    <div>
      <header>
      <NavBar exact path ={['/', '/signup', '/login']} user={user}/>
      </header>
      <Switch >
        <SignUpForm path='/signup' />
        <LoginForm path='/login' />
        <ProtectedRoute path="/users/:userId(\d+)">
          <FundingPage/>
        </ProtectedRoute>
        <Splash path='/'/>
      </Switch >
    </div>
  );
}

export default App;
