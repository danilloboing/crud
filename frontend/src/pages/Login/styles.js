import styled from 'styled-components'

export const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
  `
export const Form = styled.form`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.75rem;
    background-color: #fff;
    color: rgb(97 97 97);
    box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
    width: 22rem;
    background-clip: border-box;
    background: white;
    -webkit-box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 20px -6px rgba(0,0,0,0.75);
  `;

export const Header = styled.header`
    position: relative;
    background-clip: border-box;
    background-color: #1e88e5;
    background-image: linear-gradient(to top right,#1e88e5,#42a5f5);
    margin: 10px;
    border-radius: 0.75rem;
    overflow: hidden;
    color: #fff;
    height: 7rem;
    letter-spacing: 0;
    line-height: 1.375;
    font-weight: 600;
    font-size: 1.9rem;
    font-family: Roboto, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

export const InputsContainer = styled.div`
    padding: 1.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  `;

export const SignupLink = styled.a`
    line-height: 1.5;
    font-weight: 300;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

export const StyledLink = styled.a`
    line-height: 1.5;
    font-weight: 700;
    font-size: .875rem;
    margin-left: .25rem;
    color: #1e88e5;
    text-align: center;
  `;