import React from 'react';
import './rating-block.css';
const RatingBlock = () => {
    return (
        <div className="rating-block">
            <div className="rating-block-age">
                <div className="rating-block-age-square">
                    <p className="rating-age-square-text">16+</p>
                </div>
                <div className="rating-block-age-text">
                    <p>ДЛЯ ДЕТЕЙ СТАРШЕ 16 ЛЕТ</p>
                    <p>Рейтинг от: Закон о рейтинге контента</p>
                </div>
            </div>

            <div className="rating-block-gamestar">
                <div className="rating-block-gamestar-square">
                    <p className="rating-gamestar-square-text">93</p>
                </div>
                <div className="rating-block-gamestar-text">
                    <p>GameStar</p>
                </div>
            </div>

            <div className="rating-block-metacritic">
                <div className="rating-block-metacritic-square">
                    <p className="rating-metacritic-square-text">94</p>
                </div>
                <div className="rating-block-metacritic-text">
                    <p>metacritic</p>
                </div>
            </div>

            <div className="rating-block-opencritic">
                <div className="rating-block-opencritic-square">
                    <p className="rating-opencritic-square-text">92</p>
                </div>
                <div className="rating-block-opencritic-text">
                    <p>OpenCritic</p>
                </div>
            </div>
        </div>
    );
};

export default RatingBlock;
