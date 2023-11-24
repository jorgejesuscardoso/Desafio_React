//testa header

import { vi } from "vitest";
import mockData from "./mock/mockData";
import renderWithRouter from "./helper/renderWithRouter";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import App from "../App";
import { fireEvent, screen } from "@testing-library/react";

test('header', async () => {
  const fetchResolved = {
    json: async () => mockData,
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><App /></Provider>);

  const btnLogo = screen.getByTestId('btn-logo');
  expect(btnLogo).toBeInTheDocument();
  fireEvent.click(btnLogo!);

  expect(window.location.pathname).toBe('/');

  const profileBtn = screen.getByTestId('profile-btn');
  expect(profileBtn).toBeInTheDocument();
  fireEvent.click(profileBtn!);

  expect(window.location.pathname).toBe('/profile');
  expect(await screen.findByText('Você não está logado, faça login ou cadastre-se já!')).toBeInTheDocument();

  const homeBtn = screen.getByTestId('home-btn');
  fireEvent.click(homeBtn!);

  expect(window.location.pathname).toBe('/');
  expect(screen.getByText('Você está deslogado!')).toBeInTheDocument();

  const searchBtn = screen.getByTestId('search-btn-icon');
  fireEvent.click(searchBtn);
  
  const inputsearch = screen.getByTestId('search-input');
  fireEvent.change(inputsearch, { target: { value: 'covid' } });
  expect(inputsearch).toHaveValue('covid');

  fireEvent.click(screen.getByTestId('search-btn'));
  expect(mockeFetch).toHaveBeenCalled();

  const closeSearchBtn = screen.getByTestId('close-search-btn');
  fireEvent.click(closeSearchBtn);
  expect(screen.queryByTestId('search-input')).not.toBeInTheDocument();

  const menuBtn = screen.getByTestId('menu-btn-icon');
  fireEvent.click(menuBtn);
  expect(screen.getByTestId('menu-header')).toBeInTheDocument();

  fireEvent.click(screen.getByTestId('login-btn-header'));
  expect(window.location.pathname).toBe('/login');

  fireEvent.click(screen.getByTestId('home-btn'));
  expect(window.location.pathname).toBe('/');

  afterEach(() => {
    mockeFetch.mockClear();
  }
  );

});

test('header2', async () => {
  const fetchResolved = {
    json: async () => mockData,
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><App /></Provider>);

  const btnMenu = await screen.findByTestId('menu-btn-icon');
  fireEvent.click(btnMenu!);
  const menuheader = await screen.findByTestId('menu-header');
  expect(menuheader).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('register-btn-header'));
  expect(window.location.pathname).toBe('/register');
  expect(screen.getByTestId('form-register')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('home-btn'));
  expect(window.location.pathname).toBe('/');

  afterEach(() => {
    mockeFetch.mockClear();
  }
  );

});

test('header3', async () => {
  const fetchResolved = {
    json: async () => mockData,
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><App /></Provider>);

  const btnMenu = await screen.findByTestId('menu-btn-icon');
  fireEvent.click(btnMenu!);
  const menuheader = await screen.findByTestId('menu-header');
  expect(menuheader).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('about-btn-header'));
  expect(window.location.pathname).toBe('/about');

  afterEach(() => {
    mockeFetch.mockClear();
  }
  );

});
