import './Basket.scss'
import { FC, ReactNode, useEffect, useState } from 'react';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { BasketCard } from '../BasketCard/BasketCard';
import { ICard } from '../../types/types';
import { useTotal } from '../../hooks/useTotal'

interface BasketProps {
  userBasket: ICard[];
  totalCost?: number;
  children?: ReactNode;
  onChange: (data: { value: number; id: number }) => void;
  onDelete: (id: number) => void;
  
}

export const Basket: FC<BasketProps> = ({ userBasket, onChange, onDelete }) => {

  const total = useTotal(userBasket)

  return (
    <>
      <main className="main">

        <BreadCrumbs
          location={'Корзина'}
          to={'/basket'} />

        <section className="basket">

          <h2 className="section__title basket__title">Корзина</h2>

          <span className="basket__span"></span>

          {userBasket.map(product => <BasketCard
            key={product.id}
            product={product}
            onChange={onChange}
            onDelete={onDelete}
          />
          )}



          <div className="basket__submit-container">
            <button className="basket__button-submit">Оформить заказа</button>
            <p className="basket__total-cost">{total} ₸</p>
          </div>

        </section>

      </main>
    </>
  );

}