import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../list-games/card/card";
import mainApi, { useAddToCartMutation } from "../../_data_/service/main-api";
// import { homeSeachSlice } from "../../_data_/slices/home-app-search";
import * as getCartGamesSelectors from "../../_data_/selectors/cart-games";
// import * as getFavGamesSelectors from "../../_data_/selectors/favourites-games";

import { Title } from "../list-games/title";
// import { favouritesGamesSlice } from "../../_data_/slices/favourites-games";
import { cartSlice } from "../../_data_/slices/cart-games";
import { AnimationContainer, LottieWrapper, StyledText } from "../main/main-container/main.styled";
import Lottie from "lottie-react";
import somethingWrong from "../../assets/Images_main/something_wrong_cat.json"; // что-то пошло не так
import errorAnimation from "../../assets/Images_main/error_dog.json"; // Анимация ошибки
import empty from "../../assets/Images_main/sleep cat.json";

import { t } from "i18next";

const FavouritesComponent = () => {

    const [favourites, setFavourites] = useState(() => { // Состояние для избранных игр
        const savedFavourites = localStorage.getItem('favourites');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });

    const { isFetching, isLoading, data, error } = mainApi.useAllGamesQuery();
    const dispatch = useDispatch();
    const [modifyCart] = useAddToCartMutation();
    const cartIds = useSelector(getCartGamesSelectors.ids);
    console.log("LOG=", isLoading)
    console.log("error=", error)
    // Если идет загрузка, показываем анимацию загрузки или текст
    if (isFetching || isLoading) {
        return (
            <AnimationContainer style={{ textAlign: "center" }}>
                <LottieWrapper>
                    <Lottie animationData={somethingWrong} />
                </LottieWrapper>
                <StyledText>{t('main_loading')}</StyledText>
            </AnimationContainer>
        );
    }

    // Если ошибка при запросе данных, показываем анимацию ошибки
    if (error) {
        return (
            <AnimationContainer style={{ textAlign: "center" }}>
                <LottieWrapper>
                    <Lottie animationData={errorAnimation} />
                </LottieWrapper>
                <StyledText>{t('main_error')}</StyledText>
            </AnimationContainer>
        );
    }

    // Если данные пустые, показываем анимацию для пустых данных
    if (!data || data.length === 0) {
        return (
            <AnimationContainer style={{ textAlign: "center" }}>
                <LottieWrapper>
                    <Lottie animationData={somethingWrong} />
                </LottieWrapper>
                <StyledText>{t('main_empty')}</StyledText>
            </AnimationContainer>
        );
    }
    const handleCartUpdate = async (gameId) => {

        const isInCart = cartIds.includes(gameId);
        const action = isInCart ? "remove" : "add";

        try {
            await modifyCart({ id: gameId, action }).unwrap();
            if (isInCart) {
                dispatch(cartSlice.actions.removeFromCart(gameId));
            } else {
                dispatch(cartSlice.actions.addToCart(gameId));
            }
        } catch (error) {
            console.error("Ошибка при обновлении корзины:", error);
        }
    };
    const handleRemoveFavourite = (game) => {
        const updatedFavourites = favourites.filter(fav => fav.id !== game.id); // Удаляем игру
        setFavourites(updatedFavourites);
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));// Обновляем localStorage
    };

    // useEffect(() => {
    //     if (data) {
    //         dispatch(homeSeachSlice.actions.setAllGames(data));
    //     }
    // }, [data, dispatch]);

    return (
        <div>
            <Title text="Избранное" />
            {favourites.length > 0 ? (
                favourites.map((game) => {
                    const isFavourite = favourites.some(fav => fav.id === game.id); // Проверяем, есть ли игра в избранном
                    return (
                        <div key={game.id}>
                            <GameCard key={game.id}
                                game={game}
                                handleCartUpdate={handleCartUpdate}
                                onAddFavourite={handleRemoveFavourite}
                                isFavourite={isFavourite} />
                        </div>
                    );
                })
            ) : (
                <AnimationContainer style={{ textAlign: "center" }}>
                    <LottieWrapper>
                        <Lottie animationData={empty} />
                    </LottieWrapper>
                    <StyledText>{t('В избранном пусто')}</StyledText>
                </AnimationContainer>
            )}

        </div>
    );
};

export default FavouritesComponent;

