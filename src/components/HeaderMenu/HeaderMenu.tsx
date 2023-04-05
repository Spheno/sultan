import './HeaderMenu.scss';
import { FC, ReactNode } from 'react';

interface HeaderMenuProps {
  children?: ReactNode;

}

export const HeaderMenu:FC<HeaderMenuProps> = ({ children }) => {

  return (
    <>
      <div className="header__menu">
        <div className="header__contacts">
          <div className="header__location">
            <div className="header__img header__img-location"></div>
            <h2 className="header__title">г. Кокчетав, ул. Ж. Ташенова 129Б</h2>
            <p className="header__text">(Рынок Восточный)</p>
          </div>
          <div className="header__location">
            <div className="header__img header__img-mail"></div>
            <h2 className="header__title">opt.sultan@mail.ru</h2>
            <p className="header__text">На связи в любое время</p>
          </div>
        </div>

        {children}

      </div>
    </>
  );

};