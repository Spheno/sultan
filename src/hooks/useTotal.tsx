import { useState, useEffect } from 'react';
import { ICard } from '../types/types';

export function useTotal(arr: ICard[]) {

  const [totalCost, setTotalCost] = useState<number>(0)

  useEffect(() => {
    const handelTotalCost = () => {
      let sum = arr.reduce((accumulator, currentValue) => { return (accumulator + (currentValue.price * (currentValue.quantity || 1))); }, 0)
      setTotalCost(Number(sum.toFixed(2)))
    }
    handelTotalCost()
  }, [arr])

  return totalCost
}