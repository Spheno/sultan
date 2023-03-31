import './PriceList.scss';
import { useState, useEffect, ReactNode, FC } from 'react';

interface PriceListProps {
  children?: ReactNode;
}

export const PriceList: FC<PriceListProps> = ({ children }) => {

  return (
    <>
      <div className="price__container">

        {children}

        <button className="price__button">Прайс-лист</button>
      </div>
    </>
  )
}