import { render, screen } from '@testing-library/react';
import Links from './links.js';

describe('component tests', () => {

  test('renders map image', () => {
    render(<Links />);
    const logoImage = screen.getByAltText("A map of Berlin's U-Bahn (Untergrundbahn = subway) in 1970, when Germany and Berlin were divided");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.getAttribute('src')).toBe('BerlinUBahnSubwayMap1970_150x150.jpg');
  });
})
