import './PopupWithForm.scss'
import { useEffect, FC, MouseEvent, ReactNode } from 'react';
import { Popup } from '../Popup/Popup';

interface PopupWithFormProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const PopupWithForm: FC<PopupWithFormProps> = ({ isOpen, onClose, children }) => {

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
    >
      {children}

    </Popup>
  )
}