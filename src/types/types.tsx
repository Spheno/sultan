export interface ICard {
  id: number;
  title: string;
  url: string;
  sizeType: string;
  size: string;
  barcode: number;
  manufacturer: string;
  brand: string;
  subtitle: string;
  price: number;
  description: string;
  typeCare: number[];
  quantity?: number;
  inBasket?: boolean;
}

export  interface IManufacturer {
  name: string;
  count: number;
}

