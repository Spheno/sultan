import './InfoPopup.scss'
import { FC } from 'react';
import { Popup } from '../Popup/Popup';

interface InfoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoPopup: FC<InfoPopupProps> = ({ isOpen, onClose }) => {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
    >
      <>
        <div className="popup__info-container">
          <div className="popup__img"></div>
          <h2 className="popup__title section__title">Спасибо за заказ</h2>
          <p className="popup__text">Наш менеджер свяжется с вами в ближайшее время</p>
        </div>
      </>
    </Popup>
  )
}