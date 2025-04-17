import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ConfirmationContainer = styled.div`
  margin: 50px auto;
  padding: 20px;
  max-width: 800px;
  background-color: #f9f9f9;
  height: 260px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ConfirmButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #ff5733;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 16px;
  &:hover {
    background-color: #ff714d;
  }
`;

const ConfirmationPage = () => {
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <ConfirmationContainer>
        <h2>Confirmação do Pedido</h2>
        <p>Obrigado por fazer seu pedido!</p>

        {data && data.orderId && (
          <div>
            <h3>ID do Pedido:</h3>
            <p>{data.orderId}</p>
          </div>
        )}

        {!data ||
          (!data.orderId && (
            <div>Dados do pedido não disponíveis ou inválidos.</div>
          ))}

        <ConfirmButton as={Link} to="/">
          Concluir
        </ConfirmButton>
      </ConfirmationContainer>
    </>
  );
};

export default ConfirmationPage;
