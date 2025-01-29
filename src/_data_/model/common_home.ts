// common.ts

export type BaseResponse<Data> =
  | {
      success: true;
      data?: Data;
    }
  | {
      success: false;
      error: string;
    };

export type Game = {
  id: number;
  image: string;
  price: number,
  imgPath: string;
};

export type Category = {
  image: string;
  text: string;
  imgPath: string;
  category: string;
};

export type News = {
  image: string;
  text: string;
  imgPath: string;
};

export type Home = {
  topSail: Game[];
  categories: Category[];
  news: News[];
};

export type Cart = {
  ids: number[]; // Список ID игр, добавленных в корзину
};

export type AllGames = {
  id: number;
  title: string;
  image: string;
  price: number;
  old_price?: number;
  imgPath: string;
  description: string;
  category: string;
};
