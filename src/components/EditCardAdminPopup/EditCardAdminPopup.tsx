import './EditCardAdminPopup.scss'
import { useEffect, FC, MouseEvent } from 'react';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';

interface EditCardAdminPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EditCardAdminPopup: FC<EditCardAdminPopupProps> = ({ isOpen, onClose }) => {

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
    >

      <p>Попап изменения данных карточки продукта админом</p>

    </PopupWithForm>
  )
}