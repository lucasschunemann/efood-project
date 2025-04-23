import React, { useState } from "react";
import styled from "styled-components";
import Logo2 from "../../images/logo.png";
import BackgroundImage from "../../images/Vector.png";
import Cart from "../Cart";
import { useCart } from "../../CartContext/cartContext";

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
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // opacidade do fundo
  z-index: 999; // abaixo do carrinho, mas acima do resto
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
  const { cartItems } = useCart();

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
      {cartOpen && (
        <>
          <Overlay onClick={closeCart} /> {/* fecha carrinho ao clicar fora */}
          <Cart items={cartItems} onClose={closeCart} />
        </>
      )}
    </>
  );
};

export default Header;
