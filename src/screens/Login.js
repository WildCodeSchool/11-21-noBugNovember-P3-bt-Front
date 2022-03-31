import axios from 'axios'
import BTHTLogo from '../assets/BTHT-Blue_edited.webp'
import { Link } from 'react-router-dom'
import sha256 from 'crypto-js/sha256'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './styles/Login.css'

const Login = () => {
  let navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorConnect, setErrorConnect] = useState(false)
  const [isOut, setIsOut] = useState(false)
  console.log(errorConnect, isOut)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorConnect(false)
    setIsOut(false)
    console.log(email, password)
    console.log(sha256(password).toString())
    await axios
      .post('http://localhost:4040/auth/login', {
        email: email,
        password: sha256(password).toString(),
      })
      .then((res) => {
        console.log('ress poulet :', res)
        localStorage.setItem('token', res.headers['x-access-token'])
        console.log('token', localStorage.getItem('token'))
        console.log('voyage')
        navigate('/projects')
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
        <form className='loginWrapper1' onSubmit={(e) => handleSubmit(e)}>
          <Link to='/creation'>
            <button id='loginBtn2'>SIGN IN</button>
          </Link>
          <span className='loginTitle'>Username</span>
          <label className='loginLabel'>
            <input
              type='email'
              name='email'
              placeholder='username'
              className='loginInput'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <span className='loginTitle'>Password</span>
          <label className='loginLabel'>
            <input
              type='password'
              name='password'
              placeholder='password'
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
              ⚠ Wrong Username or password
            </p>
          )}
          {isOut && (
            <p className='inputText' id='gridCo4'>
              ⚠ Serveur distant indisponible
            </p>
          )}
        </form>
      </div>
      <div className='loginBackground backgroundRight'></div>
    </div>
  )
}

export default Login
