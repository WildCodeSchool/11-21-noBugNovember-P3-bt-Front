import BTHTLogo from '../assets/BTHT-Blue_edited.webp'
import axios from 'axios'
import { useState } from 'react'
import sha256 from 'crypto-js/sha256'
import { useNavigate } from 'react-router-dom'

import './styles/Login.css'

const Login = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorConnect, setErrorConnect] = useState(false)
  const [isOut, setIsOut] = useState(false)
  console.log(errorConnect, isOut)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    axios
      .post('http://localhost:4040/auth/login', {
        username: email,
        password: sha256(password).toString(),
      })
      .then((res) => {
        console.log('ress poulet :', res)
        localStorage.setItem('token', res.headers['x-access-token'])
        console.log('token', localStorage.getItem('token'))
        navigate('/clients')
      })
      .catch((err) => {
        if (err.response) {
          setErrorConnect(true)
        } else if (err.request) {
          setIsOut(true)
        }
      })
  }
  return (
    <div className='loginPage'>
      <div className='loginBackground'></div>
      <div className='loginContainer'>
        <img src={BTHTLogo} alt='logo_BTHT' id='loginLogo' />
        <form className='loginWrapper' onSubmit={(e) => handleSubmit(e)}>
          <span className='loginTitle'>S'identifier</span>
          <label className='loginLabel'>
            <input
              type='email'
              name='email'
              placeholder='tictac@gmail.com'
              className='loginInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label className='loginLabel'>
            <input
              type='password'
              name='password'
              placeholder='mot de passe'
              className='loginInput'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <div className='loginBtnWrapper'>
            <button id='loginBtn'>ENTER</button>
          </div>
          {errorConnect && (
            <p className='inputText' id='gridCo4'>
              ⚠ Mauvais nom d'utilisateur ou mot de passe
            </p>
          )}
          {isOut && (
            <p className='inputText' id='gridCo4'>
              ⚠ Serveur distant indisponible
            </p>
          )}
          {/* <input type='submit' value='ENTER' className='loginBtn'></input> */}
          {/* <div className='loginInput'> */}
          {/* <label htmlFor='userName' className='loginLabel'>
              Username
            </label>
            <input type='text' id='userName' placeholder='username' /> */}
          {/* </div> */}
          {/* <div className='loginInput'>
            <label htmlFor='password' className='loginLabel'>
              Password
            </label>
            <input type='text' id='password' placeholder='password' />
          </div> */}
        </form>
      </div>
      <div className='loginBackground backgroundRight'></div>
    </div>
  )
}

export default Login
