import React from 'react'
import styled from "styled-components"
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