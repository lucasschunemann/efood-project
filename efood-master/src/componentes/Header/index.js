import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import VectorBackground from "../../images/Vector.png";
import logo from "../../images/logo.png";

const HeaderContainer = styled.header`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${VectorBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-bottom: 120px;
`;

const TextContainer = styled.div`
  text-align: center;
`;

const MainText = styled.span`
  color: #e66767;
  font-weight: 700;
  font-size: 36px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  line-height: 42.19px;
`;

const SubText = styled.span`
  color: #e66767;
  font-size: 36px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: 42.19px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <Logo src={logo} alt="Logo" />
      </Link>
      <TextContainer>
        <MainText>Viva experiências gastronômicas</MainText>
        <br />
        <SubText>no conforto da sua casa</SubText>
      </TextContainer>
    </HeaderContainer>
  );
};

export default Header;
