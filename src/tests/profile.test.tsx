/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../components/profile/Profile';
import { vi } from 'vitest';


// Função para simular um usuário logado
export const mockLocalStorage = () => {
  const originalStorage = Storage.prototype.getItem;
  Storage.prototype.getItem = vi.fn().mockImplementation((key) => {
    if (key === 'connected') {
      return JSON.stringify({ connected: true, id: 1 });
    } else if (key === 'users') {
      return JSON.stringify([{ id: 1, nome: 'Usuário Teste', email: 'teste', senha: '123456', foto: '', idade: '18', sobrenome: 'Teste', endereco: { rua: 'teste', numero: '123', bairro: 'teste', cidade: 'teste', estado: 'teste', pais: 'teste' }}]);
    }
    return null;
  });

  return () => {
    Storage.prototype.getItem = originalStorage;
  };
};

describe('Profile Component', () => {
  let cleanupStorage: any;

  beforeEach(() => {
    cleanupStorage = mockLocalStorage();
  });

  afterEach(() => {
    cleanupStorage();
  });

  test('Renderiza corretamente para usuário logado', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

   expect(getByText('Seu perfil')).toBeInTheDocument();
   fireEvent.click(getByTestId('edit-profile-btn'));
   fireEvent.click(getByTestId('delete-profile-btn'));
   fireEvent.click(getByTestId('logout-btn'));
   fireEvent.click(getByText('Inicio'));
  cleanupStorage();
  });
});

test('Renderiza corretamente para usuário não logado', () => {
  
  const { getByText } = render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  expect(getByText('Você não está logado, faça login ou cadastre-se já!')).toBeInTheDocument();
  fireEvent.click(getByText('Inicio'));
  fireEvent.click(getByText('Login'));
  fireEvent.click(getByText('Criar'));
  
});
