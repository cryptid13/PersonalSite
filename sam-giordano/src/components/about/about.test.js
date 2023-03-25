import { render, screen } from '@testing-library/react';
import About from './about.js';

describe('component tests', () => {

  test('renders headshot image', () => {
    render(<About />);
    const logoImage = screen.getByAltText('A man with brown hair, square-rim glasses, and full brown beard with blue skies and white clouds in the background');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute('src')).toBe('Headshot.jpg');
  });
})
