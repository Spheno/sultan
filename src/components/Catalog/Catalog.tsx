import './Catalog.scss';
import { useState, FC, Dispatch, SetStateAction } from 'react';
import { AsideMenu } from '../AsideMenu/AsideMenu';
import { Cards } from '../Cards/Cards';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs'
import { SortMenu } from '../SortMenu/SortMenu'
import { SortTypeCare } from '../SortTypeCare/SortTypeCare'
import { PageSwitcher } from '../PageSwitcher/PageSwitcher'

import { ICard } from '../../types/types';

interface CatalogProps {
  products: ICard[];
  userBasket: ICard[];
  onCardClick: (card: ICard) => void;
  onButtonClick: (card: ICard) => void;
  handleSort: (typeSort: number) => void;
  onSelect: (selected: number) => void;
  typeCareSelected: number | null;
  onPriceFilter: (minPrice: number, maxPrice: number) => void;
  onCheckboxFilter: (selectedCheckboxe: string) => void;
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
  store: ICard[]
}

export const Catalog: FC<CatalogProps> = ({ products, onCardClick, onButtonClick, userBasket, handleSort, onSelect,
  typeCareSelected, onPriceFilter, onCheckboxFilter, onSearchBrand, filtred, onDeletedFilters, store, onMin,
  onMax, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedCheckboxes, setSelectedCheckboxes }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

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
            <button className={`button-small ${isOpen ? `aside__button-sort_close` : ``}`} type="button" aria-label="back" onClick={() => setIsOpen(!isOpen)}></button>
          </div>

          <SortMenu handleSort={handleSort} />

          <SortTypeCare
            onSelect={onSelect}
            typeCareSelected={typeCareSelected}
          />

        </div>

        <AsideMenu
          isOpen={isOpen}
          onSelect={onSelect}
          typeCareSelected={typeCareSelected}
          onPriceFilter={onPriceFilter}
          onCheckboxFilter={onCheckboxFilter}
          onSearchBrand={onSearchBrand}
          onMin={onMin}
          onMax={onMax}
          minPrice={minPrice} setMinPrice={setMinPrice}
          maxPrice={maxPrice} setMaxPrice={setMaxPrice}
          selectedCheckboxes={selectedCheckboxes} setSelectedCheckboxes={setSelectedCheckboxes}
          filtred={filtred}
          onDeletedFilters={onDeletedFilters}
          store={store}
        />

        <Cards
          products={currentCards}
          onCardClick={onCardClick}
          onButtonClick={onButtonClick}
          userBasket={userBasket}
        />

        {totalPages > 1 && (< PageSwitcher
          totalPages={totalPages} page={page} setPage={setPage}
        />)}

      </section>
    </main>

  )


}