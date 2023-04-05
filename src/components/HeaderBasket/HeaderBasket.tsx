import './HeaderBasket.scss';
import { useNavigate } from 'react-router-dom';
import { ReactNode, FC } from 'react';
import { ICard } from '../../types/types';

interface HeaderBasketProps {
children?: ReactNode;
userBasket: ICard[];  
}

export const HeaderBasket: FC<HeaderBasketProps> = ({ children, userBasket }) => {

  const navigate = useNavigate();

  const handleBasketClick = () => {
    navigate(`/basket`);
  };

  return (
    <>
      <div className="header-basket">
        <button className="header-basket__button" type="button" aria-label="Корзина" onClick={handleBasketClick}></button>
        <div className="header-basket__counter-conteiner">
          <p className="header-basket__counter-text">{userBasket.length}</p>
        </div>

        {children}

      </div>
    </>
  );

};