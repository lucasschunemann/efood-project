import React from "react";
import styled from "styled-components";

const RestaurantImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 330px;
  background: url(${(props) => props.imageUrl}) center/cover;
  margin-top: 0px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const RestaurantName = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #ffffff;
  margin-left: -820px;
  text-align: start;
`;

const FoodType = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 32px;
  line-height: 28px;
  margin-left: -1080px;
  color: #ffffff;
  opacity: 0.6;
  margin-bottom: 150px;
  text-align: start;
`;

const RestaurantImage = ({ imageUrl, restaurantName, foodType }) => {
  return (
    <RestaurantImageContainer imageUrl={imageUrl}>
      <Overlay>
        <FoodType>
          {foodType.charAt(0).toUpperCase() + foodType.slice(1).toLowerCase()}
        </FoodType>
        <RestaurantName>{restaurantName}</RestaurantName>
      </Overlay>
    </RestaurantImageContainer>
  );
};

export default RestaurantImage;
