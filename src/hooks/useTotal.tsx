import { useState, useEffect } from 'react';
import { ICard } from '../types/types';

export function useTotal(arr: ICard[]) {

  const [totalCost, setTotalCost] = useState <number>(0)

  const handelTotalCost = () => {
    setTotalCost(arr.reduce((accumulator, currentValue) => {return accumulator + currentValue.price;}, 0))
  }

  useEffect(() => {
    handelTotalCost()
  }, arr)

  return totalCost
}
