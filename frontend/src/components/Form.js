import React, { useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
  width: 150px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

// eslint-disable-next-line
const Label = styled.label``;
// eslint-disable-next-line
const Select = styled.select`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getCars, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const car = ref.current;

      car.nome_carros.value = onEdit.nome_carros;
      car.placa.value = onEdit.placa;
      car.disponibilidade.value = onEdit.disponibilidade;
    }
  }, [onEdit]);

  const submit = async (e) => {
    e.preventDefault();
    const car = ref.current;

    if (!car.nome_carros.value ||
       !car.placa.value ||
       !car.disponibilidade.value
      ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      //UPDATE
      await axios
        .put("http://localhost:8000/" + onEdit.idcarros, {
          nome_carros: car.nome_carros.value,
          placa: car.placa.value,
          disponibilidade: car.disponibilidade.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      //POST
      await axios
        .post("http://localhost:8000", {
          nome_carros: car.nome_carros.value,
          placa: car.placa.value,
          disponibilidade: car.disponibilidade.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    Form.nome_carros.value = "";
    Form.placa.value = "";

    setOnEdit(null);
    getCars();
  };

  return (
    <FormContainer ref={ref} onSubmit={submit}>
      <InputArea>
        <Label>Carro</Label>
        <Input name="nome_carros" placeholder="Modelo, ano, ..." />
      </InputArea>
      <InputArea>
        <Label>Placa</Label>
        <Input name="placa" placeholder="ABC1D34" maxLength={8} />
      </InputArea>
      <InputArea>
        <Label>Está disponível?</Label>
        <Select name="disponibilidade">
          <option value="SIM">Sim</option>
          <option value="NAO">Não</option>
        </Select>
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;