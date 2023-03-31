import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Catalog } from '../Catalog/Catalog';
import { ProductCard } from '../ProductCard/ProductCard';
import { Basket } from '../Basket/Basket';

import product from '../../utils/model.json'
import { ICard } from '../../types/types';

function App() {

  const navigate = useNavigate()

  const products: ICard[] = product;

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


  return (
    <>
      <Routes>

        <Route path="/" element={<Layout userBasket={userBasket} />}>

          <Route path="catalog" element={
            <Catalog
              products={products}
              onCardClick={handleCardClick}
              onButtonClick={handleAddProduct}
              userBasket={userBasket} />
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
              onDelete = {handleDeleteProduct}
            />
          } />

        </Route>

      </Routes>
    </>
  );

};

export default App;
