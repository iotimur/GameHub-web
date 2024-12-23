export type BaseResponse2<Data> =
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
  title: string;
  price: number;
  old_price?: number; 
  image: string;
  os: string;
};

export type Categories = {
  games1: Game[];
  games2: Game[];
  games3: Game[];
  games4: Game[];
};

// export type CategoriesResponce = {
//   data: Categories[];
// };

// export type DiscountGames = {
//   id: string;
//   title: string;
//   price: string;
//   old_price: string;
//   image: string;
//   os: string;
// };
// export type LeadersGames = {
//   id: string;
//   title: string;
//   price: string;
//   old_price: string;
//   image: string;
//   os: string;
// };
// export type NewGames = {
//   id: string;
//   title: string;
//   price: string;
//   old_price: string;
//   image: string;
//   os: string;
// };

// export type Categories = {
//   games1: DiscountGames[];
//   games2: NewGames[];
//   games3: LeadersGames[];
//   games4: LeadersGames[];
// };
