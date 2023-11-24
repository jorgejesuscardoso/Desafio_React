// Testa o componente Card

import renderWithRouter from "./helper/renderWithRouter";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import App from "../App";
import { fireEvent, screen } from "@testing-library/react";
import { vi } from "vitest";
import mockData from "./mock/mockData";

test('Testa o componente Card', async () => {
  const fetchResolved = {
    json: async () => mockData,
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><App /></Provider>);
    
  const lerMais = await screen.findByTestId('ler-mais');
  expect(lerMais).toBeInTheDocument();

  fireEvent.click(lerMais);
  expect(window.location.pathname).toBe('/');

  const favorite = await screen.findByTestId('favorite');
  expect(favorite).toBeInTheDocument();

  const favoriteIcon = await screen.findByTestId('favorite-icon');

  fireEvent.click(favorite);
  expect(favoriteIcon).toHaveAttribute('src', 'src/assets/liked.png');

  const mark = await screen.findByTestId('mark');
  expect(mark).toBeInTheDocument();

  const markIcon = await screen.findByTestId('mark-icon');
  
  fireEvent.click(mark);
  expect(markIcon).toHaveAttribute('src', 'src/assets/marked.png');

  const share = await screen.findByTestId('share');
  expect(share).toBeInTheDocument();

  const countShare = await screen.findByTestId('count-share');

  fireEvent.click(share);

  expect(countShare).toHaveTextContent('1');

  const cardimg = await screen.findByTestId('card-img');
  expect(cardimg).toBeInTheDocument();

  expect(cardimg).toBeInTheDocument();

  expect(mockeFetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?page=1&qtd=10');
});
