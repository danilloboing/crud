import GlobalStyle from "../../styles/global";
import styled from 'styled-components';
import Form from "../../components/Form";
import Grid from "../../components/Grid";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import axios from "axios";

const Container = styled.div`
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

 const StyledLink = styled.a`
    line-height: 1.5;
    font-weight: 700;
    font-size: .875rem;
    margin-left: .25rem;
    color: #1e88e5;
    text-align: center;
    margin: auto;
  `;

// eslint-disable-next-line
const Title = styled.h2``;

function CarRegistration() {

  const [cars, setCars] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getCars = async () => {
    try {
      const res = await axios.get("http://localhost:3001");
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
        <Title>FLEET VEHICLES</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getCars={getCars} />
        <Grid setOnEdit={setOnEdit} cars={cars} setCars={setCars} />
      <StyledLink href="/">Log out</StyledLink>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.CENTER} />
      <GlobalStyle />
    </>
  );
};

export default CarRegistration;