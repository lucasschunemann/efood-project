import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Cart from "../Cart";
import Header2 from "../Header2";
import RestaurantImage from "./restaruranteImage";
import { useCart } from "../../CartContext/cartContext"; // <- importa o provider

const MenuItemCard = styled.div`
  overflow: hidden;
  width: calc(33.33% - 40px);
  width: 320px;
  background-color: #e66767;
  height: 378px;
  border: 10px solid #e66767;
  margin-bottom: -40px;
  margin-top: 70px;
  margin-right: 60px;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); // fundo escuro
  z-index: 999;
`;

const CardImage = styled.img`
  width: 316px;
  height: 167px;
  object-fit: cover;
`;
const CardImageModal = styled.img`
  width: 95%;
  height: 305px;
  margin-left: 10px;
  margin-top: 19px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
  height: 200px;
  position: relative;
`;

const ItemTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
  color: #ffebd9;
  margin-top: -14px;
  margin-left: -14px;
`;

const ItemTitleModal = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: white;
  margin-top: 14px;
  margin-left: 14px;
`;

const ItemDescription = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
  color: #ffebd9;
  margin-left: -14px;
`;
const ItemDescriptionModal = styled.p`
  font-size: 13.5px;
  margin-bottom: 16px;
  color: white;
  margin-left: 14px;
`;

const ItemPriceModal = styled.p`
  font-size: 16px;
  color: white;
  margin-bottom: 16px;
  margin-left: 14px;
`;

const AddToCartButton = styled.button`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffebd9;
  color: #e66767;
  font-weight: 700;
  width: 312px;
  height: 24px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  border: none;
  padding: 6px 16px;
  cursor: pointer;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #e66767;
  padding: 20px;
  width: 50%;
  height: 344px;
  display: flex;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 343px;
  right: 522px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: white;
`;
const AddToCartButtonModal = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  font-weight: 700;
  font-size: 14px;
  width: 298px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin-left: 14px;
  line-height: 16.41px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;
const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #fff8f2;
  padding-bottom: 62px;
  margin: 0 auto;
  max-width: 1200px;
  padding-bottom: 150px;
`;

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
`;

const ImageContainerModal = styled.div`
  width: 60%;
  position: relative;
  z-index: 0;
`;

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const [restaurantImage, setRestaurantImage] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantFoodType, setRestaurantFoodType] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const { addToCart, removeFromCart, cartItems } = useCart();

  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data.cardapio);
        setRestaurantName(data.titulo);
        setRestaurantImage(data.capa);
        setRestaurantFoodType(data.tipo);
      });
  }, [id]);

  const closeCart = () => {
    setCartOpen(false);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    addToCart(selectedItem);
    setCartOpen(true);
    closeModal();
  };

  return (
    <div>
      <Header2 style={{ zIndex: 1 }} />
      <ImageContainer>
        <RestaurantImage
          imageUrl={restaurantImage}
          restaurantName={restaurantName}
          foodType={restaurantFoodType}
        />{" "}
      </ImageContainer>
      <MenuContainer>
        {menuItems.map((item) => (
          <MenuItemCard key={item.id}>
            <CardImage src={item.foto} alt={item.nome} />
            <CardContent>
              <ItemTitle>{item.nome}</ItemTitle>
              <ItemDescription>{item.descricao}</ItemDescription>
              <AddToCartButton onClick={() => openModal(item)}>
                Adicionar ao Carrinho
              </AddToCartButton>
            </CardContent>
          </MenuItemCard>
        ))}
      </MenuContainer>
      {selectedItem && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <ImageContainerModal>
              <CardImageModal src={selectedItem.foto} alt={selectedItem.nome} />
            </ImageContainerModal>
            <div>
              <ItemTitleModal>{selectedItem.nome}</ItemTitleModal>
              <ItemDescriptionModal>
                {selectedItem.descricao}
              </ItemDescriptionModal>
              <ItemPriceModal>Serve: {selectedItem.porcao}</ItemPriceModal>
              <AddToCartButtonModal onClick={handleAddToCart}>
                Adicionar ao Carrinho - R$ {selectedItem.preco}0
              </AddToCartButtonModal>
            </div>
          </ModalContent>
        </Modal>
      )}
      {cartOpen && (
        <>
          <Overlay onClick={closeCart} />
          <Cart
            items={cartItems}
            onClose={closeCart}
            removeFromCart={removeFromCart}
          />
        </>
      )}
    </div>
  );
};

export default RestaurantDetailsPage;
