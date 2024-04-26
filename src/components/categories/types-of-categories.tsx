import React from 'react';
import { StyledCategories } from './types-of-categories.styles';
import { switch_, windows, leaders_game1, leaders_game2, leaders_game3, new_game1, new_game2, new_game3, sales_game1, sales_game2 } from '../../../assets/images'

const TypesOfCategories = () => {
    return (
        <StyledCategories>
            
                <main>
                    <div className="big-separator"></div>
                    <div className="big-separator"></div>
                    <span className="sort-txt">Сортировать по</span>
                    <button className="filter">
                        <img className="filter-img" src={switch_} alt="стрелка вниз" width="34" height="21" />
                    </button>

                    <div className="rounded-rectangle">
                        <h1 className=" intro-title">
                            Лидеры продаж
                        </h1>
                    </div>
                    <div className="big-separator"></div>

                    <button className="card ">
                        <img className="card-img" src={leaders_game1} alt="Обложка игры Counter-Strike 2" />
                        <span className="title-game">Counter-Strike 2</span>
                        <img className="img-windows" src={windows} width="40" />
                        <span className="price-txt-background price-txt">Бесплатно</span>
                    </button>

                    <div className="separator"></div>
                    <button className="card">
                        <img className="card-img" src={leaders_game2} alt="Обложка игры Palworld" />
                        <span className="title-game">Palworld</span>
                        <img className="img-windows" src={windows} width="40" />
                        <span className="new-price">990 руб.</span>
                        <span className="old-price">1100 руб.</span>
                    </button>

                    <div className="separator"></div>
                    <button className="card group-tr-game-info">
                        <img className="card-img" src={leaders_game3} alt="Обложка игры PUBG: BATTLEGROUNDS" />
                        <span className="title-game">PUBG: BATTLEGROUNDS</span>
                        <img className="img-windows" src={windows} width="40" />
                        <span className="price-txt-background price-txt">Бесплатно</span>
                    </button>
                    <div className="separator"></div>
                    <button className="show-more-btn">
                        <span>Показать больше</span>
                    </button>
                    <div className="big-separator"></div>
                    <div className="big-separator"></div>
                    <div className="rounded-rectangle">
                        <span className="intro-title">
                            Новинки
                        </span>
                    </div>
                    <div className="big-separator"></div>
                    <button className="card">
                        <img className="card-img" src={new_game1} alt="Обложка игры Alpha League" />
                        <img className="img-windows" src={windows} width="40" height="40" />
                        <span className="title-game">Alpha League</span>
                        <span className="price-txt-background price-txt">Бесплатно</span>
                    </button>
                    <div className="separator"></div>

                    <button className="card">
                        <img className="card-img" src={new_game2}
                            alt="Обложка игры Sons Of The Forests" />
                        <img className="img-windows" src={windows} width="40" height="40" />
                        <span className="title-game">Sons Of The Forests</span>
                        <span className="old-price">1100 руб.</span>
                        <span className="new-price">820 руб.</span>
                    </button>
                    <div className="separator"></div>

                    <button className="card">
                        <img className="card-img" src={new_game3} alt="Обложка игры Pacific Drives" />
                        <img className="img-windows" src={windows} width="40" height="40" />
                        <span className="title-game">Pacific Drives</span>
                        <span className="new-price">1799 руб.</span>
                    </button>
                    <div className="separator"></div>
                    <button className="show-more-btn">
                        <span>Показать больше</span>
                    </button>
                    <div className="big-separator"></div>
                    <div className="big-separator"></div>
                    <div className="rounded-rectangle">
                        <h1 className="intro-title">Скидки</h1>
                    </div>
                    <div className="big-separator"></div>
                    <button className="card">
                        <img className="card-img" src={sales_game1} alt="Обложка игры How to Survive" />
                        <img className="img-windows" src={windows} width="40" height="40" />
                        <span className="title-game">How to Survive</span>
                        <span className="new-price">83 руб.</span>
                    </button>
                    <div className="separator"></div>

                    <button className="card">
                        <img className="card-img" src={sales_game2}
                            alt="Обложка игры Red Solstice 2 Survivors" width="356" height="166" />
                        <img className="img-windows" src={windows} width="40" height="40" />
                        <span className="title-game">Red Solstice 2 Survivors</span>
                        <span className="new-price">561 руб.</span>
                    </button>
                    <div className="separator"></div>
                    <button className="card">
                        <img className="card-img" src={new_game2} alt="Обложка игры Sons Of The Forests" />
                        <img className="img-windows" src={windows} width="40" height="40" />
                        <span className="title-game">Sons Of The Forests</span>
                        <span className="old-price">1100 руб.</span>
                        <span className="new-price">820 руб.</span>
                    </button>
                    <div className="separator"></div>
                    <button className="show-more-btn">
                        <span>Показать больше</span>
                    </button>
                    <div className="big-separator"></div><div className="big-separator"></div>

                </main>
            
        </StyledCategories >
    );
};

export default TypesOfCategories;