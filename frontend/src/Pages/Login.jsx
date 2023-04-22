import React from 'react'
import LoginHeader from '../Components/LoginHeader/LoginHeader'
import NavBarSmall from '../Components/NavBar/NavBarSmall'
export default function Login() {
  return (
    <div className='login'>
      <NavBarSmall title="signup"/>
      <LoginHeader/>
    </div>
  )
}
