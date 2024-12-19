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
  image: string;
  text: string;
};

export type Category = {
  image: string;
  text: string;
};

export type News = {
  image: string;
  text: string;
};

// Переименовываем тип Data в Home
export type Home = {
  topSail: Game[];
  categories: Category[];
  news: News[];
};
