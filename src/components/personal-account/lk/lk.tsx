import React from 'react';
import { useTranslation } from 'react-i18next';
import { ZagolovStyled, TextStyled } from './lk.styled';

export function Lk() {
    const { t } = useTranslation();

    return (
        <ZagolovStyled>
            <TextStyled>{t("profile_title")}</TextStyled> 
        </ZagolovStyled>
    );
}
