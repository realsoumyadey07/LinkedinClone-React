import React from 'react'
import styled from 'styled-components';

function Login(props) {
  return (
    <Container>
        <Nav>
            <a href="">
                <img src="/images/login-logo.svg" alt="" />
            </a>
            <div>
                <Join>Join now</Join>
                <Signin>Sign in</Signin>
            </div>
        </Nav>
        <Section>
            <Hero>
                <h1>Welcome to your professional community</h1>
                <img src="/images/login-hero.svg" alt="" />
            </Hero>
            <Form>
                <Google>
                    <img src="/images/google.svg" alt="" />
                    Signin with google
                </Google>
            </Form>
        </Section>
    </Container>
  )
}

export default Login;

const Container = styled.div`
    padding: 0;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;
const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px; 
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    font-weight: 600;
    &:hover{
        background: rgba(0, 0, 0, 0.08);
        border-radius: 5px;
        color: rgba(0, 0, 0, 0.9);
    }
`
const Signin = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color:#0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    &:hover{
        color: rgba(0, 0, 0, 0.7);
        background: rgba(112, 181, 249, 0.15);
    }
`
const Section = styled.section`
    display: flex;
    align-content: start;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px) {
        margin: auto;
        min-height: 0;
    }
`
const Hero = styled.div`
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        color: #b24020;
        font-size: 56px;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px){
            text-align: center;
            width: 100%;
            line-height: 2;
        }
    }
    img{
        /* z-index: -1; */
        width: 700px;
        height: 670px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        @media (max-width: 768px) {
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`
const Form = styled.div`
    
`;
const Google = styled.button`
    
`;