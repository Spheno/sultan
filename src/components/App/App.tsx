import './App.scss';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Layout } from '../Layout/Layout';
import { Catalog } from '../Catalog/Catalog';
import { ProductCard } from '../ProductCard/ProductCard';
import { Basket } from '../Basket/Basket';
import { AdminPanel } from '../AdminPanel/AdminPanel';
import { InfoPopup } from '../InfoPopup/InfoPopup';
import { EditCardAdminPopup } from '../EditCardAdminPopup/EditCardAdminPopup';
import { AddCardAdminPopup } from '../AddCardAdminPopup/AddCardAdminPopup';
import { sortFunction } from '../../utils/sortFunction';
import product from '../../utils/model.json';
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

  const [visibleStore, setVisibleStore] = useState<ICard[]>(store)

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

  const handleAdminAddCard = (card: ICard) => {
    setStore([card, ...store])
  }

  const handleEditCardClick = (card: ICard) => {
    setSelectedCard(card)
    setIsEditCardAdminPopupOpen(true);
  };

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

  const handleChangeQuantityProduct = (data: { value: number, id: number }) => {
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

  const handleAddCardClick = () => {
    setIsAddCardAdminPopupOpen(true);
  };

  const closePopup = () => {
    setIsInfoPopupOpen(false);
    setIsEditCardAdminPopupOpen(false);
    setIsAddCardAdminPopupOpen(false)
  };

  //*  Сортрировка и фильры  */

  const [sortType, setSortType] = useState<number>(0)
  const [typeCareSelected, setTypeCareSelected] = useState<number | null>(null)

  const handleSort = (typeSort: number) => {
    setVisibleStore(sortFunction(visibleStore, typeSort)!)
    setSortType(typeSort)
  }

  const handleTypeCareFilter = (selected: number) => {
    setTypeCareSelected(selected);

    const filtered: ICard[] = [];
    store.forEach((product: ICard) => {
      if (product.typeCare.includes(selected)) {
        filtered.push(product);
      }
    })
      setVisibleStore(sortFunction(filtered, sortType)!)
  }

  const handlePriceFilter = (minPrice: number, maxPrice: number) => {
    const filtered: ICard[] = [];
    store.forEach((product: ICard) => {
      if (product.price > minPrice && product.price < maxPrice) {
        filtered.push(product);
      }
    })
    if (filtered.length > 0) {
      setVisibleStore(sortFunction(filtered, sortType)!)
    }
  }

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const handleSelectedManufacturers = (selected: string) => {
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(selected)) {
        return prevSelected.filter((val) => val !== selected);
      } else {
        return [...prevSelected, selected];
      }
    });
  }

  const handleSearchManufacturers = (SearchQuery: string) => {
    const filtered: ICard[] = store.filter((product: ICard) => product.manufacturer === SearchQuery)
    if (filtered.length > 0) {
      setVisibleStore(sortFunction(filtered, sortType)!)
    }
  }

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  const handleMinPrice = (num: number) => {
    setMinPrice(num)
  }

  const handleMaxPrice = (num: number) => {
    setMaxPrice(num)
  }

  const allFiltres = ({ min: minPrice, max: maxPrice, checkbox: selectedCheckboxes }: { min: number, max: number, checkbox?: string[] }) => {

    if ((selectedCheckboxes ?? []).length === 0) {
      handlePriceFilter(minPrice, maxPrice)
    }
    if ((selectedCheckboxes ?? []).length !== 0) {
      const filtered: ICard[] = store.filter((product: ICard) => (selectedCheckboxes ?? []).includes(product.manufacturer))
      if (filtered.length > 1) {
        const filtred2: ICard[] = []
        filtered.forEach((product: ICard) => {
          if (product.price > minPrice && product.price < maxPrice) {
            filtred2.push(product);
          }
          if (filtred2.length > 0) {
            setVisibleStore(sortFunction(filtred2, sortType)!)
          }
        })
      }
    }
  }

  const filtred = () => {
    allFiltres({ min: minPrice, max: maxPrice, checkbox: selectedCheckboxes })
  }

  const handleDeletedFilters = () => {
    setVisibleStore(store)
  }

  const handleAdminEditCard = (card: ICard) => {
    console.log(card)

    store.forEach((el: ICard) => {
      if (el.id === card.id) {
        el.title = card.title;
        el.subtitle = card.subtitle;
        el.url = card.url;
        el.size = card.size;
        el.barcode = card.barcode;
        el.manufacturer = card.manufacturer;
        el.brand = card.brand;
        el.price = card.price;
        el.description = card.description;
        el.sizeType = card.sizeType;
        el.typeCare = card.typeCare;
      }
    })
    setStore(store)
    setSelectedCard(null)
  }

  return (
    <>
      <Routes>

        <Route path="/" element={<Layout userBasket={userBasket} onSearchBrand={handleSearchManufacturers} />}>

          <Route path="catalog" element={
            <Catalog
              products={visibleStore}
              onCardClick={handleCardClick}
              onButtonClick={handleAddProduct}
              userBasket={userBasket}
              handleSort={handleSort}
              onSelect={handleTypeCareFilter}
              typeCareSelected={typeCareSelected}
              onPriceFilter={handlePriceFilter}
              onCheckboxFilter={handleSelectedManufacturers}
              onSearchBrand={handleSearchManufacturers}
              onMin={handleMinPrice}
              onMax={handleMaxPrice}
              filtred={filtred}
              onDeletedFilters={handleDeletedFilters}
              store={store}
            />
          } />

          {selectedCard && <Route path="catalog/product/:productId?" element={
            <ProductCard
              product={selectedCard}
              onButtonClick={handleAddProduct} />
          } />}

          <Route path="basket" element={
            <Basket
              userBasket={userBasket}
              onChange={handleChangeQuantityProduct}
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
              onEdit={handleEditCardClick}
            />
          }
          />

        </Route>

      </Routes>

      <InfoPopup
        isOpen={isInfoPopupOpen}
        onClose={closePopup}
      />

      {selectedCard && <EditCardAdminPopup
        isOpen={isEditCardAdminPopupOpen}
        onClose={closePopup}
        selectedCard={selectedCard}
        onAddCard={handleAdminEditCard}
      />}

      <AddCardAdminPopup
        isOpen={isAddCardAdminPopupOpen}
        onClose={closePopup}
        onAddCard={handleAdminAddCard}

      />
    </>
  );

};

export default App;
