import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { HRStyled, FigcaptionStyled, AStyled, InFooterFirstStyled, ImgStyled, InFooterStyled, TextEndStyled, TextStyled, TextZagolovokStyled, FigureImgStyled, FigureStyled, FooterStyled, BottStyled } from './footer.styled'
import { f1, f2, f3, f4, cmc } from './index'
import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t } = useTranslation();
    return (
        <FooterStyled>
            <InFooterFirstStyled>
                <FigureStyled>
                    <FigureImgStyled src={f1} alt="Лучшая цена" />
                    <FigcaptionStyled>{t('footer.bestPrice')}</FigcaptionStyled>
                </FigureStyled>
                <FigureStyled>
                    <FigureImgStyled src={f2} alt="Гарантия 100%" />
                    <FigcaptionStyled>{t('footer.guarantee')}</FigcaptionStyled>
                </FigureStyled>
                <FigureStyled>
                    <FigureImgStyled src={f3} alt="Все способы оплаты" />
                    <FigcaptionStyled>{t('footer.paymentMethods')}</FigcaptionStyled>
                </FigureStyled>
                <FigureStyled>
                    <FigureImgStyled src={f4} alt="Регулярные акции и скидки" />
                    <FigcaptionStyled>{t('footer.discounts')}</FigcaptionStyled>
                </FigureStyled>
            </InFooterFirstStyled>
            <HRStyled />
            <InFooterStyled>
                <div className="left">
                    <TextZagolovokStyled>{t('footer.contacts')}</TextZagolovokStyled>
                    <nav>
                        <TextStyled>{t('footer.support')}</TextStyled>
                        <ImgStyled src={cmc} alt="cmc" />
                        <AStyled href="gamehub@gmail.com">gamehub@gmail.com</AStyled>
                    </nav>
                    <nav>
                        <TextStyled>{t('footer.admin')}</TextStyled>
                        <ImgStyled src={cmc} alt="cmc" />
                        <AStyled href="gamehub_admin@gmail.com">gamehub_admin@gmail.com</AStyled>
                    </nav>
                </div>
                <div className="right">
                    <TextZagolovokStyled>{t('footer.map')}</TextZagolovokStyled>
                    <YMaps>
                        <div>
                            <Map defaultState={{ center: [55.78, 49.13], zoom: 13 }} >
                                <Placemark defaultGeometry={[55.78, 49.13]} />
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </InFooterStyled>
            <BottStyled>
                <TextEndStyled>{t('footer.location')}</TextEndStyled>
            </BottStyled>
        </FooterStyled>
    );
}
