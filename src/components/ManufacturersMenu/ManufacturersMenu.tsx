import './ManufacturersMenu.scss';
import { useState, FC, ChangeEvent, useEffect, Dispatch, SetStateAction } from 'react';
import { IManufacturer, ICard } from '../../types/types';

interface ManufacturersMenuProps {
  onCheckboxFilter: (selectedCheckboxes: string) => void;
  store: ICard[];
  isOffFiltres: boolean;
  setIsOffFiltres: Dispatch<SetStateAction<boolean>>;
  selectedCheckboxes: string[],
  setSelectedCheckboxes: Dispatch<SetStateAction<string[]>>,
}

export const ManufacturersMenu: FC<ManufacturersMenuProps> = ({ onCheckboxFilter, store, isOffFiltres, setIsOffFiltres, selectedCheckboxes, setSelectedCheckboxes }) => {

  const manufacturers: IManufacturer[] = store.reduce((acc: IManufacturer[], current: ICard) => {
    const existing: IManufacturer | undefined = acc.find((manufacturer) => manufacturer.name === current.manufacturer);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ name: current.manufacturer, count: 1 });
    }
    return acc;
  }, []);

  const [showAll, setShowAll] = useState<boolean>(false);

  const handleSelectedCheckboxes = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onCheckboxFilter(value)
  };

  useEffect(() => {
    if (isOffFiltres) {
      setSelectedCheckboxes([])
      setIsOffFiltres(false)
    }
  }, [isOffFiltres, setSelectedCheckboxes, setIsOffFiltres])


  return (
    <>
      {manufacturers.slice(0, 4).map((manufacturer, i) => (
        <label key={i} className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox"
            value={manufacturer.name}
            checked={selectedCheckboxes.includes(manufacturer.name)}
            onChange={(e) => { handleSelectedCheckboxes(e); }}
          />
          {manufacturer.name} <span className="aside__checkbox-span">({manufacturer.count})</span>
        </label>
      ))}
      {showAll && manufacturers.slice(4).map((manufacturer, i) => (
        <label key={i} className="aside__checkbox-label">
          <input className="aside__checkbox" type="checkbox"
            value={manufacturer.name}
            checked={selectedCheckboxes.includes(manufacturer.name)}
            onChange={(e) => { handleSelectedCheckboxes(e) }} />
          {manufacturer.name} <span className="aside__checkbox-span">({manufacturer.count})</span>
        </label>
      ))}

      <button className="aside__manufacturer-button aside__button"
        type="button" aria-label="Показать все" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Скрыть" : "Показать все"} <span className={`menu__arrow aside__button_arrow ${showAll && 'arrow-open'}`}> </span></button>
    </>
  )
}