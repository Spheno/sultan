import './Catalog.scss';
import { Route, Routes, useNavigate, useLocation, NavigateFunction } from 'react-router-dom';
import { useState, FC } from 'react';
import { AsideMenu } from '../AsideMenu/AsideMenu';
import { Cards } from '../Cards/Cards';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs'
import { SortMenu } from '../SortMenu/SortMenu'

import { ICard } from '../../types/types';

interface CatalogProps {
  products: ICard[];
  userBasket: ICard[];
  onCardClick: (card: ICard) => void;
  onButtonClick: (card: ICard) => void;
  handleSort: (typeSort: number) => void;
}

export const Catalog: FC<CatalogProps> = ({ products, onCardClick, onButtonClick, userBasket, handleSort }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openMenu(): void {
    if (!isOpen) {
      setIsOpen(true)
    }
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <main className="main">
      
      <BreadCrumbs
        location={'Гигиена и уход'}
        to={'/catalog'}
      />

      <section className="catalog">

        <div className="catalog__header">

          <h2 className="section__title catalig__title">Косметика и гигиена</h2>

          <div className="aside__title-conteiner">
            <h2 className="aside__title aside__title-mobile">Подбор по параметрам</h2>
            <button className={`button-small ${isOpen ? `aside__button-sort_close` : ``}`} type="button" aria-label="back" onClick={openMenu}></button>
          </div>

          <SortMenu  handleSort={handleSort} />

          <ul className="catalog__menu">
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Уход за телом" type="button">Уход за телом</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Уход за руками" type="button">Уход за руками</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Уход за ногами" type="button">Уход за ногами</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Уход за лицом" type="button">Уход за лицом</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Уход за волосами" type="button">Уход за волосами</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Средства для загара" type="button">Средства для загара</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Средства для бритья" type="button">Средства для бритья</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Подарочные наборы" type="button">Подарочные наборы</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Гигиеническая продукция" type="button">Гигиеническая продукция</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Гигиена полости рта" type="button">Гигиена полости рта</button></li>
            <li className="catalog__menu-paragraph"><button className="catalog__menu-button" aria-label="Бумажная продукция" type="button">Бумажная продукция</button></li>
          </ul>

        </div>

        <AsideMenu
          isOpen={isOpen}
        />

        <Cards
          products={products}
          onCardClick={onCardClick}
          onButtonClick={onButtonClick}
          userBasket={userBasket}
        />

        <div className="catalog__pages">
          <button className="catalog__pages-forward button-blank" type="button" aria-label="forward"></button>
          <a className="catalog__page-link catalog__page-link_active" href="googl.com">1</a>
          <a className="catalog__page-link" href="googl.com">2</a>
          <a className="catalog__page-link" href="googl.com">3</a>
          <button className="catalog__pages-back button-blank" type="button" aria-label="back"></button>
        </div>

      </section>
    </main>

  )


}