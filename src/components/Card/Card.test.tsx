import { Card } from './Card';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ICard } from '../../types/types';
const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

const product: ICard = {
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
}

const onCardClick = jest.fn()
const onButtonClick = jest.fn()

describe('Cards', () => {

  it('button view if the product is in the cart', () => {
    render(<Card product={product} onCardClick={onCardClick} onButtonClick={onButtonClick} inBasket={true} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(screen.getByRole('button')).toHaveTextContent('В корзине')
  })

  it('button view if the product is not in the cart', () => {
    render(<Card product={product} onCardClick={onCardClick} onButtonClick={onButtonClick} inBasket={false} />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(screen.getByRole('button')).toHaveTextContent('В корзину')
  })

  it('snapshot', () => {
    const view = render(
    <Card product={product} onCardClick={onCardClick} onButtonClick={onButtonClick} inBasket={false} />
    )

    expect(view).toMatchSnapshot()
  })

})