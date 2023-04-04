import './EditCardAdminPopup.scss'
import { useEffect, FC, MouseEvent } from 'react';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Form } from '../Form/Form';
import { ICard } from '../../types/types';

interface EditCardAdminPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCard: ICard;
  onAddCard: (card: ICard) => void;
}

export const EditCardAdminPopup: FC<EditCardAdminPopupProps> = ({ isOpen, onClose, selectedCard, onAddCard }) => {

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
    >

<Form onClose={onClose} selectedCard={selectedCard} onAddCard={onAddCard}/>

    </PopupWithForm>
  )
}