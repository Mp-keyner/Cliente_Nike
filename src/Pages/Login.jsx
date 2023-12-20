import React, { useEffect } from 'react'
import { userLogin } from '../hook/Auth/useLogin';
import axios from 'axios';
import { useApi } from '../hook/utils/useApi';

const Login = () => {
  const {
    handleLogin,
    onChangeInfo,
    email,
    password,
  } = userLogin();
  const {errorApi} = useApi()
  console.log(errorApi, 'ko')
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
