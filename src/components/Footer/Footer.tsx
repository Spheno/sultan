import './Footer.scss';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import { Menu } from '../Menu/Menu';
import { PriceList } from '../PriceList/PriceList';

export function Footer() {

  return (
    <>
      <footer className="footer">

        <div className="footer__logo logo"></div>

        <p className="footer__text"> Компания «Султан» — снабжаем розничные магазины товарами
          "под ключ" в Кокчетаве и Акмолинской области</p>

        <form className="form">
          <label className="form__label">Подпишись на скидки и акции</label>
          <input className="form__input" type="e-mail" name="e-mail" id="mail"
            placeholder="Введите ваш E-mail" required />
          <button className="form__button form__button_footer" type="submit" aria-label="Подписаться на рассылку"></button>
        </form>

        <Menu>
          <h3 className="menu__title">Меню сайта:</h3>
        </Menu>

        <div className="footer__menu-container">

          <h3 className="menu__title">Категории:</h3>
          <ul className="menu">
            <li className="menu__li"><a href="google.ru">Бытовая химия</a></li>
            <li className="menu__li"><a href="google.ru">Косметика и гигиена</a></li>
            <li className="menu__li"><a href="google.ru">Товары для дома</a></li>
            <li className="menu__li"><a href="google.ru">Товары для детей и мам</a></li>
            <li className="menu__li"><a href="google.ru">Посуда</a></li>
          </ul>

        </div>

        {/* <div className="footer__price-container">
          
          <button className="button__price footer__price-button">Прайс-лист</button>
        </div> */}

        <PriceList>

          <h3 className="menu__title price__title">Скачать прайс-лист:</h3>

        </PriceList>

        <div className="footer__messengers">
          <p className="footer__messengers-text">Связь в мессенджерах:</p>
          <a className="footer__messenger" href="https://www.whatsapp.com/"><div className="footer__messenger-icon footer__messenger-icon_whatsapp"></div></a>
          <a className="footer__messenger" href="https://web.telegram.org/k/"><div className="footer__messenger-icon footer__messenger-icon_telegram"></div></a>
        </div>

        <div className="footer__contacts">
          <h3 className="menu__title">Контакты:</h3>

          <div className="footer__location">
            <h2 className="call__title">+7 (777) 490-00-91</h2>
            <p className="call__text">время работы: 9:00-20:00</p>
            <button className="call__button" type="button" aria-label="Заказать звонок">Заказать звонок</button>
          </div>

          <div className="footer__location">
            <h2 className="header__title">opt.sultan@mail.ru</h2>
            <p className="header__text">На связи в любое время</p>
          </div>

          <div className="footer__card-container">
           <div className="footer__card footer__card-visa"></div>
            <div className="footer__card footer__card-mastercard"></div>
          </div>
        </div>

      </footer>

    </>

  );

};