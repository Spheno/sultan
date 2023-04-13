import './SortMenu.scss';
import { useState, FC } from 'react';
//import { SORT_LIST } from '../../utils/constants'

interface SortMenuProps {
  handleSort: (typeSort: number) => void;
}

export const SortMenu: FC<SortMenuProps> = ({ handleSort }) => {
  const SORT_LIST = ['Цена по возрастанию', 'Цена по убыванию', 'Названия по возрастанию', 'Названия по убыванию']
  const [isSortMenuOpen, setIsSortMenuOpen] = useState<boolean>(false)

  const [selectedSort, setSelectedSort] = useState<number>(0)

  function handelSelectedSort(i: number): void {
    setSelectedSort(i)
    setIsSortMenuOpen(false)
    handleSort(i)
  }

  return (
    <div className="catalog__sort-container">
      <p className="catalog__sort">Сортировка: </p>
      <p data-testid="toggle-button" className="catalog__sort-selected"
        onClick={() => setIsSortMenuOpen(!isSortMenuOpen)}>{SORT_LIST[selectedSort]}
        <span className={`menu__arrow catalog__sort-selected_arrow ${isSortMenuOpen && `arrow-open`}`}></span>
      </p>

      <ul data-testid="toggle-ul" className={`catalog__sort-menu ${isSortMenuOpen ? `open` : `close`}`}>

        {SORT_LIST.map((el, index) => (
          <li key={index} className={`catalog__sort-li ${selectedSort === index && 'sort-active'}`} onClick={() => handelSelectedSort(index)}>{el}</li>
        )
        )}

      </ul>

    </div>

  )
}
