import './Amount.scss';
import { useState, FC, useEffect } from 'react';

interface AmountProps {
  handleChangeAmount: (value: number) => void;
  amountValue: number;
}

export const Amount:FC<AmountProps> = ({ handleChangeAmount, amountValue }) => {

  const [value, setValue] = useState<number>(amountValue);

  const handleDecrease = () => {
    if (value > 1) {
      setValue(value - 1);
    } else {
      setValue(1)
    }
  };

  const handleIncrease = () => {
    setValue(value + 1);
  };

  useEffect(() => {
    handleChangeAmount(value)
  }, [value]);

  return (
    <div className="product-card__amount-container">
      <button className="product-card__button-amount product-card__button_minus" aria-label="Меньше" type="button" onClick={handleDecrease}>-</button>
      <input className="product-card__input" type='number' value={value} onChange={(event) => setValue(Number(event.target.value))}></input>
      <button className="product-card__button-amount product-card__button_plus" aria-label="Больше" type="button" onClick={handleIncrease}>+</button>
    </div>
  )
}