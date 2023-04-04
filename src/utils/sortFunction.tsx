import { ICard } from '../types/types';

export function sortFunction(store: ICard[], typeSort: number) {

  if (typeSort === 0) {/*сортировка по цене по возрастанию */
    const sorted = store.sort((a: ICard, b: ICard) => a.price - b.price)
    return [...sorted]

  }
  if (typeSort === 1) {/*сортировка по цене по убыванию */
    const sorted = store.sort((a: ICard, b: ICard) => b.price - a.price)
    return [...sorted]
  }

  if (typeSort === 2) {/*сортировка по алфавиту по возрастанию:  Z -> A, Я -> А */
    const sorted = store.sort((a: ICard, b: ICard) => {
      return a.title.localeCompare(b.title);
    });
    return [...sorted]
  }

  if (typeSort === 3) {/*сортировка по алфавиту по убыванию: А -> Я, A -> Z */
    const sorted = store.sort((a: ICard, b: ICard) => {
      return b.title.localeCompare(a.title);
    });
    return [...sorted]
  }

}