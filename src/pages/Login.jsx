import React from 'react'
import styled from "styled-components"
import bg from "../images/bg.png"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"


const Wrapper = styled.div`
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
const LoginContainer = styled.div`
  width: 400px;
  height: 400px;
  `
const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  align-items: center;
`
const Logo = styled.img`
  height: 90px;
  margin-right: 20px;
`
const Headline = styled.div`
   font-size: 33px;
   color: #6DA328;
   
`
const FormContainer = styled.div`
  
`
const P = styled.div`
  color: #d8d8d8;
  
`
const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 300px;
  border: 1px solid #bbbbbb;
`
const Input = styled.input`
  border: 0;
  background-color: #000000;
  outline: none;
  font-size: 1rem;
  width: 300px;
  color: #d8d8d8;
`

const Button = styled.div`
     padding: 10px;
        height: 40px;
        background-color: #6DA328;
        color: white;
        cursor: pointer;
        border: 0;
        width: 300px;
        border-radius: 50px;
        margin-right: 10px;
        &:hover,&:focus{
                background-color: #FDBF47;
                outline: none;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
`

const Login = () => {
  return (
    <Wrapper>
    <LoginContainer>
      <LogoContainer>
          <Logo src={logo}>
          </Logo>
          <Headline>
            Zero Point
          </Headline>
      </LogoContainer>
        <P style={{ marginBottom: "20px"}}>Doesn't have an account yet? <Link to="/register"><span style={{ color: "#6DA328", fontWeight: "bold"}}>SIGN UP</span></Link></P>
        <FormContainer>
          <form autoComplete='off'>
              <P>Username</P>
              <InputContainer style={{ marginBottom: "10px" }}>
                <Input autocomplete="off" type="text"></Input>
              </InputContainer>
              <P>Password</P>
              <InputContainer style={{ marginBottom: "20px" }}>
                <Input style={{  fontFamily: "Verdana", letterSpacing: "0.125em"}} type="password" autoComplete='false'></Input>
              </InputContainer>
              <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Button type='submit'>Login</Button>
              </Link>
              </form>
            </FormContainer>

      </LoginContainer>
    </Wrapper>
  )
}

export default Login