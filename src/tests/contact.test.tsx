// Testa a página de contato
import { fireEvent, screen } from "@testing-library/react";
import renderWithRouter from "./helper/renderWithRouter"
import Contact from "../components/contact/Contact";

test('should render the contact page', () => {
  renderWithRouter(<Contact />);
  const home = screen.getByTestId('home-btn');
  const contact = screen.getByText('Contatos');
  expect(home).toBeInTheDocument();
  expect(contact).toBeInTheDocument();
  fireEvent.click(home);
  expect(window.location.pathname).toBe('/');
});