import { fireEvent, render, screen } from '@testing-library/react';
import AvailableTimes, { updateTimes, initializeTimes } from './components/AvailableTimes';;
import Main from './components/Main';
import BookingForm from './components/BookingForm';

test('renders form submission button', () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = ['19:00', '20:00']; // Mock times for select input

  render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submit={mockSubmit} />);
  const buttonElement = screen.getByRole('button', { name: /Make your reservation/i });
  expect(buttonElement).toBeInTheDocument();
});

test('test that initializeTimes() returns a non empty array', () => {
  const initialTimes = initializeTimes()
  expect(initialTimes.length).toBeGreaterThan(0);
})

test('test that array is not empty after calling updateTimes()', () => {
  const updatedTimes = updateTimes([],new Date('2024-09-14'))
  expect(updatedTimes.length).toBeGreaterThan(0);
})

test('test that user can submit form', () => {
  jest.spyOn(console, 'log').mockImplementation(() => {});

  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = ['19:00', '20:00']; // Mock times for select input

  render(<BookingForm availableTimes={availableTimes} dispatch={mockDispatch} submit={mockSubmit} />);

  fireEvent.change(screen.getByTestId('firstname'), {target: {value: 'Reidar'}})
  fireEvent.change(screen.getByTestId('lastname'), {target: {value: 'Reidarson'}})
  fireEvent.change(screen.getByTestId('date'), {target: {value: '19-03-2030'}})
  fireEvent.change(screen.getByTestId('time'), {target: {value: '19:00'}})
  fireEvent.change(screen.getByTestId('guests', {target: {value: 1}}))
  fireEvent.change(screen.getByTestId('occasion'), {target: {value: 'Birthday'}})
  fireEvent.click(screen.getByTestId('submit-button'))

  expect(mockSubmit).toHaveBeenCalledWith({
    firstname: 'Reidar',
    lastname: 'Reidarson',
    date: '',
    time: '19:00',
    guests: 1,
    occasion: 'Birthday'
  })
})
