import React from 'react';
import { useTranslation } from 'react-i18next';
import { BlockPurchasesStyled, Lin, ShopsStyled, AddStyled, TextZagolStyled, ImageStyled, TextGameStyled, TextBlockStyled, DFlexStyled } from './my-purchases.styled';
import { Link } from 'react-router-dom';
import { game11, game22 } from './index';

export function MyPurchases() {
    const { t } = useTranslation();

    return (
        <BlockPurchasesStyled>
            <div className="top">
                <TextZagolStyled>{t("my_purchases")}</TextZagolStyled>
            </div>
            <Lin />
            <ShopsStyled>
                <DFlexStyled>
                    <Link to="/gamehub/game-page">
                        <div>
                            <ImageStyled src={game11} alt="game1_photo" />
                        </div>
                    </Link>
                    <TextBlockStyled>
                        <TextGameStyled>
                            {t("purchase_date", { date: "18.01.24" })} <br />
                            {t("purchase_amount", { amount: 300 })} <br />
                            {t("purchase_status")}
                        </TextGameStyled>
                    </TextBlockStyled>
                    <Link to="/gamehub/game-page">
                        <div>
                            <ImageStyled src={game22} alt="game2_photo" />
                        </div>
                    </Link>
                    <TextBlockStyled>
                        <TextGameStyled>
                            {t("purchase_date", { date: "18.01.24" })} <br />
                            {t("purchase_amount", { amount: 300 })} <br />
                            {t("purchase_status")}
                        </TextGameStyled>
                    </TextBlockStyled>
                </DFlexStyled>
            </ShopsStyled>
            <div className="bott">
                <AddStyled>{t("show_more")}</AddStyled>
            </div>
        </BlockPurchasesStyled>
    );
}
