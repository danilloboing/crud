import React from 'react';
import styled from 'styled-components';

const BotaoCustomizado = styled.button`

  text-transform: uppercase;
  font-weight: 700;
  font-size: .75rem;
  line-height: 1rem;
  text-align: center;
  padding: .75rem 1.5rem;
  background-color: #1e88e5;
  background-image: linear-gradient(to top right,#1e88e5,#42a5f5);
  border-radius: .5rem;
  width: 100%;
  outline: 0;
  border: 0;
  color: #fff;
  
  &:hover {
     cursor: pointer;
     background-image: linear-gradient(to top right,#42a5f5,#1e88e5);
   }
   
   ${props => props.disabled === false &&`
    &:hover {
      background-color: #FFF;
      color: #6a6a6a;
    }
    `}

  ${props => props.disabled &&`
    &:hover {
      cursor: not-allowed;
    }
    opacity: 0.7
  `}
`;

const Botao = ({
  type,
  text,
  onClick,
  disabled,
}) => {
  return ( 
    <BotaoCustomizado
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      >
        {text}
    </BotaoCustomizado>
   );
}
 
export default Botao;