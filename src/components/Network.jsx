import React from 'react'
import styled from "styled-components"
import tree from "../images/tree.JPG"

const Wrapper = styled.div`
    width: 1530px;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const UpperContainer = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
       
`
const LowerContainer = styled.div`
        
`
const MainContainer = styled.div`
        
`

const Image = styled.img`
        @media (max-width: 1280px) {
    width: 800px;
    height: 550px;
}
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
        &:hover,&:focus{
                background-color: #FDBF47;
                outline: none;
        }
        display: flex;
        align-items: center;
        justify-content: center;
`
const PageTitle = styled.h1`
    font-weight: 100;
    color: #FDBF47;
    text-transform: uppercase;
`

const Network = () => {
  return (
    <Wrapper>
        <MainContainer>
                <UpperContainer>     
                        <PageTitle>GENEALOGY TREE</PageTitle>
                        <Button>Add New Member</Button>
                </UpperContainer>
                <LowerContainer>
                        <Image src={tree}></Image>
                </LowerContainer>
        </MainContainer>

    </Wrapper>
  )
}

export default Network