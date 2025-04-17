import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.png";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: #ffebd9;
  padding: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Text = styled.span`
  height: 24px;
  left: 444px;
  top: 2084px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  color: #e66767;
  margin-top: 65px;
`;
const SubText = styled.span`
  color: #e66767;
  height: 24px;
  left: 444px;
  top: 2084px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  margin-top: -6px;
`;

const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  margin-top: 10px;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100px;
  margin-top: 19px;
`;

const Icon = styled.a`
  width: 25px;
  height: auto;
  padding: 4px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <Logo src={logo} alt="Logo" />
      </div>
      <SocialIcons>
        <Icon>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color=" #e66767" size={24} />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#e66767" size={24} />
          </a>
        </Icon>
        <Icon>
          {" "}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color="#e66767" size={24} />
          </a>
        </Icon>
      </SocialIcons>
      <Text>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
      </Text>
      <br />
      <SubText>dos produtos é toda do estabelecimento contratado.</SubText>
    </FooterContainer>
  );
};

export default Footer;
