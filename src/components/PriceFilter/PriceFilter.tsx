import './PriceFilter.scss';
import { FC, useEffect, Dispatch, SetStateAction } from 'react';

interface PriceFilterProps {
  onMin: (num: number) => void;
  onMax: (num: number) => void;
  minPrice: number,
  setMinPrice: Dispatch<SetStateAction<number>>,
  maxPrice: number,
  setMaxPrice: Dispatch<SetStateAction<number>>,
  isOffFiltres: boolean;
  setIsOffFiltres: Dispatch<SetStateAction<boolean>>;
}

export const PriceFilter: FC<PriceFilterProps> = ({ onMin, onMax, minPrice, setMinPrice, maxPrice, setMaxPrice, isOffFiltres, setIsOffFiltres }) => {

  useEffect(() => {
    if (isOffFiltres) {
      setMinPrice(0)
      setMaxPrice(10000)
      setIsOffFiltres(false)
    }

  }, [isOffFiltres, setMinPrice, setMaxPrice, setIsOffFiltres])

  return (

    <div className="aside__price-filter-container">
      <p className="aside__price">Цена<span className="aside__price-text">₸</span></p>
      <div className="aside__price-filter">
        <input className="aside__input aside__input_min" placeholder='0' value={minPrice || 0} onChange={(e) => onMin(Number(e.target.value))}></input>
        <span className="aside__price-span">-</span>
        <input className="aside__input aside__input_max" placeholder='10 000' value={maxPrice || 10000} onChange={(e) => onMax(Number(e.target.value))}></input>
      </div>
    </div>
  )
}