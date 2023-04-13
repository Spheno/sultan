import { Header } from '../Header/Header';
import { HeaderMobile } from '../HeaderMobile/HeaderMobile';
import { Footer } from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useSize } from '../../hooks/useSize';
import { useState, useEffect, FC, ReactNode } from 'react';
import { ICard } from '../../types/types';

interface LayoutProps {
  userBasket: ICard[]; 
  children?: ReactNode; 
  onSearchBrand: (searchQuery: string) => void;
}

export const Layout:FC<LayoutProps> = ({ userBasket, onSearchBrand }) => {

  const width: number = useSize();
  const [isBig, setIsBig] = useState<boolean>(true)

  useEffect(() => {
    const handleWindowSize = () => {
      if (width > 1420) {
        return setIsBig(true);
      } else {
        return setIsBig(false);
      }
    }
    handleWindowSize();
  }, [width]);

  return (
    <>
      {isBig 
      ? <Header userBasket={userBasket} onSearchBrand={onSearchBrand} /> 
      : <HeaderMobile userBasket={userBasket} />}
      <Outlet />
      <Footer />
    </>
  );

}