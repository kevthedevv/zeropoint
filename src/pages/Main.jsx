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

const P = styled.div`
  
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
    </Wrapper>
  )
}

export default Login