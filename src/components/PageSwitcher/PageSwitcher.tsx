import './PageSwitcher.scss';
import { Dispatch, SetStateAction, FC } from 'react';

interface PageSwitcherProps {
  totalPages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>
}

export const PageSwitcher: FC<PageSwitcherProps> = ({ totalPages, page, setPage }) => {

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

    <div className="catalog__pages">
      <button className="catalog__pages-forward button-blank" type="button" aria-label="forward" onClick={handlePrevPage}></button>
      {Array.from({ length: totalPages }).map((_, i) => (
        <p className={`catalog__page-link ${page === i + 1 && 'catalog__page-link_active'}`} key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</p>
      ))}
      <button className="catalog__pages-back button-blank" type="button" aria-label="back" onClick={handleNextPage}></button>
    </div>

  )

}