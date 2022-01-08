import React from 'react';
import {connect} from 'react-redux';
import './NavBar.css';
import { Link } from "react-router-dom";
import {logout} from '../../actions/session'
import { useDispatch, useSelector } from "react-redux";


const NavBar = ( {user}) => {
  const dispatch = useDispatch();

  const handleLogout = async (e) => {
    dispatch(logout());
  }

  return (
    <nav className='nav-bar'>
    <div className='navbar-left'>
    {!user ? (
      <Link to ='/' className='nav-home-link'>
        <p className='logo-text'>GoFundPet</p>
      </Link>) : (
      <Link to ={`/users/${user.id}/1`} className='nav-home-link'>
        <p className='logo-text'>GoFundPet</p>
      </Link>) }
    </div>

    <div className='navbar-right'>
      {!user ? (
        <Link to='/login' className='nav-login-link'>Sign In</Link>) : null }
      {!user ? (
        <Link to='/signup' className='nav-signup-link'>Get Started</Link>) : 
        <Link to='/' className='nav-signup-link' onClick={handleLogout}> Logout</Link> }
    </div>
  </nav>
  )
}

export default NavBar