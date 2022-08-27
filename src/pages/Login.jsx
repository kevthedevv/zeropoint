import React from 'react'
import styled from "styled-components"
import bg from "../images/bg.png"
import logo from "../images/logo.png"

const Wrapper = styled.div`
  height: 100vh;
  background-color: #F3F2F3;
  background-image: url(${bg});;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoginContainer = styled.div`
  width: 400px;
  height: 400px;
  `
const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 25px;
`
const Logo = styled.img`
  height: 50px;
  width: 90px;
  margin-right: 20px;
`
const Headline = styled.div`
   font-size: 40px;
   color: #6DA328;
`
const FormContainer = styled.div`
  
`
const P = styled.div`
  
`
const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 300px;
  border: 1px solid #bbbbbb;
`
const Input = styled.input`
  border: 0;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  width: 300px;
`

const Button = styled.div`
    padding: 10px;
    height: 40px;
    background-color: #6DA328;
    color: white;
    cursor: pointer;
    border: 0;
    width: 300px;
    &:hover,&:focus{
        background-color: #FDBF47;
        outline: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
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
        <P style={{ marginBottom: "20px"}}>Doesn't have an account yet? <span style={{ color: "#6DA328", fontWeight: "bold"}}>SIGN UP</span></P>
        <FormContainer>
              <P>Username</P>
              <InputContainer style={{ marginBottom: "10px" }}>
                <Input></Input>
              </InputContainer>
              <P>Password</P>
              <InputContainer style={{ marginBottom: "20px" }}>
                <Input style={{  fontFamily: "Verdana", letterSpacing: "0.125em"}}></Input>
              </InputContainer>
              <Button type='submit'>Login</Button>
            </FormContainer>
      </LoginContainer>
    </Wrapper>
  )
}

export default Login