import './AddCardAdminPopup.scss'
import { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { useFormWithValidation } from '../../hooks/useFormWithValidation'
import { Form } from '../Form/Form'
import { TYPES_CARE } from '../../utils/constants'
import { ICard } from '../../types/types';

interface AddCardAdminPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCard: (card: ICard) => void;
  
}

export const AddCardAdminPopup: FC<AddCardAdminPopupProps> = ({ isOpen, onClose, onAddCard }) => {

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
    >

      <Form onClose={onClose} onAddCard={onAddCard}/>

    </PopupWithForm>
  )
}