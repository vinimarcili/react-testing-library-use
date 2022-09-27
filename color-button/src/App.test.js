import { fireEvent, render, screen } from '@testing-library/react'
import App, { replaceCamelWithSpaces } from './App'

test('button has correct initial color', () => {
  render(<App />)
  const button = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  expect(button).toHaveStyle({ backgroundColor: 'red' })
})

test('button turns blue when clicked', () => {
  render(<App />)
  const button = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  expect(button).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })
  expect(button.textContent).toBe('Change to Medium Violet Red')
})

test('initial conditions', () => {
  render(<App />)
  const button = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  expect(button).toBeEnabled()
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  expect(checkbox).not.toBeChecked()
})

test('clicking checkbox disables button on first click and enables on second click', () => {
  render(<App />)
  const button = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  fireEvent.click(checkbox)
  expect(button).toBeDisabled()
  fireEvent.click(checkbox)
  expect(button).toBeEnabled()
})

test('disabled button has gray background and reverts to color', () => {
  render(<App />)
  const button = screen.getByRole('button', {
    name: 'Change to Midnight Blue',
  })
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'red' })
  fireEvent.click(button)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'gray' })
  fireEvent.click(checkbox)
  expect(button).toHaveStyle({ backgroundColor: 'blue' })
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})
