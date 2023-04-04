import './SearchForm.scss';
import { useState, FC } from 'react';

interface SearchFormProps {
  onSearchBrand: (searchQuery: string) => void;
}

export const SearchForm:FC <SearchFormProps> = ({ onSearchBrand }) => {

  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <>
      <form className="form">
        <input className="form__input" type="text" name="searchQuery" id="search-query"
          placeholder="Поиск..." required onChange={(e) => setSearchQuery(e.target.value)}/>
        <button className="form__button form__button_search" type="button" aria-label="Поиск" onClick={() => {onSearchBrand(searchQuery)}}></button>
      </form>
    </>
  )
}