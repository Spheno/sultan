import { SortMenu } from './SortMenu';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {jest} from '@jest/globals'

const handleSort = jest.fn()

describe('SortMenu', () => {

  it('opens and closes when pressed', () => {

    render(<SortMenu handleSort={handleSort} />)
    const button = screen.getByTestId('toggle-button')
    const sortMenu = screen.getByTestId('toggle-ul')
    expect(sortMenu).toHaveClass('close')
    expect(button).toBeInTheDocument();
    fireEvent.click(button)
    expect(sortMenu).toHaveClass('open')
    fireEvent.click(button)
    expect(sortMenu).toHaveClass('close')
  })

})