// Teste pagina de login

import { fireEvent, screen } from "@testing-library/react";
import Login from "../components/login/Login";
import renderWithRouter from "./helper/renderWithRouter";
import { vi } from "vitest";

test('Teste pagina de login', async () => {
  const { getByTestId } = renderWithRouter(<Login />);

  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const button = getByTestId('login-submit-btn');

  fireEvent.change(email, { target: { value: 'teste@mail.com' } });
  fireEvent.change(password, { target: { value: '123456' } });
  fireEvent.click(button);
  const erroLogin = await screen.findByText('Usuário não encontrado!');

  
  expect(erroLogin).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(button).toBeInTheDocument();
 afterEach(() => {
    vi.clearAllMocks();
  }
);
}
);
test('Testa se muda de tela', async () => {
  renderWithRouter(<Login />);

  const criaConta = screen.getByTestId('register-btn')
  const backToHome = screen.getByText('Voltar ao início')
  expect(criaConta).toBeInTheDocument();
  expect(criaConta).toBeInTheDocument();
  fireEvent.click(backToHome);
  expect(window.location.pathname).toBe('/');
  fireEvent.click(criaConta);
  expect(window.location.pathname).toBe('/register');  
});