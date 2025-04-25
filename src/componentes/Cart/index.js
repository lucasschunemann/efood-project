import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";
import { useCart } from "../../CartContext/cartContext";
const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #e66767;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 15px;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 16px;
  margin-bottom: 20px;
  color: #ffebd9;
  font-family: Arial, sans-serif;
`;

const ItemContainer = styled.div`
  background-color: #ffebd9;
  padding: 12px;
  height: 110px;
  width: 289px;
  margin-left: -5px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemName = styled.p`
  font-weight: bold;
  color: #e66767;
  font-family: "Roboto", sans-serif;
  margin-bottom: 45px;
  width: full;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  color: #e66767;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;

const Message = styled.p`
  font-size: 14px;
  color: #ffebd9;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
`;

const MessageTitle = styled.p`
  font-size: 16px;
  color: #ffebd9;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
`;

const ItemImage = styled.img`
  width: 110px;
  height: 110px;
  margin-right: 12px;
`;

const Total = styled.div`
  margin-top: 20px;
  font-weight: bold;
  color: #ffebd9;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Isso alinha verticalmente os itens no centro */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 9px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: white;
`;

const RemoveItemButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 98px;
`;

const ContinueButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  height: 24px;
  padding: 4px 16px;
  cursor: pointer;
  margin-top: 17px;
  width: 100%;
  font-weight: 700;
  font-family: Arial, sans-serif;
  font-size: 14px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  background-color: #ffebd9;
  border: 1px solid #ffebd9;
`;

const InputCepContainer = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const CardInputContainer = styled.div`
  flex: 1;
  align-items: center;
  margin-bottom: 10px;
`;

const CardNumberInput = styled.input`
  flex: 1;
  padding: 8px;
  background-color: #ffebd9;
  border: 1px solid #ffebd9;
  margin-right: 19px;
`;

const CVVInput = styled.input`
  width: 74px;
  padding: 8px;
  background-color: #ffebd9;
  border: 1px solid #ffebd9;
`;

const InputComplementoContainer = styled.div`
  flex: 1;
`;

const InputCep = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 85%;
  background-color: #ffebd9;
  border: 1px solid #ffebd9;
`;

const InputComplemento = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 85%;
  background-color: #ffebd9;
  border: 1px solid #ffebd9;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 24px;
`;
const SobInputs = styled.div`
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  color: #ffebd9;
  weight: 700;
  margin-bottom: 9px;
  margin-left: 0px;
  line-height: 16.41px;
`;
const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart } = useCart();
  const totalPrice = cartItems.reduce((total, item) => total + item.preco, 0);
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    endereco: "",
    cidade: "",
    cep: "",
    numero: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expirationDate: "",
    cvv: "",
  });
  const [cardFormErrors, setCardFormErrors] = useState({});

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/efood/checkout")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dados da API de checkout:", data);
      })
      .catch((error) => {
        console.error("Erro ao obter os dados da API de checkout:", error);
      });
  }, []);
  const handleContinueToDelivery = () => {
    setShowDeliveryForm(true);
    setShowPaymentForm(false);
  };

  const handleBackToCart = () => {
    setShowDeliveryForm(false);
    setShowPaymentForm(false);
  };

  const handleContinueToPayment = () => {
    setShowDeliveryForm(false);
    setShowPaymentForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({
      ...cardData,
      [name]: value,
    });
  };

  const handleSubmitDelivery = (e) => {
    e.preventDefault();
    if (validateDeliveryForm()) {
      handleContinueToPayment();
    }
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    handleFinishOrder();
  };

  const validateDeliveryForm = () => {
    let errors = {};
    const nomeRegex = /^[a-zA-Z\s]*$/;
    const cepRegex = /^\d{5}-\d{3}$/;
    const numeroRegex = /^\d+$/;

    if (!formData.nome.match(nomeRegex)) {
      errors.nome = "O nome não pode conter números";
    }
    if (!formData.endereco) {
      errors.endereco = "O endereço é obrigatório";
    }
    if (!formData.cidade) {
      errors.cidade = "A cidade é obrigatória";
    }
    if (!formData.cep.match(cepRegex)) {
      errors.cep = "Formato de CEP inválido";
    }
    if (!formData.numero.match(numeroRegex)) {
      errors.numero = "O número deve conter apenas dígitos";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFinishOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      console.error("O carrinho está vazio.");
      return;
    }

    const orderData = {
      products: cartItems.map((item) => ({
        id: item.id,
        nome: item.nome,
        price: item.preco,
      })),
      delivery: {
        receiver: formData.nome,
        address: {
          description: formData.endereco,
          city: formData.cidade,
          zipCode: formData.cep,
          number: formData.numero,
          complement: "",
        },
      },
      payment: {
        card: {
          name: cardData.cardName,
          number: cardData.cardNumber,
          code: cardData.cvv,
          expires: {
            month: cardData.expirationDate.split("/")[0],
            year: cardData.expirationDate.split("/")[1],
          },
        },
      },
    };

    fetch("https://fake-api-tau.vercel.app/api/efood/checkout", {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dados recebidos da API de checkout:", data);
        setOrderId(data.orderId);
      })
      .catch((error) => {
        console.error("Erro ao concluir o pedido:", error);
      });
  };

  return (
    <CartContainer>
      {orderId ? (
        <div>
          <MessageTitle>Pedido realizado - {orderId}</MessageTitle>
          <Message>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Message>
          <ContinueButton onClick={onClose}>Concluir</ContinueButton>
        </div>
      ) : (
        <>
          <Title>
            {showDeliveryForm || showPaymentForm
              ? showPaymentForm
                ? `Pagamento - valor a pagar R$${totalPrice.toFixed(2)}`
                : "Entrega"
              : ""}
          </Title>
          {showPaymentForm ? (
            <Form onSubmit={handleSubmitPayment}>
              <SobInputs> Nome no cartão </SobInputs>
              <Input
                type="text"
                name="cardName"
                placeholder=""
                value={cardData.cardName}
                onChange={handleCardInputChange}
              />
              {cardFormErrors.cardNumber && (
                <ErrorMessage>{cardFormErrors.cardNumber}</ErrorMessage>
              )}
              <InputContainer>
                <CardInputContainer>
                  <SobInputs> Número do cartão </SobInputs>
                  <CardNumberInput
                    type="text"
                    name="cardNumber"
                    placeholder=""
                    value={cardData.cardNumber}
                    onChange={handleCardInputChange}
                  />
                  {cardFormErrors.cardNumber && (
                    <ErrorMessage>{cardFormErrors.cardNumber}</ErrorMessage>
                  )}
                </CardInputContainer>

                <CardInputContainer>
                  <SobInputs> CVV </SobInputs>
                  <CVVInput
                    type="text"
                    name="cvv"
                    placeholder=""
                    value={cardData.cvv}
                    onChange={handleCardInputChange}
                  />
                  {cardFormErrors.cvv && (
                    <ErrorMessage>{cardFormErrors.cvv}</ErrorMessage>
                  )}
                </CardInputContainer>
              </InputContainer>
              <InputContainer>
                <InputCepContainer>
                  <SobInputs> Mês de vencimento </SobInputs>
                  <InputComplemento
                    type="text"
                    name="mes-vencimento"
                    placeholder=""
                    value={cardData.mes}
                    onChange={handleCardInputChange}
                  />
                  {cardFormErrors.mes && (
                    <ErrorMessage>{cardFormErrors.mes}</ErrorMessage>
                  )}
                </InputCepContainer>
                <InputComplementoContainer>
                  <SobInputs> Ano de vencimento</SobInputs>
                  <InputCep
                    type="text"
                    name="ano-vencimento"
                    placeholder=""
                    value={cardData.ano}
                    onChange={handleCardInputChange}
                  />
                  {cardFormErrors.ano && (
                    <ErrorMessage>{cardFormErrors.ano}</ErrorMessage>
                  )}
                </InputComplementoContainer>
              </InputContainer>
              <ButtonContainer>
                <ContinueButton type="submit" onClick={handleSubmitPayment}>
                  Finalizar pagamento
                </ContinueButton>

                <ContinueButton onClick={handleContinueToDelivery}>
                  Voltar para a edição de endereço
                </ContinueButton>
              </ButtonContainer>
            </Form>
          ) : showDeliveryForm ? (
            <Form onSubmit={handleSubmitDelivery}>
              <SobInputs> Quem irá receber </SobInputs>
              <Input
                type="text"
                name="nome"
                placeholder=""
                value={formData.nome}
                onChange={handleInputChange}
              />
              {formErrors.nome && (
                <ErrorMessage>{formErrors.nome}</ErrorMessage>
              )}
              <SobInputs> Endereço </SobInputs>
              <Input
                type="text"
                name="endereco"
                placeholder=""
                value={formData.endereco}
                onChange={handleInputChange}
              />
              {formErrors.endereco && (
                <ErrorMessage>{formErrors.endereco}</ErrorMessage>
              )}
              <SobInputs> Cidade </SobInputs>
              <Input
                type="text"
                name="cidade"
                placeholder=""
                value={formData.cidade}
                onChange={handleInputChange}
              />
              {formErrors.cidade && (
                <ErrorMessage>{formErrors.cidade}</ErrorMessage>
              )}
              <InputContainer>
                <InputCepContainer>
                  <SobInputs> CEP </SobInputs>
                  <InputCep
                    type="text"
                    name="cep"
                    placeholder=""
                    value={formData.cep}
                    onChange={handleInputChange}
                  />
                  {formErrors.cep && (
                    <ErrorMessage>{formErrors.cep}</ErrorMessage>
                  )}
                </InputCepContainer>
                <InputComplementoContainer>
                  <SobInputs> Número </SobInputs>
                  <InputComplemento
                    type="text"
                    name="numero"
                    placeholder=""
                    value={formData.numero}
                    onChange={handleInputChange}
                  />
                  {formErrors.numero && (
                    <ErrorMessage>{formErrors.numero}</ErrorMessage>
                  )}
                </InputComplementoContainer>
              </InputContainer>
              <SobInputs> Complemento (opcional) </SobInputs>
              <Input
                type="text"
                name="complemento"
                placeholder=""
                value={formData.complemento}
                onChange={handleInputChange}
              />
              {formErrors.numero && (
                <ErrorMessage>{formErrors.complemento}</ErrorMessage>
              )}
              <ButtonContainer>
                <ContinueButton onClick={handleBackToCart}>
                  Voltar para o carrinho
                </ContinueButton>
                <ContinueButton type="submit">
                  Continuar com o pagamento
                </ContinueButton>
              </ButtonContainer>
            </Form>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <ItemContainer key={index}>
                  <Item>
                    <ItemInfoWrapper>
                      <ItemImage src={item.foto} alt={item.nome} />
                      <ItemDetails>
                        <ItemName>{item.nome}</ItemName>
                        <ItemPrice>R$ {item.preco.toFixed(2)}</ItemPrice>
                      </ItemDetails>
                    </ItemInfoWrapper>
                    <RemoveItemButton onClick={() => removeFromCart(index)}>
                      <FaTrash color="#ff5733" />
                    </RemoveItemButton>
                  </Item>
                </ItemContainer>
              ))}
              <Total>
                <span>Valor Total:</span>
                <span>R$ {totalPrice.toFixed(2)}</span>
              </Total>
              <ContinueButton onClick={handleContinueToDelivery}>
                Continuar com a entrega
              </ContinueButton>
            </>
          )}
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
