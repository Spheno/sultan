import './AsideMenu.scss';
import { FC, useState, Dispatch, SetStateAction } from 'react';
import { SearchForm } from '../SearchForm/SearchForm'
import { SortTypeCare } from '../SortTypeCare/SortTypeCare'
import { ICard } from '../../types/types';
import { ManufacturersMenu } from '../ManufacturersMenu/ManufacturersMenu';
import { PriceFilter } from '../PriceFilter/PriceFilter'

interface AsideMenuProps {
  isOpen: boolean;
  store: ICard[];
  onSelect: (selected: number) => void;
  typeCareSelected: number | null;
  onPriceFilter: (minPrice: number, maxPrice: number) => void;
  onCheckboxFilter: (selectedCheckboxes: string) => void;
  onSearchBrand: (searchQuery: string) => void;
  onMin: (num: number) => void;
  onMax: (num: number) => void;
  minPrice: number,
  setMinPrice: Dispatch<SetStateAction<number>>,
  maxPrice: number,
  setMaxPrice: Dispatch<SetStateAction<number>>,
  selectedCheckboxes: string[],
  setSelectedCheckboxes: Dispatch<SetStateAction<string[]>>,
  filtred: () => void;
  onDeletedFilters: () => void;
}

export const AsideMenu: FC<AsideMenuProps> = ({ isOpen, onSelect, typeCareSelected,
  onCheckboxFilter, onSearchBrand, filtred, onDeletedFilters, store, onMin,
  onMax, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedCheckboxes, setSelectedCheckboxes }) => {

  const [isOffFiltres, setIsOffFiltres] = useState<boolean>(false);

  return (

    <aside className={`aside ${isOpen ? `aside_open` : `aside_close`}`}>

      <h2 className="aside__title aside__title-descktop">Подбор по параметрам</h2>

      <PriceFilter 
      onMin={onMin}
      onMax={onMax}
      minPrice={minPrice} setMinPrice={setMinPrice}
      maxPrice={maxPrice} setMaxPrice={setMaxPrice}
      isOffFiltres={isOffFiltres}
      setIsOffFiltres={setIsOffFiltres}
      />

      <div className="aside__manufacturer-container aside__container">

        <h3 className="aside__container-title">Производитель</h3>

        <SearchForm
          onSearchBrand={onSearchBrand}
        />

        <ManufacturersMenu
          store={store}
          onCheckboxFilter={onCheckboxFilter}
          setIsOffFiltres={setIsOffFiltres}
          isOffFiltres={isOffFiltres}
          selectedCheckboxes={selectedCheckboxes} setSelectedCheckboxes={setSelectedCheckboxes}
        />

      </div>

      <div className="aside__buttons-container">
        <button className="aside__button-show" onClick={() => { filtred() }}>Показать</button>
        <button className="aside__button-delete button-delete" onClick={() => { onDeletedFilters(); setIsOffFiltres(true) }} ></button>
      </div>

      <SortTypeCare
        onSelect={onSelect}
        typeCareSelected={typeCareSelected}
      />

    </aside>
  )
}
