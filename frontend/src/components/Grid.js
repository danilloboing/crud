import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ cars={cars}, setCars={setCars}, setOnEdit={setOnEdit} }) => {
  const editaCarros = (item) => {
    setOnEdit(item);
  }

  const deletaCarros = async (idcarros) => {
    await axios
      .delete("http://localhost:8000/" + idcarros)
      .then (({ data }) => {
        const novoArray = cars.filter((car) => car.idcarros !== idcarros);

        setCars(novoArray);
        toast.success(data)
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return(
    <Table>
      <Thead>
        <Tr>
          <Th>Carro</Th>
          <Th>Placa</Th>
          <Th>Está disponível?</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {cars.map((item, i) => (
          <Tr key={i}>
            <Td width="40%">
              {item.nome_carros}
            </Td>
            <Td width="30%">
              {item.placa}
            </Td>
            <Td width="20%">
              {item.disponibilidade}
            </Td>
            <Td width="5%">
              <FaEdit onClick={() => editaCarros(item)}></FaEdit>
            </Td>
            <Td width="5%">
              <FaTrash onClick={() => deletaCarros(item.idcarros)}></FaTrash>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default Grid;