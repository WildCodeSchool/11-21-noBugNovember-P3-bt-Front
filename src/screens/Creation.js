import React from 'react'
import './styles/Creation.css'
import BTHTLogo from '../assets/BTHT-Blue_edited.webp'
import { useState } from 'react'
import axios from 'axios'
import { ImCross } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'
import sha256 from 'crypto-js/sha256'

const Creation = () => {
  const navigate = useNavigate()
  const [newSignUp, setNewSignUp] = useState({
    email: '',
    password: '',
    forgetPassword: '',
  })

  const postSign = async (e) => {
    console.log(newSignUp)
    e.preventDefault()
    await setNewSignUp({ ...newSignUp })
    axios
      .post('http://localhost:4040/creation', {
        email: newSignUp.email,
        password: sha256(newSignUp.password).toString(),
        forgetPassword: sha256(newSignUp.forgetPassword).toString(),
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className='loginPage'>
      <div className='loginBackground'></div>
      <div className='loginContainer'>
        <img src={BTHTLogo} alt='logo_BTHT' id='loginLogo' />
        <form className='loginWrapper'>
          <span className='loginTitle'>Username</span>
          <label className='loginLabel'>
            <input
              type='email'
              name='email'
              placeholder='username'
              className='loginInput'
              onChange={(e) => {
                const { value } = e.target
                setNewSignUp({ ...newSignUp, email: value })
                console.log(value)
              }}
            ></input>
          </label>
          <div className='cross'>
            <ImCross onClick={() => navigate(-1)} />
          </div>
          <span className='loginTitle'>Password</span>
          <label className='loginLabel'>
            <input
              type='password'
              name='password'
              placeholder='password'
              className='loginInput'
              onChange={(e) => {
                const { value } = e.target
                setNewSignUp({ ...newSignUp, password: value })
                console.log(value)
              }}
            ></input>
          </label>
          <span className='loginTitle'>Confirm Password</span>
          <label className='loginLabel'>
            <input
              type='password'
              name='confirm password'
              placeholder='confirm password'
              className='loginInput'
              onChange={(e) => {
                const { value } = e.target
                setNewSignUp({ ...newSignUp, forgetPassword: value })
                console.log(value)
              }}
            ></input>
          </label>
          <div className='loginBtnWrapper'>
            <button id='loginBtn' onClick={(e) => postSign(e)}>
              ENTER
            </button>
          </div>
        </form>
      </div>
      <div className='loginBackground backgroundRight'></div>
    </div>
  )
}

export default Creation
