import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.png"
import GridViewIcon from '@mui/icons-material/GridView';
import Face4Icon from '@mui/icons-material/Face4';
import HubIcon from '@mui/icons-material/Hub';
import ArticleIcon from '@mui/icons-material/Article';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom"

const Wrapper = styled.div`
  width: 390px;
  height: 100vh;
  background-color: #F8F8FA;
  padding-left: 40px;
  padding-top: 40px;
`

const LogoContainer = styled.div`
  display: flex;
  padding-left: 20px;
  padding-bottom: 30px;
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
const MenuContainer = styled.div`
  
`
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0 20px 40px;
  font-size: 20px;
  margin: 0;
    &:hover{
        background-color: white;
        margin-right: 50px;
        border-radius: 50px;
        color: #6DA328;
        box-shadow: 5px 5px 18px #dfdfdf;
        cursor: pointer;
    }
`
const IconContainer = styled.div`
  margin-right: 10px;
`
const Menu = () => {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo src={logo}></Logo>
        <Headline>Zero Point</Headline>
      </LogoContainer>
      <MenuContainer>
        <MenuItems><IconContainer><GridViewIcon></GridViewIcon></IconContainer>Dashboard</MenuItems>
        <MenuItems><IconContainer><Face4Icon></Face4Icon></IconContainer>Profile</MenuItems>
        <MenuItems><IconContainer><HubIcon></HubIcon></IconContainer>Network</MenuItems>
        <MenuItems><IconContainer><ArticleIcon></ArticleIcon></IconContainer>Reports</MenuItems>
        <Link to="/">
         <MenuItems style={{ marginTop: "100px"}}><IconContainer><ExitToAppIcon></ExitToAppIcon></IconContainer>Logout</MenuItems>
        </Link>
      </MenuContainer>

    </Wrapper>
  )
}

export default Menu