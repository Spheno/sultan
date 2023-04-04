import './AsideMenu.scss';
import { FC } from 'react';
import { SearchForm } from '../SearchForm/SearchForm'
import { SortTypeCare } from '../SortTypeCare/SortTypeCare'
import { ICard } from '../../types/types';
import { ManufacturersMenu } from '../ManufacturersMenu/ManufacturersMenu'

interface AsideMenuProps {
  isOpen: boolean;
  store: ICard[];
  onSelect: (selected: number) => void;
  typeCareSelected: number | null;
  onPriceFilter: (minPrice: number, maxPrice: number) => void;
  onCheckboxFilter: (selectedCheckboxes: string) => void;
  onSearchBrand: (searchQuery: string) => void;
  onMin: (num:number) => void;
  onMax: (num:number) => void;
  filtred: () => void;
  onDeletedFilters: () => void;
}

export const AsideMenu: FC<AsideMenuProps> = ({ isOpen, onSelect, typeCareSelected,  
  onCheckboxFilter, onSearchBrand, onMin, onMax, filtred, onDeletedFilters, store }) => {

  return (

    <aside className={`aside ${isOpen ? `aside_open` : `aside_close`}`}>

      <h2 className="aside__title aside__title-descktop">Подбор по параметрам</h2>

      <div className="aside__price-filter-container">
        <p className="aside__price">Цена<span className="aside__price-text">₸</span></p>
        <div className="aside__price-filter">
          <input className="aside__input aside__input_min" placeholder='0' onChange={(e) => onMin(Number(e.target.value))}></input>
          <span className="aside__price-span">-</span>
          <input className="aside__input aside__input_max" placeholder='10 000' onChange={(e) => onMax(Number(e.target.value))}></input>
        </div>
      </div>

      <div className="aside__manufacturer-container aside__container">

        <h3 className="aside__container-title">Производитель</h3>

        <SearchForm 
        onSearchBrand={onSearchBrand}
        />

       <ManufacturersMenu store={store}  onCheckboxFilter={onCheckboxFilter} />

      </div>

      <div className="aside__buttons-container">
        <button className="aside__button-show" onClick={filtred}>Показать</button>
        <button className="aside__button-delete button-delete" onClick={onDeletedFilters} ></button>
      </div>

      <SortTypeCare
        onSelect={onSelect}
        typeCareSelected={typeCareSelected}
      />

    </aside>
  )
}
