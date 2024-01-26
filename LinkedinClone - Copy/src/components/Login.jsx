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
                <SigninWithGmail>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='enter your email'/>
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder='password' />
                    <h3>Forgot password?</h3>
                    <button>Sign in</button>
                </SigninWithGmail>
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
    font-weight: 500;
    &:hover{
        background: rgba(0, 0, 0, 0.08);
        border-radius: 25px;
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
    font-weight: 500;
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
        flex-direction: column;
        align-items: center;
    }
`
const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #b24020;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    z-index: -1;
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
`;
const Form = styled.div`
    /* margin-top: 50px; */
    width: 408px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`;
const SigninWithGmail = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 50px 0;
    gap: 20px;
    input{
        padding: 20px 30px;
        border-radius: 5px;
        border: 1px solid #696969;
        font-size: 20px;
        background-color: transparent;
    }
    h3{
        color: #0a66c2;
    }
    button{
        font-size: 20px;
        padding: 10px 20px;
        border-radius: 28px;
        background: #0a66c2;
        color: #fff;
        border: none;
        width: 100%;
        height: 56px;
        transition-duration: 167ms;
        &:hover{
            background-color: #3189f5;
        }
    }
`
const Google = styled.button`
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: center;
    background-color: #fff;
    border-radius: 28px;
    height: 56px;
    width: 100%;
    border: 1px solid #696969;
    ${'' /* box-shadow: inset 0 0 0 1px rgb(0 0 0/60%),inset 0 0 0 2px rgb(0 0 0/0%),inset 0 0 0 1px rgb(0 0 0/0%); */}
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0,0,0,0.6);
    &:hover{
        background-color: rgba(207,207,207, 0.25);
        color: rgba(0,0,0,0.75);
    }
`;
