import './Header.scss';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, FC, ReactNode } from 'react';
//import { HeaderCart } from './HeaderCart';
//import { HeaderMenu } from './HeaderMenu';
//import { Menu } from '../Menu/Menu';
import { SearchForm } from '../SearchForm/SearchForm';
import { PriceList } from '../PriceList/PriceList';
import { HeaderBasket } from '../HeaderBasket/HeaderBasket';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { Menu } from '../Menu/Menu';
import { ICard } from '../../types/types';
import { useTotal } from '../../hooks/useTotal'

interface HeaderProps {
  userBasket: ICard[];
  children?: ReactNode; 
}

export const Header:FC<HeaderProps> = ({ userBasket }) => {
  const total = useTotal(userBasket)

  return (
    <>
      <header className="header">

        <HeaderMenu>

          <Menu />

        </HeaderMenu>

        <div className="header__info">

          <div className="header__logo logo"></div>

          <button className="header__button-catalog">Каталог</button>

          <SearchForm />

          <div className="header__call call">

            <h2 className="call__title">+7 (777) 490-00-91</h2>
            <p className="call__text">время работы: 9:00-20:00</p>
            <button className="call__button" type="button" aria-label="Заказать звонок">Заказать звонок</button>

            <div className="header__employee">
              <img className="header__employee-photo" alt="фото работника" src={require('../../images/photo.jpg')} />
              <div className="header__employee-active non-active"></div>
            </div>
          </div>

          <PriceList />

          <HeaderBasket userBasket={userBasket} >

            <p className="header__basket-text">Корзина</p>
            <p className="header__basket-title">{total} &#8376;</p>

          </HeaderBasket>

        </div>
      </header>
    </>
  );

};