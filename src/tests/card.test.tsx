// Testa o componente Card

import renderWithRouter from "./helper/renderWithRouter";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import mockData from "./mock/mockData";
import NewsCard from "../components/card/Card";
import { MemoryRouter } from "react-router-dom";

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

  expect(mockeFetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?page=1&qtd=50');
});

test('Testa o componente Card', async () => {

  const item = {
    id: 1,
    titulo: 'Título da notícia',
    link: 'http://www.exemple.com',
    imagens: '{"image_intro":"images/agenciadenoticias/ibge/2023_11/caravaMA_THUMB.jpg"}',
    introducao: 'Introdução da notícia',
    data_publicacao: '2023-11-20T12:00:00Z'
  };

  render(
    <Provider store={store}>
    <MemoryRouter>
      <NewsCard {...item} />
    </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText('Título da notícia')).toBeInTheDocument();
  expect(screen.getByText('Introdução da notícia')).toBeInTheDocument();
  expect(screen.getByTestId('ler-mais')).toBeInTheDocument();
  expect(screen.getByTestId('card-img')).toHaveAttribute(
    'src',
    'https://www.exemple.com/images/agenciadenoticias/ibge/2023_11/caravaMA_THUMB.jpg"'
  );

  screen.debug();
});