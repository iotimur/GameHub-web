import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { HRStyled, FigcaptionStyled, AStyled, InFooterFirstStyled, ImgStyled, InFooterStyled, TextEndStyled, TextStyled, TextZagolovokStyled, FigureImgStyled, FigureStyled, FooterStyled, BottStyled } from './footer.styled'
import { f1, f2, f3, f4, cmc } from './index'

export function Footer() {
    return (
        <FooterStyled>
            <InFooterFirstStyled>
                <FigureStyled>
                    <FigureImgStyled src={f1} alt="Лучшая цена" />
                    <FigcaptionStyled>Лучшая цена</FigcaptionStyled>
                </FigureStyled>
                <FigureStyled>
                    <FigureImgStyled src={f2} alt="Гарантия 100%" />
                    <FigcaptionStyled>Гарантия 100%</FigcaptionStyled>
                </FigureStyled>
                <FigureStyled>
                    <FigureImgStyled src={f3} alt="Все способы оплаты" />
                    <FigcaptionStyled>Все способы оплаты</FigcaptionStyled>
                </FigureStyled>
                <FigureStyled>
                    <FigureImgStyled src={f4} alt="Регулярные акции и скидки" />
                    <FigcaptionStyled>Регулярные акции и скидки</FigcaptionStyled>
                </FigureStyled>
            </InFooterFirstStyled>
            <HRStyled />
            <InFooterStyled>
                <div className="left">
                    <TextZagolovokStyled>Наши контакты:</TextZagolovokStyled>
                    <nav>
                        <TextStyled>Техническая поддержка по общим вопросам:</TextStyled>
                        <ImgStyled src={cmc} alt="cmc" />
                        <AStyled href="gamehub@gmail.com">gamehub@gmail.com</AStyled>
                    </nav>
                    <nav>
                        <TextStyled>Администрация:</TextStyled>
                        <ImgStyled src={cmc} alt="cmc" />
                        <AStyled href="gamehub_admin@gmail.com">gamehub_admin@gmail.com</AStyled>
                    </nav>
                </div>
                <div className="right">
                    <TextZagolovokStyled>Схема проезда:</TextZagolovokStyled>
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
                <TextEndStyled>Казань, 2024</TextEndStyled>
            </BottStyled>
        </FooterStyled>
    );
}
