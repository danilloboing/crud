import GlobalStyle from "../../styles/global";
import styled from 'styled-components';
import Form from "../../components/Form";
import Grid from "../../components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// eslint-disable-next-line
const Title = styled.h2``;


function CarRegistration() {

  const [cars, setCars] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getCars = async () => {
    try {
      const res = await axios.get("http://localhost:8000");
      setCars(res.data.sort((a, b) => (a.nome_carros > b.nome_carros ? 1 : -1)))
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getCars();
  }, [setCars]);

  return (
    <>
      <Container>
        <Title>CARROS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCars={getCars} />
        <Grid cars={cars} setCars={setCars} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.CENTER} />
      <GlobalStyle />
    </>
  );
};

export default CarRegistration;