// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId('count');
  expect(initialCount.textContent).toBe('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const increment = screen.getByText('+');
  userEvent.click(increment);
  expect(screen.getByTestId('count').textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrement = screen.getByText('-');
  userEvent.click(decrement);
  expect(screen.getByTestId('count').textContent).toBe('-1');
});
