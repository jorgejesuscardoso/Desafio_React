//testa register
import { vi } from "vitest";
import renderWithRouter from "./helper/renderWithRouter";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import { fireEvent, screen } from "@testing-library/react";
import Register from "../components/register/Register";

test('register', async () => {
  const fetchResolved = {
    json: async () => ({ error: 'not found' }),
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><Register /></Provider>);

  const email = screen.getByTestId('email');
  const password = screen.getByTestId('password');
  const confirmPassword = screen.getByTestId('confirm-password');

  fireEvent.change(email, { target: { value: 'test@mail.com' } });
  fireEvent.change(password, { target: { value: '123456' } });
  fireEvent.change(confirmPassword, { target: { value: '123456' } });
  fireEvent.click(screen.getByTestId('next-btn'));
  fireEvent.click(screen.getByTestId('name'));
  fireEvent.change(screen.getByTestId('name'), { target: { value: 'test' } });
  fireEvent.change(screen.getByTestId('lastname'), { target: { value: 'test' } });
  fireEvent.change(screen.getByTestId('age'), { target: { value: '18' } });
  fireEvent.click(screen.getByTestId('next-btn'));
  fireEvent.click(screen.getByTestId('back-btn'));
  fireEvent.click(screen.getByTestId('next-btn'));
  fireEvent.click(screen.getByTestId('street'));
  fireEvent.change(screen.getByTestId('street'), { target: { value: 'test' } });
  fireEvent.change(screen.getByTestId('number'), { target: { value: '123' } });
  fireEvent.change(screen.getByTestId('district'), { target: { value: 'test' } });
  fireEvent.change(screen.getByTestId('city'), { target: { value: 'test' } });
  fireEvent.change(screen.getByTestId('state'), { target: { value: 'test' } });
  fireEvent.click(screen.getByTestId('country'));
  fireEvent.change(screen.getByTestId('country'), { target: { value: 'test' } });
  fireEvent.click(screen.getByTestId('next-btn'));
  fireEvent.click(screen.getByTestId('thumb'));
  fireEvent.change(screen.getByTestId('thumb'), { target: { value: 'test' } });
  fireEvent.click(screen.getByTestId('btn-register'));
  fireEvent.click(screen.getByTestId('loginBtn'));
  expect(window.location.pathname).toBe('/login');
  expect(mockeFetch).not.toHaveBeenCalledTimes(1);
});
