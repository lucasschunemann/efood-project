import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  position: relative;
  width: 472px;
  height: 405px;
  margin-bottom: 15px;
  margin-top: 59px;
  padding: 0;
  border: 2px solid #e66767;
  background-color: #ffffff;
  margin-left: 62px;
  margin-right: 62px;
`;

const CardImage = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
  border-radius: 0;
  border: none;
`;

const RestaurantName = styled.h2`
  color: #e66767;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-top: -3px;
  margin-left: 6px;
`;

const Description = styled.p`
  color: #e66767;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  margin-right: 2px;
  font-style: normal;
  font-weight: 400;
  margin-left: 6px;
`;

const FoodType = styled.div`
  position: absolute;
  top: 19px;
  right: 15px;
  background-color: #e66767;
  color: white;
  padding: 6px 8px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: 12px;
  font-weight: 700;
  border-radius: 0px;
`;

const Rating = styled.div`
  font-size: 19px;
  padding: 8px;
  color: #e66767;
`;

const Star = styled.span`
  color: #ff8c00;
`;

const Button = styled.button`
  background-color: #e66767;
  color: white;
  border: none;
  padding: 4px 6px;
  border-radius: 1px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  margin-left: 6px;
`;

const Card = ({ image, restaurantName, description, foodType, rating, id }) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="Imagem do restaurante" />
      <FoodType>{foodType}</FoodType>
      <RestaurantName>
        {restaurantName}
        <Rating>
          {rating} <Star>★</Star>
        </Rating>
      </RestaurantName>
      <Description>{description}</Description>
      <Link to={`/detalhes/${id}`}>
        <Button>Saiba mais</Button>
      </Link>
    </CardContainer>
  );
};

export default Card;
