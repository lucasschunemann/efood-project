import React, { useState } from "react";
import styled from "styled-components";
import Logo2 from "../../images/logo.png";
import BackgroundImage from "../../images/Vector.png";
import Cart from "../Cart";

const HeaderContainer = styled.div`
  height: 186px;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding: 20px 40px;
  }
`;

const Logo = styled.img`
  width: 125px;
  height: auto;
  margin-left: 370px;

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #e66767;

  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const CartInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #e66767;

  margin-top: 10px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Title>Restaurantes</Title>
        <Logo src={Logo2} alt="Logo" />
        <CartInfo onClick={toggleCart}>
          {cartItems.length} produto(s) no carrinho
        </CartInfo>
      </HeaderContainer>
      {cartOpen && <Cart items={cartItems} onClose={closeCart} />}
    </>
  );
};

export default Header;
