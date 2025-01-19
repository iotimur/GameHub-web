export type Game = {
  id: number; 
  title: string;
  price: number;
  old_price?: number; 
  image: string;
  os: string;
  fav1: string;
  fav2: string;
};

export type Categories = {
  games1: Game[];
  games2: Game[];
  games3: Game[];
};