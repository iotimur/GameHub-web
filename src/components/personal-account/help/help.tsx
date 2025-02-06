import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    BlockHelpStyled, Lin, LinksStyled, 
    TextHelpStyled, TextStyled, 
    TextZagolovkaStyled 
} from './help.styled';

export function Help() {
    const { t } = useTranslation();

    return (
        <BlockHelpStyled>
            <div className="top">
                <TextHelpStyled>{t("help_title")}</TextHelpStyled>
            </div>
            <Lin />
            <div className="d-flex">
                <LinksStyled>
                    <TextZagolovkaStyled>{t("help_order_title")}</TextZagolovkaStyled>
                    <TextStyled>{t("help_order_description")}</TextStyled>

                    <TextZagolovkaStyled>{t("help_payment_title")}</TextZagolovkaStyled>
                    <TextStyled>{t("help_payment_description")}</TextStyled>

                    <TextZagolovkaStyled>{t("help_profile_title")}</TextZagolovkaStyled>
                    <TextStyled>{t("help_profile_description")}</TextStyled>

                    <TextZagolovkaStyled>{t("help_cart_title")}</TextZagolovkaStyled>
                    <TextStyled>{t("help_cart_description")}</TextStyled>
                </LinksStyled>
            </div>
        </BlockHelpStyled>
    );
}
