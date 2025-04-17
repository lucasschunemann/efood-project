import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Card";

const MainSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff8f2;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 105px;
`;

const MainContainer = styled.div`
  background-color: #fff8f2;
`;

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/restaurantes")
      .then((response) => response.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <div>
      <MainContainer>
        <MainSection>
          {restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              id={restaurant.id}
              image={restaurant.capa}
              restaurantName={restaurant.titulo}
              description={restaurant.descricao}
              rating={` ${restaurant.avaliacao}`}
              foodType={
                restaurant.tipo.charAt(0).toUpperCase() +
                restaurant.tipo.slice(1)
              }
              style={{ flex: "0 0 calc(50% - 20px)" }}
            />
          ))}
        </MainSection>
      </MainContainer>
    </div>
  );
}

export default Home;
