import React from 'react'
import styled from 'styled-components';

function LoginComp() {
  return (
    <SigninWithGmail>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder='enter your email'/>
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder='password' />
                    <h3>Forgot password?</h3>
                    <button>Login</button>
    </SigninWithGmail>
  )
}

export default LoginComp;
const SigninWithGmail = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 20px;
    input{
        padding: 15px 20px;
        border-radius: 5px;
        border: 1px solid #696969;
        font-size: 20px;
        background-color: transparent;
    }
    h3{
        color: #0a66c2;
        cursor: pointer;
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
