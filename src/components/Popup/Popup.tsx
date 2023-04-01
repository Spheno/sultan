import './Popup.scss'
import { useEffect, FC, MouseEvent } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Popup: FC<PopupProps> = ({ isOpen, onClose }) => {

  useEffect(() => {
    if (!isOpen) return
    document.addEventListener('keyup', (e) => { handlerClosePopupOnEsc(e) });
    return () => {
      document.removeEventListener('keyup', (e) => { handlerClosePopupOnEsc(e) });
    }

  }, [isOpen, onClose])

  function handlerClosePopupOnEsc(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      onClose();
    }
  }

  function handlerClosePopupOverlayClick(e: MouseEvent) {
    const target = e.target as Element;
    if (target.classList.contains('popup')) {
      onClose();
    }
  }

  return (
    <div>
      <article className={`popup ${isOpen && 'popup_is-opened'}`} onClick={(e) => handlerClosePopupOverlayClick(e)} >
        <div className="popup__field">
          <div className="popup__img"></div>
          <h2 className="popup__title section__title">Спасибо за заказ</h2>
          <p className="popup__text">Наш менеджер свяжется с вами в ближайшее время</p>
          <button className="popup__button-close" aria-label="close" type="button" onClick={() => onClose()}></button>
        </div>
      </article>
    </div>
  )
}