import React from 'react'
import './LoginPageStyles.jsx'
import lginPageImage from '../../assets/images/login-page-image.jpg';
import AuthenticationForm from './AuthenticationForm'
import { MainContainer, LoginFormContainer } from './LoginPageStyles.jsx';

function LoginPage() {
  return (
    <MainContainer>
      <LoginFormContainer>
        <img src={lginPageImage} alt="" height="500" />
        <AuthenticationForm></AuthenticationForm>
      </LoginFormContainer>
    </MainContainer>
  )
}

export default LoginPage