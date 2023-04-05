import './HeaderMobile.scss';
import { useNavigate } from 'react-router-dom';
import { useState, FC } from 'react';
import { HeaderBasket } from '../HeaderBasket/HeaderBasket';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { Menu } from '../Menu/Menu';
import { PriceList } from '../PriceList/PriceList';
import { ICard } from '../../types/types';

interface HeaderMobileProps {
  userBasket: ICard[]; 
}

export const HeaderMobile: FC<HeaderMobileProps> = ({ userBasket }) => {

  const navigate = useNavigate();

  const handleCatalogClick = () => {
    navigate(`/catalog`);
  };

  const [isOpen, setIsOpen] = useState<boolean>(false)

  function openMenu(): void {
    if (!isOpen) {
      setIsOpen(true)
    }
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <>
      <header className="header-mobile">

        <button className={isOpen ? 'button-mobile__menu button-mobile__menu_close' : 'button-mobile__menu button-mobile__menu_open'} onClick={openMenu} ></button>

        <div className="header-mobile__logo"></div>

        <HeaderBasket userBasket={userBasket} />

        <div className="header-mobile__buttons">
          <button className="header-mobile__button button-mobile__catalog" onClick={handleCatalogClick}>Каталог</button>
          <div className="header-mobile__line"></div>
          <button className="header-mobile__button button-mobile__search" type="submit" aria-label="Поиск">Поиск</button>
        </div>

        <div className={isOpen ? 'header-mobile__menu' : 'header-mobile__menu hidden'}>

          <HeaderMenu>

            <div className="header__location">
              <div className="header__img header__img-phone"></div>
              <h2 className="header__title">Отдел продаж</h2>
              <p className="header__text">+7 (777) 490-00-91</p>
              <p className="header__text heder__text-mobile">время работы: 9:00-20:00</p>
            </div>

            <button className="call__button header__mobile-call-button" type="button" aria-label="Заказать звонок">
              <div className="button-mobile__menu button-mobile__phone"></div>
              Заказать звонок
            </button>

            <div className="button-mobile__line"></div>

            <Menu>
              <h3 className="menu__title">Меню сайта:</h3>

            </Menu>

          </HeaderMenu>

          <PriceList />

        </div>

      </header>
    </>
  );

};