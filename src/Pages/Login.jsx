import React from 'react'
import { userLogin } from '../hook/Auth/useLogin';

const Login = () => {
  const {
    handleLogin,
    onChangeInfo,
    email,
    password,
  } = userLogin();
  return (
    <div>
      Login
      <input type="text" name='email' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={email}/>
      <input type="text" name='password' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={password}/>
      <button onClick={() => handleLogin()}>Login</button>
    </div>
  )
}

export default Login
