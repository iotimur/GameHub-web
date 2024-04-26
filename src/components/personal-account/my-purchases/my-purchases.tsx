import React from 'react';
import './my-purchases.css';

import { game11, game22 } from './index'

export function MyPurchases() {
    return (
        <div className="block2">
            <div className="top">
                <p>Мои покупки</p>
            </div>
            <hr />
            <div className="shops">
                <div className="left d-flex">
                    <div>
                        <img src={game11} alt="game1_photo" />
                    </div>

                    <div className="d-f">
                        <p>Дата покупки: 18.01.24 <br />Сумма: 300 руб. <br /> Статус: оплачено</p>
                    </div>
                    <div>
                        <img src={game22} alt="game2_photo" />
                    </div>
                    <div className="d-f">
                        <p>Дата покупки: 13.02.24 <br /> Сумма: 300 руб. <br /> Статус: оплачено</p>
                    </div>

                </div>
            </div>
            <div className="bott">
                <button className="add">Показать еще</button>
            </div>
        </div>
    );
}

