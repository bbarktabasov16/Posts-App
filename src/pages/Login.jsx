import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

  return (
    <div style={{marginTop: 100}}>
      <h1 style={{color: 'teal'}}>LogIn</h1>
      <form style={{marginTop: 25}} onSubmit={login}>
        <MyInput type="text" placeholder='Введите логин' />
        <MyInput type="password" placeholder='Введите пароль' />
        <MyButton style={{marginTop: 10}}>Войти</MyButton>
      </form>
    </div>
  )
}

export default Login
