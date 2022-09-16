import React from 'react'
import styled from "styled-components"
import bg from "../images/bg.png"
import Menu from "../components/Menu"
import Dashboard from '../components/Dashboard'
import Profile from '../components/Profile'
import Reports from '../components/Reports'
import Network from '../components/Network'

const Wrapper = styled.div`
  height: 100vh;
  background-color: #000000;
  display: flex;
  overflow: hidden;
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

const Main = (props) => {
  const pageName = props.pageName;
  if(pageName == "profile"){
    return (
      <Wrapper>
        <Menu></Menu>
          <Profile></Profile>
      </Wrapper>
    )
  }
  else if(pageName == "network"){
    return (
      <Wrapper>
        <Menu></Menu>
        <Network></Network>
      </Wrapper>
    )
  }
  else if(pageName == "reports"){
    return (
      <Wrapper>
        <Menu></Menu>
        <Reports></Reports>
      </Wrapper>
    )
  }
  else if(pageName == "dashboard"){
    return (
      <Wrapper>
      <Menu></Menu>
        <Dashboard></Dashboard>
    </Wrapper>
    )
  }
  else{
    return (
      <Wrapper>
      <Menu></Menu>
    </Wrapper>
    )
  }
  
}

export default Main