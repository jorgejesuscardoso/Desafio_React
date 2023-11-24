import { fireEvent, screen } from "@testing-library/react";
import About from "../components/about/About";
import renderWithRouter from "./helper/renderWithRouter";

// Testa pagina de about
describe('About page', () => {
  it('should render the about page', () => {
    renderWithRouter(<About />);
    const home = screen.getByTestId('home-btn');
    const top = screen.getByTestId('top-btn');
    fireEvent.click(top);
    expect(top).toBeInTheDocument();
    expect(screen.getByText('Sobre este projeto')).toBeInTheDocument();
    expect(window.scrollY).toBe(0);
    expect(home).toBeInTheDocument();
    fireEvent.click(home);
    expect(window.location.pathname).toBe('/');
  });
});