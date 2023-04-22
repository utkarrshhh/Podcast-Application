import React from 'react'
import SignUpHeader from "../Components/SignUpHeader/SignUpHeader"
import NavBarSmall from "../Components/NavBar/NavBarSmall"
export default function SignUp() {
  return (
    <div className='signUp'>
       <NavBarSmall title="login"/>
        <SignUpHeader/>
    </div>
  )
}
