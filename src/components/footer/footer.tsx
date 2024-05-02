import React from 'react';
import './footer.css';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { f1, f2, f3, f4, cmc } from './index'

export function Footer() {
    return (
        <footer className="footer">
            <div className="d-flex in_footer1">
                <figure>
                    <img src={f1} alt="Лучшая цена" />
                    <figcaption>Лучшая цена</figcaption>
                </figure>
                <figure>
                    <img src={f2} alt="Гарантия 100%" />
                    <figcaption>Гарантия 100%</figcaption>
                </figure>
                <figure>
                    <img src={f3} alt="Все способы оплаты" />
                    <figcaption>Все способы оплаты</figcaption>
                </figure>
                <figure>
                    <img src={f4} alt="Регулярные акции и скидки" />
                    <figcaption>Регулярные акции и скидки</figcaption>
                </figure>
            </div>
            <hr />
            <div className="in_footer d-flex" >
                <div className="left">
                    <p className="m">Наши контакты:</p>
                    <nav>
                        <p>Техническая поддержка по общим вопросам:</p>
                        <img src={cmc} alt="cmc" />
                        <a href="gamehub@gmail.com">gamehub@gmail.com</a>
                    </nav>
                    <nav>
                        <p>Администрация:</p>
                        <img src={cmc} alt="cmc" />
                        <a href="gamehub_admin@gmail.com">gamehub_admin@gmail.com</a>
                    </nav>
                </div>
                <div className="right">
                    <p className="m">Схема проезда:</p>
                    <YMaps>
                        <div>
                            <Map defaultState={{ center: [55.78, 49.13], zoom: 13 }} >
                                <Placemark defaultGeometry={[55.78, 49.13]} />
                            </Map>
                        </div>
                    </YMaps>
                </div>
            </div>
            <div className="bott">
                <p className="end">Казань, 2024</p>
            </div>
        </footer>
    );
}
