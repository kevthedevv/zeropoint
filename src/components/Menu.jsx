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
  background-color: #0A0A0A;
  display: flex;
  justify-content: center;
  @media (max-width: 1280px) {
    min-width: 250px;
}
  
`
const MenuContainer = styled.div`
  padding-top: 50px;
`
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 70px 20px 70px;
  font-size: 20px;
  color: #d8d8d8;
  margin: 0;
    &:hover{
        background-color: #6DA328;
        border-radius: 50px;
        color: white;
        //  box-shadow: 5px 5px 18px #dfdfdf;
        cursor: pointer;
    }
    @media (max-width: 1280px) {
      padding: 20px 20px 20px 20px;
}
`
const IconContainer = styled.div`
  margin-right: 10px;
  padding: 0;
`
const Menu = () => {
  return (
    <Wrapper>
      <MenuContainer>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <MenuItems><IconContainer><GridViewIcon></GridViewIcon></IconContainer>Dashboard</MenuItems>
        </Link>
        <Link to="/profile" style={{ textDecoration: 'none' }}>
        <MenuItems><IconContainer><Face4Icon></Face4Icon></IconContainer>Profile</MenuItems>
        </Link>
        <Link to="/network" style={{ textDecoration: 'none' }}>
        <MenuItems><IconContainer><HubIcon></HubIcon></IconContainer>Network</MenuItems>
        </Link>
        <Link to="/reports" style={{ textDecoration: 'none' }}>
        <MenuItems><IconContainer><ArticleIcon></ArticleIcon></IconContainer>Reports</MenuItems>
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
         <MenuItems style={{ marginTop: "100px"}}><IconContainer><ExitToAppIcon></ExitToAppIcon></IconContainer>Logout</MenuItems>
        </Link>
      </MenuContainer>

    </Wrapper>
  )
}

export default Menu