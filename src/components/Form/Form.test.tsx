import { Form } from './Form';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { ICard } from '../../types/types';
import '@testing-library/jest-dom/extend-expect';

const selectedCard: ICard = {
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
  quantity: 3
}

const onClose = jest.fn()
const onSubmit = jest.fn()

describe('Form', () => {

  it('if the numeric input is invalid', () => {
    render(<Form onClose={onClose} onSubmit={onSubmit} selectedCard={undefined} isOpen={true} title={'Создать новую карту'} buttonText={'Создать'} formId={'add'} />)
    const inputs = screen.getAllByRole('textbox')
    userEvent.type(inputs[4], 'abcabcabcabc1')
    expect(inputs[4]).toBeInvalid()
    expect(screen.getByText('Constraints not satisfied')).toBeInTheDocument()
  })

  it('if there is a selectedCard then the inputs are full', () => {
    render(<Form onClose={onClose} onSubmit={onSubmit} selectedCard={selectedCard} isOpen={true} title={'Создать новую карту'} buttonText={'Создать'} formId={'add'} />)
    const inputs = screen.getAllByRole('textbox')
    expect(inputs[4]).toHaveValue(`${4604049097548}`)
    expect(inputs[0]).toBeValid()
    expect(inputs[1]).toBeValid()
    expect(inputs[2]).toBeValid()
    expect(inputs[3]).toBeValid()
    expect(inputs[5]).toBeValid()
    expect(inputs[6]).toBeValid()
    expect(inputs[7]).toBeValid()
    expect(inputs[8]).toBeValid()
  })

  it('if there is a selectedCard then the form is valid', () => {
    render(<Form onClose={onClose} onSubmit={onSubmit} selectedCard={selectedCard} isOpen={true} title={'Создать новую карту'} buttonText={'Создать'} formId={'add'} />)    
    const form = screen.getByRole('form');
    expect(form).toBeValid()
  })

})