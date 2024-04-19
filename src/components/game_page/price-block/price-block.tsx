import React from 'react';
import './price-block.css';
// import '../../../css/game_page.css'
import { logo } from './index'

export function PriceBlock() {
    return (
        <div className="price-block">
            <div className="additional-rectangle">
                <p className="discount">-8%</p>
            </div>
            <div className="price-details">
                <p className="price-new">3295руб/</p>
                <p className="price-old">3599руб</p>
            </div>
            <div className="price-image">
                <img src={logo} alt="logo_microsoft" className='logo' width="40" height="36" />
            </div>
            <button className="price-rectangle">
                <p className="price-text">В корзину</p>
            </button>
        </div>
    );
}
