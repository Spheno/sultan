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
  useFor: string;
  quantity?: number;
  inBasket?: boolean;
  typeCare: ITypeCare;
}

export interface ITypeCare {
  body?: boolean;
  hand?: boolean;
  feet?: boolean;
  face?: boolean;
  hair?: boolean;
  sun?: boolean;
  shaving?: boolean;
  gift?: boolean;
  hygiene?: boolean;
  oral?: boolean;
  paper?: boolean;
}