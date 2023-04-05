import './SortTypeCare.scss';
import { useState, useEffect, FC } from 'react';
import { TYPES_CARE } from '../../utils/constants'

interface SortTypeCareProps {
  onSelect: (selected: number) => void;
  typeCareSelected: number | null;
}

export const SortTypeCare: FC<SortTypeCareProps> = ({ onSelect, typeCareSelected }) => {

 const [selectedSort, setSelectedSort] = useState<number | null>(typeCareSelected)

  useEffect(() => {
    setSelectedSort(typeCareSelected)
  }, [typeCareSelected])

  function handelSelectedSort(i: number): void {
    setSelectedSort(i)
    onSelect(i)
  }

  return (

    <ul className="menu__type-care">

      {TYPES_CARE.map((el, index) => (
        <>
          <li key={index} className={`menu__type-care-paragraph ${selectedSort === index && 'menu__type-care_active'}`} onClick={() => handelSelectedSort(index)}>{el}</li>
          <span className="menu__type-care-span"></span>
        </>
      )
      )}

    </ul>

  )
}