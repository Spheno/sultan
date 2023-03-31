import './SearchForm.scss';
//import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
//import { useState, useEffect } from 'react';
//import { HeaderCart } from './HeaderCart';
//import { HeaderMenu } from './HeaderMenu';
//import { Menu } from '../Menu/Menu';

export function SearchForm() {

  return (
    <>
      <form className="form">
        <input className="form__input" type="text" name="searchQuery" id="search-query"
          placeholder="Поиск..." required />
        <button className="form__button form__button_search" type="submit" aria-label="Поиск"></button>
      </form>
    </>
  )
}