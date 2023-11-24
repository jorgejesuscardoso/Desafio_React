/* eslint-disable @typescript-eslint/no-explicit-any */

import { MemoryRouter } from "react-router-dom";
import EditProfile from "../components/profile/Edit_Profile";
import { fireEvent, render } from "@testing-library/react";
import { mockLocalStorage } from "./profile.test";

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
        <EditProfile />
      </MemoryRouter>
    );

  fireEvent.click(getByTestId('show-pass'));
  expect(getByText('Esconder')).toBeInTheDocument();
  fireEvent.click(getByTestId('show-pass'));
  expect(getByText('Mostrar')).toBeInTheDocument();

  fireEvent.click(getByTestId('name'));
  fireEvent.change(getByTestId('name'), { target: { value: 'Usuário Teste2' } }); 
  fireEvent.click(getByTestId('lastname'));
  fireEvent.change(getByTestId('lastname'), { target: { value: 'Teste2' } });
  fireEvent.click(getByTestId('age'));
  fireEvent.change(getByTestId('age'), { target: { value: '19' } });
  fireEvent.click(getByTestId('email'));
  fireEvent.change(getByTestId('email'), { target: { value: 'teste2' } });
  fireEvent.click(getByTestId('password'));
  fireEvent.change(getByTestId('password'), { target: { value: '123456' } });
  fireEvent.click(getByTestId('confirm-password'));
  fireEvent.change(getByTestId('confirm-password'), { target: { value: '123456' } });
  fireEvent.change(getByTestId('rua'), { target: { value: 'Rua Teste' } });
  fireEvent.change(getByTestId('numero'), { target: { value: '123' } });
  fireEvent.change(getByTestId('bairro'), { target: { value: 'Teste' } });
  fireEvent.change(getByTestId('cidade'), { target: { value: 'Teste' } });
  fireEvent.change(getByTestId('estado'), { target: { value: 'Teste' } });
  fireEvent.change(getByTestId('pais'), { target: { value: 'Teste' } });
  fireEvent.click(getByTestId('save-btn'));
  fireEvent.click(getByText('Cancelar'));
  expect(window.location.pathname).toBe('/');
  cleanupStorage();
  });
});

