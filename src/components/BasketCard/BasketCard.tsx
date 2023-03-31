import './BasketCard.scss'
import { Amount } from '../Amount/Amount';
import { useState, useEffect, FC } from 'react';
import { ICard } from '../../types/types';

interface BasketCardProps {
  product: ICard;
  onChange: (data: { value: number; id: number }) => void;
  onDelete: (id: number) => void;
}

export const BasketCard: FC<BasketCardProps> = ({ product, onChange, onDelete }) => {

  const [amountValue, setAmountValue] = useState<number>(product.quantity || 1);

  const handleChangeAmount = (value: number) => {
    setAmountValue(value)
  };

  useEffect(() => {
    onChange({value: amountValue, id: product.id})
  }, [amountValue])

  return (
    <>
      <div className="basket__card">

        <div className="basket__img-container">
          <img className="basket__img" alt={product.title} src={product.url} />
        </div>

        <div className="basket__card-info">

          <div className="card__type-weight">
            <div className={`card__weight ${product.sizeType === 'weight' ? `card__weight_weight` : `card__weight_volume`}`}></div>
            <p className="card__weight-text">{product.size}</p>
          </div>

          <h3 className="basket__card-title">{product.title}</h3>

          <p className="basket__card-description">{product.description}</p>

        </div>

        <div className="basket__card-button-container">

          <span className="basket__card-span"></span>

          <Amount handleChangeAmount={handleChangeAmount} amountValue={amountValue}  />

          <span className="basket__card-span"></span>

          <p className="basket__card-price">{(product.price * amountValue).toFixed(2)} ₸</p>

          <span className="basket__card-span"></span>

          <button className="basket__button-delete button-delete" onClick={() => onDelete(product.id)}></button>
        </div>

      </div>

      <span className="basket__span"></span>

    </>
  );

}