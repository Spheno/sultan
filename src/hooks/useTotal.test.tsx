import { useTotal } from './useTotal';
import { renderHook } from '@testing-library/react';
import { ICard } from '../types/types';

const card: ICard[] = [{
  id: 1001,
  title: "BioMio BIO-SOAP",
  url: "https://www.podrygka.ru//upload/iblock/966/966a27334c6c8e6907571c0b9a0963d1.jpg",
  sizeType: "weight",
  size: "90г",
  barcode: 4604049097548,
  manufacturer: "BioMio",
  brand: "BioMio",
  subtitle: "Экологичное туалетное мыло. Литсея и бергамот",
  price: 50,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
  typeCare: [0, 1, 2, 3, 6],
  quantity: 3,
},
{
  id: 1002,
  title: "BioMio BIO-SOAP",
  url: "https://www.podrygka.ru//upload/iblock/966/966a27334c6c8e6907571c0b9a0963d1.jpg",
  sizeType: "weight",
  size: "90г",
  barcode: 4604049097548,
  manufacturer: "BioMio",
  brand: "BioMio",
  subtitle: "Экологичное туалетное мыло. Литсея и бергамот",
  price: 60,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
  typeCare: [0, 1, 2, 3, 6],
  quantity: 2,
}]

describe('useTotal', () => {
  it('calculates total price correctly', () => {
    const { result } = renderHook(() => useTotal(card))
    expect(result.current).toBe(270)
    expect(result.current).not.toBe(271)
  })
})


