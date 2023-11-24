// Teste pagina de login

import { fireEvent, screen } from "@testing-library/react";
import Login from "../components/login/Login";
import renderWithRouter from "./helper/renderWithRouter";

test('Teste pagina de login', async () => {
  const { getByTestId } = renderWithRouter(<Login />);

  const email = getByTestId('email-input');
  const password = getByTestId('password-input');
  const button = getByTestId('login-submit-btn');

  fireEvent.change(email, { target: { value: 'teste@mail.com' } });
  fireEvent.change(password, { target: { value: '123456' } });
  fireEvent.click(button);

  expect(screen.findByText('carregando...')).toBe(true);

  expect(email).toBeInTheDocument();
  expect(password).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  screen.debug();
}
);