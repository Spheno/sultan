import './AdminPanel.scss';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { AdminCard } from '../AdminCard/AdminCard';

import { ICard } from '../../types/types';

interface AdminPanelProps {
  products: ICard[];
  onDelete: (product: ICard) => void;
  onAdd: () => void;
  onEdit: () => void;
  // inBasket: boolean;
  // onCardClick: (card: ICard) => void;
  // onButtonClick: (card: ICard) => void;
}

export const AdminPanel: FC<AdminPanelProps> = ({ products, onDelete, onAdd, onEdit }) => {

  return (
    <section className="admin-panel">

      <button className="admin-panel__button" aria-label="Добавить" type="button" onClick={() => {onAdd()}}>Добавить товар</button>

      <ul className="admin-panel__cards">

        {products.map(product =>
          <AdminCard
            key={product.id}
            product={product}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}
      </ul>

    </section>
  )
}