import React from 'react'
import styled from "styled-components"
import bg from "../images/bg.png"
import {Link} from "react-router-dom"


const Wrapper = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url(${bg});;
        background-repeat: no-repeat;
        background-position: center;
`
const MainContainer = styled.div`
        width: 800px;
        height: 700px;
`
const FormContainer = styled.div`
        display: flex;
        justify-content: space-between;
`
const FormConainerLeft = styled.div`

`
const FormConainerRight = styled.div`
        
`
const P = styled.div`
  margin-bottom: 3px;
`
const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  width: 350px;
  border: 1px solid #bbbbbb;
  border-radius: 7px;
  margin-bottom: 20px;
`
const Input = styled.input`
  border: 0;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  width: 340px;
`
const Select = styled.select`
  border: 0;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
  width: 340px;
`
const CardTitle = styled.h1`
    font-weight: 100;
    color: #6DA328;
    margin-bottom: 50px;
`
const Button = styled.div`
    padding: 10px;
    height: 25px;
    background-color: #6DA328;
    color: white;
    cursor: pointer;
    border: 0;
    border-radius: 50px;
    width: 350px;
    &:hover,&:focus{
        background-color: #FDBF47;
        outline: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`



const Register = () => {
  return (
        <Wrapper>
                <MainContainer>
                        <CardTitle>REGISTRATION</CardTitle>
                        <FormContainer>
                                <FormConainerLeft>
                                        <P>Firstname</P>
                                        <InputContainer>
                                                <Input></Input>
                                        </InputContainer>
                                        <P>Middlename</P>
                                        <InputContainer>
                                                <Input></Input>
                                        </InputContainer>
                                        <P>Lastname</P>
                                        <InputContainer>
                                                <Input></Input>
                                        </InputContainer>
                                        <P>Package Code</P>
                                        <InputContainer>
                                                <Input></Input>
                                        </InputContainer>
                                </FormConainerLeft>
                                <FormConainerRight>
                                        <P>Desired username</P>
                                        <InputContainer>
                                                <Input></Input>
                                        </InputContainer>
                                        <P>Sponsor username</P>
                                        <InputContainer>
                                                <Input></Input>
                                        </InputContainer>
                                        <P>Placement username</P>
                                        <InputContainer>
                                                <Input></Input>
                                        </InputContainer>
                                        <P>Position</P>
                                        <InputContainer>
                                                <Select>
                                                <option value="1">Left</option>
                                                <option value="2">Right</option>
                                                </Select>
                                        </InputContainer>
                                        <Link to="/">
                                                <Button>Register</Button>
                                        </Link>
                                </FormConainerRight>
                        </FormContainer>
                </MainContainer>
        </Wrapper>
  )
}

export default Register