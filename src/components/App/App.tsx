import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Catalog } from '../Catalog/Catalog';
import { ProductCard } from '../ProductCard/ProductCard';
import { Basket } from '../Basket/Basket';
import { AdminPanel } from '../AdminPanel/AdminPanel';
import { InfoPopup } from '../InfoPopup/InfoPopup'
import { EditCardAdminPopup } from '../EditCardAdminPopup/EditCardAdminPopup'
import { AddCardAdminPopup } from '../AddCardAdminPopup/AddCardAdminPopup'

import product from '../../utils/model.json'
import { ICard } from '../../types/types';

function App() {

  const navigate = useNavigate()

  //************************************************************ */

  const [store, setStore] = useState(() => {
    const storeData = localStorage.getItem('store')
    let initialStore = storeData ? JSON.parse(storeData) : product;
    initialStore = initialStore.sort((a: ICard, b: ICard) => a.price - b.price);
    return initialStore
  })

  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
    if (store.length === 0) {
      setStore(product)
    }
  }, [JSON.stringify(store), store]);

  const handleAdminDeleteCard = (product: ICard) => {
    setStore(store.filter((el: ICard) => el.id !== product.id));
    setUserBasket(userBasket.filter((el: ICard) => el.id !== product.id))
  }

  //************************************************************ */

  const [selectedCard, setSelectedCard] = useState<ICard | null>(null);

  const handleCardClick = (card: ICard) => {
    navigate(`/catalog/product/${String(card.id)}`);
    setSelectedCard(card)
  };

  const [userBasket, setUserBasket] = useState(() => {
    const localData = localStorage.getItem('userBasket')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem("userBasket", JSON.stringify(userBasket));
  }, [JSON.stringify(userBasket)]);

  const handleAddProduct = (card: ICard) => {

    setUserBasket([card, ...userBasket])
  }

  const handleChangeProduct = (data: { value: number, id: number }) => {
    const change = userBasket.map((el: ICard) => {
      if (el.id === data.id) {
        el.quantity = data.value
      }
      return el
    })
    setUserBasket(change)
  }

  const handleDeleteProduct = (id: number) => {
    setUserBasket(userBasket.filter((el: ICard) => el.id !== id));
  }

  const handleOrdering = () => {
    setUserBasket([])
  }

  //**************************************************************** */
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState<boolean>(false);
  const [isEditCardAdminPopupOpen, setIsEditCardAdminPopupOpen] = useState<boolean>(false);
  const [isAddCardAdminPopupOpen, setIsAddCardAdminPopupOpen] = useState<boolean>(false);

  const handleOrderingClick = () => {
    setIsInfoPopupOpen(true);
  };

  const handleEditCardClick = () => {
    setIsEditCardAdminPopupOpen(true);
  };

  const handleAddCardClick = () => {
    setIsAddCardAdminPopupOpen(true);
  };

  const closePopup = () => {
    setIsInfoPopupOpen(false);
    setIsEditCardAdminPopupOpen(false);
    setIsAddCardAdminPopupOpen(false)
  };

  //******************************************************************** */

  const handleSort = (typeSort: number) => {

    if (typeSort === 0) {
      const sorted = store.sort((a: ICard, b: ICard) => a.price - b.price)
      return setStore([...sorted])

    }
    if (typeSort === 1) {
      const sorted = store.sort((a: ICard, b: ICard) => b.price - a.price)
      return setStore([...sorted])
    }

    if (typeSort === 2) {
      const sorted = store.sort((a: ICard, b: ICard) => {
        return a.title.localeCompare(b.title);
      });
      return setStore([...sorted])
    }

    if (typeSort === 3) {
      const sorted = store.sort((a: ICard, b: ICard) => {
        return b.title.localeCompare(a.title);
      });
      return setStore([...sorted])
    }

  }

  return (
    <>
      <Routes>

        <Route path="/" element={<Layout userBasket={userBasket} />}>

          <Route path="catalog" element={
            <Catalog
              products={store}
              onCardClick={handleCardClick}
              onButtonClick={handleAddProduct}
              userBasket={userBasket}
              handleSort={handleSort} />
          } />

          {selectedCard && <Route path="catalog/product/:productId?" element={
            <ProductCard
              product={selectedCard}
              onButtonClick={handleAddProduct} />
          } />}

          <Route path="basket" element={
            <Basket
              userBasket={userBasket}
              onChange={handleChangeProduct}
              onDelete={handleDeleteProduct}
              onOrdering={handleOrdering}
              onPopupOpen={handleOrderingClick}
            />
          } />

          <Route path="admin" element={
            <AdminPanel
              products={store}
              onDelete={handleAdminDeleteCard}
              onAdd={handleAddCardClick}
              onEdit={handleEditCardClick} />
          }
          />

        </Route>

      </Routes>

      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closePopup}
      />

      <EditCardAdminPopup
        isOpen={isEditCardAdminPopupOpen}
        onClose={closePopup}
      />

      <AddCardAdminPopup
        isOpen={isAddCardAdminPopupOpen}
        onClose={closePopup}
      />
    </>
  );

};

export default App;
