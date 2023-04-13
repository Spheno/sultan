import { Basket } from './Basket';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ICard } from '../../types/types';
import { MemoryRouter } from 'react-router-dom';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

const onChange = jest.fn()
const onDelete = jest.fn()
const onOrdering = jest.fn()
const onPopupOpen = jest.fn()


describe('Basket', () => {

  it('if there is a product, it is displayed', () => {
    const userBasket: ICard[] = [{
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
    }]
    render(<MemoryRouter basename="/">
      <Basket userBasket={userBasket} onChange={onChange} onDelete={onDelete} onOrdering={onOrdering} onPopupOpen={onPopupOpen} />
    </MemoryRouter>)
    expect(screen.getByText('BioMio BIO-SOAP')).toBeInTheDocument()
  })

  it('if there is no product then "cart is empty', () => {
    const userBasket: ICard[] = []

    render(<MemoryRouter basename="/">
      <Basket userBasket={userBasket} onChange={onChange} onDelete={onDelete} onOrdering={onOrdering} onPopupOpen={onPopupOpen} />
    </MemoryRouter>)
    expect(screen.getByText('Корзина пуста')).toBeInTheDocument()
  })
})