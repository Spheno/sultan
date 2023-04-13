import { Cards } from './Cards';
import { screen, render } from '@testing-library/react';
import { ICard } from '../../types/types';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

const products: ICard[] = [{
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

const onCardClick = jest.fn()
const onButtonClick = jest.fn()
const userBasket: ICard[] = []

describe('Cards', () => {

  it('outputs an array of cards to the page', () => {
    render(<Cards products={products} onCardClick={onCardClick} onButtonClick={onButtonClick} userBasket={userBasket} />)
    expect(screen.getAllByText('Экологичное туалетное мыло. Литсея и бергамот')).toHaveLength(2)
  })

})