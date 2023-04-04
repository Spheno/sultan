import './Catalog.scss';
import { useState, FC } from 'react';
import { AsideMenu } from '../AsideMenu/AsideMenu';
import { Cards } from '../Cards/Cards';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs'
import { SortMenu } from '../SortMenu/SortMenu'
import { SortTypeCare } from '../SortTypeCare/SortTypeCare'

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
  onCheckboxFilter: (selectedCheckboxes: string) => void;
  onSearchBrand: (searchQuery: string) => void;
  onMin: (num: number) => void;
  onMax: (num: number) => void;
  filtred: () => void;
  onDeletedFilters: () => void;
  store: ICard[]
}

export const Catalog: FC<CatalogProps> = ({ products, onCardClick, onButtonClick, userBasket, handleSort, onSelect,
  typeCareSelected, onPriceFilter, onCheckboxFilter, onSearchBrand, onMin, onMax, filtred, onDeletedFilters, store }) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = products.slice(startIndex, endIndex);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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

        {totalPages > 1 && (
          <div className="catalog__pages">
            <button className="catalog__pages-forward button-blank" type="button" aria-label="forward" onClick={handlePrevPage}></button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <p className={`catalog__page-link ${page === i + 1 && 'catalog__page-link_active'}`} key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</p>
            ))}
            <button className="catalog__pages-back button-blank" type="button" aria-label="back" onClick={handleNextPage}></button>
          </div>)}

      </section>
    </main>

  )


}