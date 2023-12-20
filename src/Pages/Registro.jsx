import React from 'react'
import { userLogin } from '../hook/Auth/useLogin';
import { userRegister } from '../hook/Auth/useRegister';

const Registro = () => {
  const {
    onChangeInfo,
    handleRegister,
    email,
    password,
    password2,
    name
  } = userRegister();
  return (
    <div>
      Registro
      <input type="text" name='email' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={email}/>
      <input type="text" name='name' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={name}/>
      <input type="text" name='password' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={password}/>
      <input type="text" name='password2' onChange={({target: {value, name}}) => onChangeInfo(value, name)} value={password2}/>
      <button onClick={() => handleRegister()}>Login</button>
    </div>
  )
}

export default Registro
