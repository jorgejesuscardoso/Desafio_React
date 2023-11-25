import mockData from './mock/mockData';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import store from '../components/redux/store';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';

it('Testa se a API é chamada', async () => {
  const fetchResolved = {
    json: async () => mockData,
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><App /></Provider>);
    
  const header = screen.getByRole('banner');
  expect(header).toBeInTheDocument();
  const logo = screen.getByAltText('Logo');
  expect(logo).toBeInTheDocument();

  const h3 = await screen.findByRole('heading', { level: 3, name: /Ler mais/i });
  expect(h3).toBeInTheDocument();
  expect(mockeFetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?page=1&qtd=12');
  screen.debug();
});
