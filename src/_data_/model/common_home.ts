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

export type AllGames = {
  id: number;
  name: string;
  image: string;
  text: string;
  imgPath: string;
  description: string;
  category: string;
};
