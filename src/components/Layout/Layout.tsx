import { Header } from '../Header/Header';
import { HeaderMobile } from '../HeaderMobile/HeaderMobile';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useSize } from '../../hooks/useSize';
import { useState, useEffect, FC, ReactNode } from 'react';
import { ICard } from '../../types/types';

interface LayoutPrips {
  userBasket: ICard[]; 
  children?: ReactNode; 
  onSearchBrand: (searchQuery: string) => void;
}

export const Layout:FC<LayoutPrips> = ({ userBasket, onSearchBrand }) => {

  const width: number = useSize();
  const [isBig, setIsBig] = useState<boolean>(true)

  useEffect(() => {
    handleWindowSize()
  }, [width]);

  const handleWindowSize = () => {
    if (width > 1420) {
      return setIsBig(true);
    } else {
      return setIsBig(false);
    }
  }

  return (
    <>
      {isBig ? <Header userBasket={userBasket} onSearchBrand={onSearchBrand} /> : <HeaderMobile userBasket={userBasket} />}
      <Outlet />
      <Footer />
    </>
  );

}