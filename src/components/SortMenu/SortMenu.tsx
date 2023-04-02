import './SortMenu.scss';
//import { Route, Routes, useNavigate, useLocation, NavigateFunction } from 'react-router-dom';
import { useState, FC } from 'react';

interface SortMenuProps {
  handleSort: (typeSort: number) => void;
}

export const SortMenu: FC<SortMenuProps> = ({ handleSort }) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState<boolean>(false)

  const sortMenuList = ['Цена по возрастанию', 'Цена по убыванию', 'Названия по возрастанию', 'Названия по убыванию']
  const [selectedSort, setSelectedSort] = useState<number>(0)

  function handelSelectedSort(i: number): void {
    setSelectedSort(i)
    setIsSortMenuOpen(false)
    handleSort(i)
  }

  return (
    <div className="catalog__sort-container">
      <p className="catalog__sort">Сортировка: </p>
      <p className="catalog__sort-selected" onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}>{sortMenuList[selectedSort]}<span className={`menu__arrow catalog__sort-selected_arrow ${isSortMenuOpen && `arrow-open`}`}> </span></p>


      <ul className={`catalog__sort-menu ${isSortMenuOpen ? `open` : `close`}`}>

        {sortMenuList.map((el, index) => (
          <li key={index} className={`catalog__sort-li ${selectedSort === index && 'sort-active'}`} onClick={() => handelSelectedSort(index)}>{el}</li>
        )
        )}

      </ul>

    </div>

  )
}
