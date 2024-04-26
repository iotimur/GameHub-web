import React from 'react';
import '../information/information.css';

const Information = () => {
    return (
        <div className="total">
            <span>Промежуточный итог:</span>
            <div className="price1">900 руб.</div>
            <hr />
            <div className="info">
                <p className="h4">Способ получения</p>
                <p className="h4">Способ оплаты</p>
            </div>
            <div className="oval1">
                Купить для себя
            </div>
            <div className="oval2">
                Купить в подарок
            </div>
            <div className="delete1">
                <p>Удалить все товары</p>
            </div>
            <p className="NDS">НДС: Все цены указаны с учетом НДС (где применимо)</p>
        </div>
    );
};

export default Information;
