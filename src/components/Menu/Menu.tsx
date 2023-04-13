import './Menu.scss';
import { FC, ReactNode } from 'react';

interface MenuProps {
  children?: ReactNode;
}

export const Menu: FC<MenuProps> = ({ children }) => {

  return (
    <>
      <div className="menu__container">

        {children}

        <ul className="menu">
          <li className="menu__li"><a href="google.ru">О компании</a></li>
          <li className="menu__li"><a href="google.ru">Доставка и оплата</a></li>
          <li className="menu__li"><a href="google.ru">Возврат</a></li>
          <li className="menu__li"><a href="google.ru">Контакты</a></li>
        </ul>
      </div>
    </>
  );

};