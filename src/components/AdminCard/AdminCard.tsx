import './AdminCard.scss';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

import { ICard } from '../../types/types';

interface AdminCardProps {
  product: ICard;
  onDelete: (product: ICard) => void;
  onEdit: (product: ICard) => void;
}

export const AdminCard: FC<AdminCardProps> = ({ product, onDelete, onEdit }) => {

  return (
  
        <li className="admin-panel__card">
          <div className="admin-panel__card-info">
            <p className="admin-panel__card-id">ID {product.id}</p>
            <p className="admin-panel__card-title">{product.title} {product.subtitle}</p>
          </div>
          <div className="admin-panel__card-buttons-container">
            <button className="admin-panel__card-button button__edit" aria-label="Редактировать" type="button" onClick={() => {onEdit(product)}} ></button>
            <button className="admin-panel__card-button button__delete" aria-label="Удалить" type="button" onClick={() => {onDelete(product)}}></button>
          </div>
        </li>
      
  )
}