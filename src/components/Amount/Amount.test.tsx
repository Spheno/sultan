import { Amount } from './Amount';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const handleChangeAmount= jest.fn()

describe('Amount', () => {

  it('the counter does not decrement a number less than 1', () => {
  
    render(<Amount handleChangeAmount={handleChangeAmount} amountValue={2} />)
    const buttons = screen.getAllByRole('button')
    const input = screen.getByRole('spinbutton')
    fireEvent.click(buttons[0])
    expect(input).toHaveValue(1)
    fireEvent.click(buttons[0])
    expect(input).not.toHaveValue(0)
    fireEvent.click(buttons[0])
    expect(input).toHaveValue(1)
  })

  it('correctly sums the numbers', () => {
  
    render(<Amount handleChangeAmount={handleChangeAmount} amountValue={2} />)
    const buttons = screen.getAllByRole('button')
    const input = screen.getByRole('spinbutton')
    fireEvent.click(buttons[1])
    expect(input).toHaveValue(3)
    fireEvent.click(buttons[1])
    expect(input).toHaveValue(4)
  })
 
})