import { Form, FormContainer, Header, InputsContainer, SignupLink, StyledLink } from './styles';
import { toast, ToastContainer } from "react-toastify";
import Input from '../../components/Input'
import Botao from '../../components/Botao';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { validaEmail, validaSenha } from "../../Utils/validators";


const LoginPage = () => {

  const [loading, setLoading] = useState();
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

      setLoading(true)
      
      if (validaEmail(form.email) && validaSenha(form.password)) {
        toast.success("Login Válido")
        navigate('/home')
      } else {
        toast.error("Login Inválido");
      }
      setLoading(false)
  };
  

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validaEmail(form.email) && validaSenha(form.password)
  }

  return (
    <FormContainer> 
      <Form>
        <Header >Sign In</Header>

        <InputsContainer>
          <Input
            name='email'
            placeholder='E-mail'
            onChange={handleChange}
            type='email'
          />
          <Input
            name='password'
            placeholder='Password'
            onChange={handleChange}
            type='Password'
          />
            <Botao
            type='submit'
            text='Log In'
            onClick={handleSubmit}
            disabled={loading === true || !validadorInput()}
          />
          
          <SignupLink>
            Don't have an account? 
          </SignupLink>
          <StyledLink href="/cadastro">Sign up</StyledLink>
        </InputsContainer>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      </Form>
    </FormContainer>
  );
}

export default LoginPage;