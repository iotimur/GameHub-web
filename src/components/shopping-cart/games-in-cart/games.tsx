import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../_data_/slices/cart-games";
import { useAllGamesQuery } from "../../../_data_/service/main-api";
import * as images from "../../../assets/Images_main";
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games";
import { useAddToCartMutation } from "../../../_data_/service/main-api";
import Lottie from "lottie-react";
import emptyCartAnimation from "../../../assets/Images_main/emty basket.json";
import errorAnimation from "../../../assets/Images_main/error_dog.json";
import Modal from "./Modal";
import Chat from "./Chat"; // Импортируем компонент чата
import {
  Oval,
  Container_my,
  Title1,
  Title2,
  Title3,
  BigImage,
  Price,
  Delete,
  Hr,
  Total,
  TotalSpan,
  Price1,
  LottieWrapper,
  AnimationContainer,
  StyledText,
  PromoCodeContainer,
  PromoCodeInput,
  ApplyButton,
  FloatingButton, // Импортируем стилизованную кнопку
} from "../games-in-cart/games.styled";

const Games: React.FC = () => {
  const dispatch = useDispatch();
  const cartIds = useSelector(getCartGamesSelectors.ids);
  const [modifyCart] = useAddToCartMutation();
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false); // Состояние для открытия/закрытия чата

  const {
    isLoading: isGamesLoading,
    data: allGamesData,
    error: gamesError,
  } = useAllGamesQuery();

  if (isGamesLoading) {
    return <Oval>Загрузка...</Oval>;
  }

  if (gamesError) {
    return (
      <AnimationContainer style={{ textAlign: "center" }}>
        <LottieWrapper>
          <Lottie animationData={errorAnimation} />
        </LottieWrapper>
        <StyledText>Ошибка загрузки данных...</StyledText>
      </AnimationContainer>
    );
  }

  const gamesInCart = allGamesData?.filter((game) => cartIds?.includes(game.id)) || [];
  const totalPrice = gamesInCart.reduce((total, game) => total + (isNaN(game.price) ? 0 : game.price), 0);

  const handleApplyPromoCode = () => {
    if (promoCode === "10") {
      setDiscount(totalPrice * 0.1);
    }
  };

  const handleDelete = async (id: number) => {
    const action = "remove";
    dispatch(removeFromCart(id));
    try {
      await modifyCart({ id, action }).unwrap();
    } catch (error) {
      console.error("Ошибка при удалении товара из корзины:", error);
      dispatch(addToCart(id));
    }
    setIsModalOpen(false);
  };

  const openDeleteModal = (id: number) => {
    setSelectedGameId(id);
    setIsModalOpen(true);
  };

  return (
    <>
      <Oval>Ваша корзина</Oval>
      {gamesInCart.length === 0 ? (
        <AnimationContainer style={{ textAlign: "center" }}>
          <LottieWrapper>
            <Lottie animationData={emptyCartAnimation} />
          </LottieWrapper>
          <StyledText>Ваша корзина пуста...</StyledText>
        </AnimationContainer>
      ) : (
        <>
          {gamesInCart.map((game) => (
            <Container_my key={game.id}>
              <BigImage src={images[game.imgPath]} alt={game.title} />
              <div>
                <Title1>{game.title}</Title1>
                <Price>{game.price} ₽</Price>
                <Title2>Категория: {game.category}</Title2>
                <Title3>{game.description}</Title3>
                <Delete onClick={() => openDeleteModal(game.id)}>Удалить</Delete>
                <Hr />
              </div>
            </Container_my>
          ))}
          <PromoCodeContainer>
            <PromoCodeInput
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Введите промокод"
            />
            <ApplyButton onClick={handleApplyPromoCode}>Применить</ApplyButton>
          </PromoCodeContainer>
          <Total>
            <TotalSpan>Промежуточный итог:</TotalSpan>
            <Price1>{(totalPrice - discount).toFixed(2)} ₽</Price1>
          </Total>
        </>
      )}

      {/* Модальное окно для подтверждения удаления */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => selectedGameId && handleDelete(selectedGameId)}
      />

      {/* Кнопка в правом нижнем углу */}
      <FloatingButton onClick={() => setIsChatOpen(!isChatOpen)}>
        {isChatOpen ? "✕" : "💬"}
      </FloatingButton>

      {/* Чат с менеджером */}
      {isChatOpen && <Chat onClose={() => setIsChatOpen(false)} />}
    </>
  );
};

export default Games;