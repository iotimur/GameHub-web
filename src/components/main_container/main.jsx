import React from "react";
import m from "./main.module.css";
import s from "./search.module.css";

const arrow_leftClassName = "arrow-left";
const arrow_rightClassName = "arrow-right";
const prod_top_sailClassName = "product-card-top-sail";
const prod_card_categClassName = "product-card-categories";
const prod_card_newsClassName = "product-card-news";
const text_cardClassName = "text-card";
const text_card_newsClassName = "text-card_news";
const search_inputClassName = "search-input";

import {
  img_top_1,
  img_top_2,
  img_top_3,
  img_top_4,
  img_categories_1,
  img_categories_2,
  img_categories_3,
  img_categories_4,
  img_news_1,
  img_news_2,
  arrow_left,
  arrow_right,
} from "../../../assets/Images_main";

const MainContent = () => {
  return (
    <div className={m.container}>
      <main>
        <div className={s.wrapper}>
          <div className={s[search_inputClassName]}>
            <a href="" target="_blank" hidden></a>
            <input type="text" placeholder="Type to search.." />
            {/* <div className={m.icon}>
              <i className={`${m.fas} ${m["fa-search"]}`}></i>
            </div> */}
          </div>
        </div>
        <div className={m.title}>
          <h2>Лидеры продаж</h2>
        </div>

        <div className={m.cards}>
          <img
            className={m[arrow_leftClassName]}
            src={arrow_left}
            alt="arrow_left"
          />
          <div className={m[prod_top_sailClassName]}>
            <img src={img_top_1} alt="Card Product" />
            <div className={m[text_cardClassName]}>
              <span>$299</span>
              <button>+</button>
            </div>
          </div>
          <div className={m[prod_top_sailClassName]}>
            <img src={img_top_2} alt="Card Product" />
            <div className={m[text_cardClassName]}>
              <span>$299</span>
              <button>+</button>
            </div>
          </div>
          <div className={m[prod_top_sailClassName]}>
            <img src={img_top_3} />
            <div className={m[text_cardClassName]}>
              <span>$299</span>
              <button>+</button>
            </div>
          </div>
          <div className={m[prod_top_sailClassName]}>
            <img src={img_top_4} alt="Card Product" />
            <div className={m[text_cardClassName]}>
              <span>$299</span>
              <button>+</button>
            </div>
          </div>
          <img
            className={m[arrow_rightClassName]}
            src={arrow_right}
            alt="arrow_right"
          />
        </div>

        <div className={m.title}>
          <h2>Категории</h2>
        </div>

        <div className={m.cards}>
          <img
            className={m[arrow_leftClassName]}
            src={arrow_left}
            alt="arrow_left"
          />

          <div className={m[prod_card_categClassName]}>
            <img src={img_categories_1} alt="Card Product" />
            <div className={m[text_cardClassName]}>
              <span>гонки</span>
            </div>
          </div>
          <div className={m[prod_card_categClassName]}>
            <img src={img_categories_2} alt="Card Product" />
            <div className={m[text_cardClassName]}>
              <span>глубокий сюжет</span>
            </div>
          </div>
          <div className={m[prod_card_categClassName]}>
            <img src={img_categories_3} alt="Card Product" />
            <div className={m[text_cardClassName]}>
              <span>симуляторы</span>
            </div>
          </div>
          <div className={m[prod_card_categClassName]}>
            <img src={img_categories_4} alt="Card Product" />
            <div className={m[text_cardClassName]}>
              <span>открытый мир</span>
            </div>
          </div>
          <img
            className={m[arrow_rightClassName]}
            src={arrow_right}
            alt="arrow_right"
          />
        </div>

        <div className={m.title}>
          <h2>Новости</h2>
        </div>

        <div className={m.cards}>
          <img
            className={m[arrow_leftClassName]}
            src={arrow_left}
            alt="arrow_left"
          />
          <div className={m[prod_card_newsClassName]}>
            <img src={img_news_1} alt="Card Product" />
            <div className={m[text_card_newsClassName]}>
              <p>
                Разработчики Delta Force: Hawk Ops представили крупномасштабный
                режим Havoc Warfare
              </p>
            </div>
          </div>
          <div className={m[prod_card_newsClassName]}>
            <img src={img_news_2} />
            <div className={m[text_card_newsClassName]}>
              <p>
                Разработчики Delta Force: Hawk Ops представили крупномасштабный
                режим Havoc Warfare
              </p>
            </div>
          </div>
          <img
            className={m[arrow_rightClassName]}
            src={arrow_right}
            alt="arrow_right"
          />
        </div>
      </main>
    </div>
  );
};

export default MainContent;
