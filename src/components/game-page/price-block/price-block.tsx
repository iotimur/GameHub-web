import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as getCartGamesSelectors from "../../../_data_/selectors/cart-games"; // Подключаем селектор корзины
import { useAddToCartMutation } from "../../../_data_/service/main-api";
import { useDispatch, useSelector } from "react-redux";
import { cartSlice } from "../../../_data_/slices/cart-games";

import {
    PriceBlockContainer,
    PriceImage,
    PriceRectangle,
    PriceText,
    AdditionalRectangle,
    Discount,
    PriceDetails,
    PriceOld,
    PriceNew
} from './price-block.styled';

const PriceBlock: React.FC = () => {
    const { t } = useTranslation();
    const cartIds = useSelector(getCartGamesSelectors.ids); // Получаем список id игр в корзине
    const [isUpdating, setIsUpdating] = useState(false);
    const [modifyCart] = useAddToCartMutation();
    const dispatch = useDispatch();

    const gameId = 1; // ID игры, которую проверяем
    const isInCart = cartIds?.includes(gameId);

    const handleCartUpdate = async () => {
        const action = isInCart ? "remove" : "add";
        setIsUpdating(true);

        try {
            await modifyCart({ id: gameId, action }).unwrap();

            // Локальное обновление store
            if (isInCart) {
                dispatch(cartSlice.actions.removeFromCart(gameId));
            } else {
                dispatch(cartSlice.actions.addToCart(gameId));
            }
        } catch (error) {
            console.error("Ошибка при обновлении корзины:", error);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <PriceBlockContainer>
            <AdditionalRectangle>
                <Discount>{t('price.discount')}</Discount>
            </AdditionalRectangle>
            <PriceDetails>
                <PriceNew>{t('price.newPrice')}</PriceNew>
                <PriceOld>{t('price.oldPrice')}</PriceOld>
            </PriceDetails>
            <PriceImage>
                {/* Изображение логотипа */}
            </PriceImage>
            <PriceRectangle 
                style={{ backgroundColor: isInCart ? "#4CAF50" : "#f39a46" }} 
                onClick={handleCartUpdate}
            >
                <PriceText>{isInCart ? "В корзине" : t('price.addToCart')}</PriceText>
            </PriceRectangle>
        </PriceBlockContainer>
    );
};

export default PriceBlock;
