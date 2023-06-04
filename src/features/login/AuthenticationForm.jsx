import React from 'react'
import { LoginForm, FormGroup, ForgotLink, Label, Input, Button, Link, Heading } from './AuthenticationFormStyles.jsx'

function AuthenticationForm() {
  return (
    <LoginForm>
      <Heading>Login</Heading>
      <FormGroup>
        <Label htmlFor="username">Username</Label>
        <Input type="text" id="username" placeholder="Enter your username" required/>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Enter your password" required/>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Login</Button>
      </FormGroup>
      <ForgotLink>
        <Link href="#">Forgot username/password?</Link>
      </ForgotLink>
    </LoginForm>
  )
}

export default AuthenticationForm