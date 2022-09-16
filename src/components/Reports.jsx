import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.png"

const Wrapper = styled.div`
    width: 1530px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const UpperContainer = styled.div`
        display: flex;
        justify-content: space-between;
`
const LowerContainer = styled.div`
        
`
const MainContainer = styled.div`
        
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
const PageTitle = styled.h1`
    font-weight: 100;
    color: #FDBF47;
    margin-bottom: 50px;
    text-transform: uppercase;
`

const Reports = () => {
  return (
    <Wrapper>
        <MainContainer>
        <PageTitle>REPORT PAGE IS UNDER CONSTRUCTION</PageTitle>
        </MainContainer>
    </Wrapper>
  )
}

export default Reports