import { render, screen } from '@testing-library/react';
import Home from './home.js';

describe('component tests', () => {

  test('renders logo image', () => {
    render(<Home />);
    const logoImage = screen.getByAltText('A solid black wizard holding a staff in one hand and summoning an object with the other');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute('src')).toBe('BlackLogoNoBackground.png');
  });
})
