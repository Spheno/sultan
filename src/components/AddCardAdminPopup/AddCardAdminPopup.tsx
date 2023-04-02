import './AddCardAdminPopup.scss'
import { useEffect, FC, MouseEvent } from 'react';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';

interface AddCardAdminPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCardAdminPopup: FC<AddCardAdminPopupProps> = ({ isOpen, onClose }) => {

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
    >

      <p>Попап создания новой карточки админом</p>

    </PopupWithForm>
  )
}