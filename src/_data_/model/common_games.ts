export interface Game {
    id: number;
    title: string;
    image: string;
    alt: string;
    releaseDate: string;
    description: string;
    price: number;
  }
  
  export interface GamesResponse {
    success: boolean;
    data: Game[];
  }