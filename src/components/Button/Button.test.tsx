import Button from './Button';
import { render, screen } from '@testing-library/react';

describe('<Button />', () => {

  describe('given some text as children', () => {
    it('renders the right text', () => {
      render(<Button children='Confirmar' />);

      const button = screen.getByRole('button');

      expect(button).toHaveTextContent('Confirmar');
    });
  });
});