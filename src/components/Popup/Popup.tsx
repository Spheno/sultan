import './Popup.scss'
import { useEffect, FC, MouseEvent, ReactNode } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Popup: FC<PopupProps> = ({ isOpen, onClose, children }) => {

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

          {children}

          <button className="popup__button-close" aria-label="close" type="button" onClick={() => onClose()}></button>
        </div>
      </article>
    </div>
  )
}