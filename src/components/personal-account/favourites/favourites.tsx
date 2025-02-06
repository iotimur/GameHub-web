import React from 'react';
import { useTranslation } from 'react-i18next';
import { But, ZagolovStyle } from './favourites.styled';
import { Link } from 'react-router-dom';

export function Fv() {
    const { t } = useTranslation();

    return (
        <But>
            <Link to="/gamehub/favourites">
                <ZagolovStyle>{t("favourites_title")}</ZagolovStyle>
            </Link>
        </But>
    );
}
