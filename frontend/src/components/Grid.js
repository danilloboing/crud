import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

export const GridContainer = styled.div`
  overflow-x: auto;
  width: 100vw;
`;

export const Table = styled.table`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 20px auto;
  box-sizing: border-box;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const EditIcon = styled(FaEdit) `
  cursor: pointer;
`;

export const TrashIcon = styled(FaTrash) `
  cursor: pointer;
`;

const Grid = ({ cars={cars}, setCars={setCars}, setOnEdit={setOnEdit} }) => {
  const editaCarros = (item) => {
    setOnEdit(item);
  }

  const deletaCarros = async (idcarros) => {
    await axios
      .delete("http://localhost:3001/" + idcarros)
      .then (({ data }) => {
        const novoArray = cars.filter((car) => car.idcarros !== idcarros);

        setCars(novoArray);
        toast.success(data)
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return(
    <GridContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Car</Th>
            <Th>License plate</Th>
            <Th onlyWeb>Is it available?</Th>
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
              <Td width="20%">
                {item.placa}
              </Td>
              <Td width="20%" onlyWeb>
                {item.disponibilidade}
              </Td>
              <Td width="5%">
                <EditIcon onClick={() => editaCarros(item)}></EditIcon>
              </Td>
              <Td width="5%">
                <TrashIcon onClick={() => deletaCarros(item.idcarros)}></TrashIcon>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </GridContainer>
  )
}

export default Grid;