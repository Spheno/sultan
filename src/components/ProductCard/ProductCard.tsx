import './ProductCard.scss';
import { useState, FC } from 'react';
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs'
import { PriceList } from '../PriceList/PriceList'
import { Amount } from '../Amount/Amount';
import { ICard } from '../../types/types';
import { TYPES_CARE } from '../../utils/constants'

interface ProductCardProps {
  product: ICard;
  onButtonClick: (card: ICard) => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onButtonClick }) => {

  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false)
  const [isCharacteristicsOpen, setIsCharacteristicsOpen] = useState<boolean>(false)

  function openDescription(): void {
    setIsDescriptionOpen(!isDescriptionOpen)
  }

  function openCharacteristicsList(): void {
    setIsCharacteristicsOpen(!isCharacteristicsOpen)
  }

  const [amountValue, setAmountValue] = useState<number>(1);

  const handleChangeAmount = (value: number) => {
    setAmountValue(value)
  };

  if (!product) {
    return null;
  }

  return (
    <>
      <main className="main">

        <BreadCrumbs
          addres={`${product.title} ${product.subtitle}`}
          location={'Гигиена и уход'}
          to={'/catalog'}
        />

        <section className="product-card">

          <div className="product-card__img-container">
            <img className="product-card__img" alt={product.title} src={product.url} />
          </div>

          <div className="product-card__info">

            <p className="product-card__status">В наличии</p>

            <h3 className="product-card__title">{product.title} <span>{product.subtitle}</span></h3>

            <div className="card__type-weight">
              <div className={`card__weight ${product.sizeType === 'weight' ? `card__weight_weight` : `card__weight_volume`}`}></div>
              <p className="card__weight-text">{product.size}</p>
            </div>

            <div className="product-card__buttons">

              <p className="product-card__price">{product.price} ₸</p>

              <Amount handleChangeAmount={handleChangeAmount} amountValue={amountValue} />

              <button 
              className={`${product.inBasket ? 'product-card__button_disabled' : 'product-card__button'}`} aria-label="Добавить в корзину" type="button" 
              disabled={product.inBasket ? true : false} onClick={() => {onButtonClick({ ...product, quantity: amountValue }); product.inBasket = true} }>{product.inBasket ? 'В корзине' : 'В корзину'}</button>

              <button className="product-card__share" aria-label="Поделиться" type="button"></button>

              <div className="product-card__special">
                <p className="product-card__special-text">При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области</p>
              </div>

              <PriceList />

            </div>

            <div className="product-card__specification-container">
              <p className="card__specification">Производитель: <span>{product.manufacturer}</span></p>
              <p className="card__specification">Бренд: <span>{product.brand}</span></p>
              <p className="card__specification">Штрихкод: <span>{product.barcode}</span></p>
              <p className="card__specification">Тип ухода: <span>{product.typeCare.map(index => TYPES_CARE[index])}</span></p>
            </div>

            <h4 className="product-card__subtitle product-card__subtitle_description" onClick={openDescription}>
              Описание <span className={`menu__arrow product-card__arrow ${isDescriptionOpen ? 'arrow-open' : ''}`}></span></h4>

            <p className={`product-card__description ${isDescriptionOpen ? 'open' : 'close'}`}>
              {product.description}
            </p>

            <span className="product-card__span"></span>

            <h4 className="product-card__subtitle product-card__subtitle_characteristics" onClick={openCharacteristicsList}>
              Характеристики <span className={`menu__arrow product-card__arrow ${isCharacteristicsOpen ? 'arrow-open' : ''}`}></span></h4>

            <div className={`product-card__characteristics-container ${isCharacteristicsOpen ? 'open' : 'close'}`}>
              <p className="card__specification">Назначение: <span>{product.typeCare.map(index => TYPES_CARE[index])}</span></p>
              <p className="card__specification">Тип: <span >{product.title}</span></p>
              <p className="card__specification">Производитель: <span >{product.manufacturer}</span></p>
              <p className="card__specification">Бренд: <span>{product.brand}</span></p>
              <p className="card__specification">Артикул: <span >{product.barcode}</span></p>
              <p className="card__specification">Штрихкод: <span >{product.barcode}</span></p>
              <p className="card__specification">Вес: <span>{product.size}</span></p>
              <p className="card__specification">Объем: <span>{product.size}</span></p>
              <p className="card__specification">Количество в коробке: <span>{product.size}</span></p>
            </div>

          </div>

        </section>

      </main>
    </>
  )
}