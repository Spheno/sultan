import './Card.scss';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { ICard } from '../../types/types';

interface CardProps {
  product: ICard;
  inBasket: boolean;
  onCardClick: (card: ICard) => void;
  onButtonClick: (card: ICard) => void;
}

export const Card: FC<CardProps> = ({ product, onCardClick, onButtonClick, inBasket }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/catalog/product/${product.id}`);
  };

  return (
    <div className="card">

      <div className="card__img-container">
        <img className="card__img" alt={product.title} src={product.url} />
      </div>

      <div className="card__info">

        <div className="card__type-weight">
          <div className={`card__weight ${product.sizeType === 'weight' ? `card__weight_weight` : `card__weight_volume`}`}></div>
          <p className="card__weight-text">{product.size}</p>
        </div>

        <h3 className="card__title" onClick={() => { onCardClick({ ...product, inBasket: inBasket }); handleCardClick() }}>{product.title} <span>{product.subtitle}</span></h3>

        <div className="card__specification-container">
          <p className="card__specification">Штрихкод: <span>{product.barcode}</span></p>
          <p className="card__specification">Производитель: <span >{product.manufacturer}</span></p>
          <p className="card__specification">Бренд: <span >{product.brand}</span></p>
        </div>

        <div className="card__price-container">
          <p className="card__price">{product.price} ₸</p>
          <button
            className="card__button" aria-label="Добавить в корзину" type="button"
            disabled={inBasket ? true : false} onClick={() => onButtonClick({ ...product, quantity: 1 })}>
            {inBasket ? 'В корзине' : 'В корзину'}
          </button>
        </div>
      </div>
    </div>
  )
}