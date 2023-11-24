import mockData from './mock/mockData';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import store from '../components/redux/store';
import { screen } from '@testing-library/react';
import renderWithRouter from './helper/renderWithRouter';
import App from '../App';

// Testa a função que retorna os dados da API
describe('Teste da função que retorna os dados da API', () => {
  it('Retorna os dados da API', async () => {
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

    expect(mockeFetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?page=1&qtd=10');
    screen.debug();
  });
});
