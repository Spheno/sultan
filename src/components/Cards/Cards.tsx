import './Cards.scss';
import { FC } from 'react';
import { Card } from '../Card/Card';

import { ICard } from '../../types/types';

interface CardsProps {

  products: ICard[];
  userBasket: ICard[];
  onCardClick: (card: ICard) => void;
  onButtonClick: (card: ICard) => void;
}

export const Cards: FC<CardsProps> = ({ products, onCardClick, onButtonClick, userBasket }) => {

  return (
    <div className="cards">

      {products.map(product => <Card
      key={product.id}
      product={product}
      onCardClick={onCardClick}
      onButtonClick={onButtonClick}
      inBasket={userBasket.some(basketItem => basketItem.id === product.id)}
      />
      )}

    </div>
  )
}