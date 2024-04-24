import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context'

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={classes.navbar}>
        <MyButton style={{color: 'white', border: '1px solid white'}} onClick={logout}>
          Выйти
        </MyButton>
        <div className={classes.navbar__links}>
          <Link to="/about">О сайте</Link>
          <Link to="/posts">Посты</Link>
        </div>
    </div>
  )
}

export default Navbar
