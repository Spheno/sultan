import './Basket.scss'
import { FC, ReactNode, useEffect, useState } from 'react';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs';
import { BasketCard } from '../BasketCard/BasketCard';
import { ICard } from '../../types/types';
import { useTotal } from '../../hooks/useTotal'
import { Popup } from '../Popup/Popup'

interface BasketProps {
  userBasket: ICard[];
  totalCost?: number;
  children?: ReactNode;
  onChange: (data: { value: number; id: number }) => void;
  onDelete: (id: number) => void;
  onOrdering: () => void;
  onPopupOpen: () => void;
}

export const Basket: FC<BasketProps> = ({ userBasket, onChange, onDelete, onOrdering, onPopupOpen }) => {

  const total = useTotal(userBasket)

  const [isEmpty, setIsEmpty] = useState<boolean>(false)

  useEffect(() => {
    if (userBasket.length === 0) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }
  }, [userBasket])

  return (
    <>
      <main className="main">

        <BreadCrumbs
          location={'Корзина'}
          to={'/basket'} />

        <section className="basket">

          <h2 className="section__title basket__title">Корзина</h2>

          <span className="basket__span"></span>

         {isEmpty
         ? <div className="basket__empty"><h3 className="basket__text">Корзина пуста</h3><span className="basket__span"></span></div>
         : userBasket.map(product => <BasketCard
            key={product.id}
            product={product}
            onChange={onChange}
            onDelete={onDelete}
          />
          )}

          <div className="basket__submit-container">
            <button className={`basket__button-submit ${isEmpty && 'basket__button-submit_disabled'}`} onClick={() => {onPopupOpen(); onOrdering()}} disabled={isEmpty}>Оформить заказа</button>
            <p className="basket__total-cost">{total} ₸</p>
          </div>

        </section>

      </main>

    </>
  );

}