import './BasketCard.scss'
import { Amount } from '../Amount/Amount';
import { useState, useEffect, FC } from 'react';
import { ICard } from '../../types/types';

interface BasketCardProps {
  product: ICard;
}

export const BasketCard: FC<BasketCardProps> = () => {

  const [amountValue, setAmountValue] = useState<number>(1);

  const handleChangeAmount = (value: number) => {
    setAmountValue(value)
  };

  return (
    <>
      <div className="basket__card">

        <div className="basket__img-container">
          <img className="basket__img" alt="порошок" src={'https://mishka-knizhka.ru/wp-content/uploads/2021/08/zayka-serenkij-sidit.jpg'} />
        </div>

        <div className="basket__card-info">

          <div className="card__type-weight">
            <div className={`card__weight ${'weight' === 'weight' ? `card__weight_weight` : `card__weight_volume`}`}></div>
            <p className="card__weight-text">'weight'</p>
          </div>

          <h3 className="basket__card-title">nnvvhsgdvba ksnldhfgsj kalieukhd bsjnkljdehvv hsgdvbaks nldhfgs jkalieukhdbsjnkljdehnn</h3>

          <p className="basket__card-description">vvvhsgdvbaksnldhfgsjkalieukhdbsjnkljdehvvhsgdvbaksnldhfgsjkalieukhdbsjnkljdehvvhsgdvbaksnldhfgsjkalieukhdbsjnkljdehvvhsgdvbaksnldhfgsjkalieukhdbsjnkljdehvvhsgdvbaksnldhfgsjkalieukhdbsjnkljdehvvhsgdvbaksnldhfgsjkalieukhdbsjnkljdehu</p>

        </div>

        <div className="basket__card-button-container">

          <span className="basket__card-span"></span>

          <Amount handleChangeAmount={handleChangeAmount} amountValue={amountValue}  />

          <span className="basket__card-span"></span>

          <p className="basket__card-price">6767 ₸</p>

          <span className="basket__card-span"></span>

          <button className="basket__button-delete button-delete"></button>
        </div>

      </div>

      <span className="basket__span"></span>

    </>
  );

}