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

`
const LowerContainer = styled.div`
        
`
const UpperButtons = styled.div`
        display: flex;
`
const LowerButtons = styled.div`
          display: flex;
`


const MainContainer = styled.div`
        
`
const PersonalInformation = styled.div`
    width: 1000px;
    height: 600px;
    background-color: #2E2E2E;
    border-radius: 50px;
    padding: 20px 0 0 50px;
    //box-shadow: 5px 5px 18px #dfdfdf;
`
const CardTitle = styled.h1`
    font-weight: 100;
    color: #FDBF47;
    margin-bottom: 50px;
    text-transform: uppercase;
`
const Title = styled.h3`
    font-weight: 100;
    color:#5A5959;
`
const Description = styled.h3`
    font-weight: 100;
    color: white;
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

const Profile = () => {
  return (
    <Wrapper>
        <MainContainer>
                <UpperContainer>        
                        <UpperButtons>
                                <Button>Edit Profile</Button>
                                <Button>Register new member</Button>
                        </UpperButtons>
                        <LowerButtons>
                                <Button>Change Password</Button>
                                <Button>Encashment Request</Button>
                        </LowerButtons>
                </UpperContainer>
                <LowerContainer>
                        <PersonalInformation>
                                <CardTitle>Personal Information</CardTitle>
                        </PersonalInformation>
                </LowerContainer>
        </MainContainer>
    </Wrapper>
  )
}

export default Profile