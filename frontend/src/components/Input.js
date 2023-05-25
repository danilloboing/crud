import React from 'react';
import styled from 'styled-components';


const InputCustomizado = styled.input`
  border: 1px solid rgba(128, 128, 128, 0.61);
  outline: 0;
  color: rgb(69 90 100);
  font-weight: 400;
  font-size: .9rem;
  line-height: 1.25rem;
  padding: 0.75rem;
  background-color: transparent;
  border-radius: .375rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #1e88e5;
  }

  input::placeholder {
      color: #FFF;
      font-size: 12px;
      opacity: 0.7;
    }
`;

const Input = ({
  name,
  placeholder,
  onChange,
  type
}) => {
  return ( 
    <InputCustomizado
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
   );
}
 
export default Input;