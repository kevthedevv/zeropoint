import React from 'react'
import styled from "styled-components"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"


const Wrapper = styled.div`
    width: 1530px;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.img`
  height: 120px;
  margin-right: 20px;
`
const Headline = styled.div`
   font-size: 60px;
   color: #ffffff;
   
`
const MainContainer = styled.div`
    width: 1000px;
    height: 700px;
    @media (max-width: 1280px) {
        width: 900px;
}
`
const Activity = styled.div`
    width: 570px;
    min-width: 570px;
    margin-right: 20px;
    height: 285px;
    border-radius: 50px;
    background-color: #FDBF47;
    @media (max-width: 1280px) {
        width: 400px;
}
`
const UpperContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
`
const MiddleContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    justify-content: space-between;
`
const LowerContainer = styled.div`

`
const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Button = styled.div`
    height: 80px;
    background-color: #6DA328;
    color: white;
    cursor: pointer;
    border: 0;
    width: 100%;
    border-radius: 50px;

    &:hover,&:focus{
        background-color: #FDBF47;
        outline: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1280px) {
     
}
`
const ActivityContainer = styled.div`
      padding: 20px 0 0 50px;
`


const AccountSummary = styled.div`
    width: 100%;
    height: 300px;
    background-color: #FFFFFF;
    border-radius: 50px;
    //box-shadow: 5px 5px 18px #dfdfdf;
`
const AccountSummaryContainer = styled.div`
      padding: 20px 0 0 50px;
`
const CardTitle = styled.h1`
    font-weight: 100;
    color: white;
    margin-bottom: 50px;
`
const Title = styled.h3`
    font-weight: 100;
    color:#5A5959;
`
const Description = styled.h3`
    font-weight: 100;
    color: white;
`
const AccountDataWrapper = styled.div`
    display: flex;
`
const AccountDataContainer = styled.div`
    margin-right: 40px;
`

const AccountData = styled.h1`
    font-size: 60px;
    font-weight: 100;
`

const Dashboard = () => {
  return (
    <Wrapper>
        <MainContainer>
            <UpperContainer>
                <LogoContainer>
                    <Logo src={logo}></Logo>
                    <Headline>Zero Point</Headline>
                </LogoContainer>
            </UpperContainer>
            <MiddleContainer>
                <Activity>
                    <ActivityContainer>
                        <CardTitle>YOUR ACTIVITY</CardTitle>
                        <Title>IP ADDRESS</Title>
                        <Description style={{ marginBottom: "40px"}}>192.168.1.1</Description>
                        <Title>LAST LOGIN</Title>
                        <Description>August 28, 2022</Description>
                    </ActivityContainer>
                </Activity>
                <ButtonsContainer>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <Button>Profile</Button>
                    </Link>
                    <Button>View Your Network</Button>
                    <Button>My Transactions</Button>
                </ButtonsContainer>
            </MiddleContainer>
            <LowerContainer>
                <AccountSummary>
                    <AccountSummaryContainer>
                        <CardTitle style={{ color: "#5A5959"}}>ACCOUNT SUMMARY</CardTitle>
                        <AccountDataWrapper>
                            <AccountDataContainer>
                                <Title>Pairing Commission</Title>
                                <AccountData style={{ color: "#FDBF47"}}>P200</AccountData>
                            </AccountDataContainer>
                            <AccountDataContainer>
                                <Title>Direct Referral</Title>
                                <AccountData style={{ color: "#FDBF47"}}>P450</AccountData>
                            </AccountDataContainer>
                            <AccountDataContainer>
                                <Title>Available Fund to Withdraw</Title>
                                <AccountData style={{ color: "#FDBF47"}}>P8,000</AccountData>
                            </AccountDataContainer>
                            <AccountDataContainer>
                                <Title>Total Commission</Title>
                                <AccountData style={{ color: "#6DA328"}}>P900</AccountData>
                            </AccountDataContainer>
                        </AccountDataWrapper>
                    </AccountSummaryContainer>
                </AccountSummary>
            </LowerContainer>
        </MainContainer>
    </Wrapper>
  )
}

export default Dashboard