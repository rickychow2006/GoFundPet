import LoginForm from './LoginForm';
import { GrClose as Close } from "react-icons/gr";
import './Modal.css';

const LoginFormModal = ({setOpenModal, setCurrentUser}) => {
  return (
    <div id="modal">
      <div id="modal-background" />
       <div id="modal-content">
        <div id="modal__close-button"><Close onClick={() => setOpenModal(false)} id="close__button" /></div>
          <LoginForm setOpenModal={setOpenModal} setCurrentUser = {setCurrentUser} />
        </div>
    </div>
  )
};

export default LoginFormModal
