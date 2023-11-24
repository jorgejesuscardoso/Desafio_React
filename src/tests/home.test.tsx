// Testa o componente Home

import { fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import Home from "../components/home/Home";
import renderWithRouter from "./helper/renderWithRouter";

test('Testa o componente Home', () => {
  renderWithRouter(<Provider store={store}><Home /></Provider> );

  const filterBtn = screen.getByTestId('footer-filter-btn');
  const nextBtn = screen.getByTestId('next-btn');
  const prevbtn = screen.getByTestId('prev-btn');

  expect(filterBtn).toBeInTheDocument();

  fireEvent.click(filterBtn);
  
  const menufootr = screen.getByTestId('footer-home-menu');  
  expect(menufootr).toBeInTheDocument();
  
  fireEvent.click(prevbtn);
  expect(prevbtn).toBeInTheDocument();
  fireEvent.click(nextBtn);
  expect(nextBtn).toBeInTheDocument();
  expect(prevbtn).toHaveAttribute('disabled');

  
}
);

// Testa o componente TopFilterBtn

test('Testa o componente TopFilterBtn', async () => {
  renderWithRouter(<Provider store={store}><Home /></Provider> );

  const filterBtn = screen.getByTestId('filter-todos');
  const filterFavoritos = screen.getByTestId('filter-favoritos');
  const filterMarcados = screen.getByTestId('filter-marcados');
  const filterNoticias = screen.getByTestId('filter-noticias');
  const filterReleases = screen.getByTestId('filter-releases');

  expect(filterBtn).toBeInTheDocument();
  expect(filterFavoritos).toBeInTheDocument();
  expect(filterMarcados).toBeInTheDocument();
  expect(filterNoticias).toBeInTheDocument();
  expect(filterReleases).toBeInTheDocument();

  fireEvent.click(filterBtn);
  fireEvent.click(filterMarcados);
  fireEvent.click(filterNoticias);
  fireEvent.click(filterReleases);
  fireEvent.click(filterFavoritos);
  
  const reloadHome = screen.getByTestId('reload-home');
  expect(reloadHome).toBeInTheDocument();
  fireEvent.click(reloadHome);

  fireEvent.click(filterFavoritos);
});
