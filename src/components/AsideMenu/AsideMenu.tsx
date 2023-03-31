import './AsideMenu.scss';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, FC } from 'react';
import { SearchForm } from '../SearchForm/SearchForm'

interface AsideMenuProps {
  isOpen: boolean;
}

export const AsideMenu: FC<AsideMenuProps> = ({ isOpen }) => {

  return (

    <aside className={`aside ${isOpen ? `aside_open` : `aside_close`}`}>

      <h2 className="aside__title aside__title-descktop">Подбор по параметрам</h2>

      <div className="aside__price-filter-container">
        <p className="aside__price">Цена<span className="aside__price-text">₸</span></p>
        <div className="aside__price-filter">
          <input className="aside__input aside__input_min" placeholder='0'></input>
          <span className="aside__price-span">-</span>
          <input className="aside__input aside__input_max" placeholder='10 000'></input>
        </div>
      </div>

      <div className="aside__manufacturer-container aside__container">

        <h3 className="aside__container-title">Производитель</h3>

        <SearchForm />

        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          Grifon <span className="aside__checkbox-span">(32)</span>
        </label>
        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          Boyscout <span className="aside__checkbox-span">(32)</span>
        </label>
        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          Paclan <span className="aside__checkbox-span">(32)</span>
        </label>
        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          Булгари Грин <span className="aside__checkbox-span">(32)</span>
        </label>

        <button className="aside__manufacturer-button aside__button" type="button" aria-label="Показать все">Показать все <span className="menu__arrow aside__button_arrow"> </span></button>

      </div>

      <span className="aside__span"></span>

      <div className="aside__brand-container aside__container">

        <h3 className="aside__container-title">Бренд</h3>

        <SearchForm />

        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          Nivea <span className="aside__checkbox-span">(32)</span>
        </label>
        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          GRIFON <span className="aside__checkbox-span">(32)</span>
        </label>
        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          Домашний сундук <span className="aside__checkbox-span">(32)</span>
        </label>
        <label className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox" />
          HELP <span className="aside__checkbox-span">(32)</span>
        </label>

        <button className="aside__brand-button aside__button" type="button" aria-label="Показать все">Показать все <span className="menu__arrow aside__button_arrow"> </span></button>

      </div>

      <div className="aside__buttons-container">
        <button className="aside__button-show">Показать</button>
        <button className="aside__button-delete button-delete"></button>
      </div>

      <ul className="catalog__aside-menu">
        <li className="catalog__aside-paragraph aside__title">Уход за телом</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Уход за руками</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Уход за ногами</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Уход за лицом</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Уход за волосами</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Средства для загара</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Средства для бритья</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Подарочные наборы</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Гигиеническая продукция</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Гигиена полости рта</li>
        <span className="aside__span"></span>
        <li className="catalog__aside-paragraph aside__title">Бумажная продукция</li>
      </ul>

    </aside>
  )
}
