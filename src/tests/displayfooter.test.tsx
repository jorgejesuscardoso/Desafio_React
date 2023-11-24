//testa menu footer

import { fireEvent, screen } from "@testing-library/react";
import renderWithRouter from "./helper/renderWithRouter";
import App from "../App";
import { Provider } from "react-redux";
import store from "../components/redux/store";

test('testa se o menu footer é renderizado', async () => {
  renderWithRouter( <Provider store={store}><App /></Provider> );
  const footerMenu = await screen.findByTestId('footer-filter-btn');

  fireEvent.click(footerMenu);

  const gencienciaBtn = await screen.findByTestId('geoscience-btn');
  const socialBtn = await screen.findByTestId('social-btn');
  const dateBtn = await screen.findByTestId('date-btn');
  const ibgeBtn = await screen.findByTestId('ibge-btn');
  const economyBtn = await screen.findByTestId('economy-btn');

  fireEvent.click(gencienciaBtn);

  expect(window.scrollY).toBe(0);

  fireEvent.click(socialBtn);
  expect(window.scrollY).toBe(0);
  fireEvent.click(ibgeBtn);
  expect(window.scrollY).toBe(0);
  fireEvent.click(economyBtn);
  expect(window.scrollY).toBe(0);
  
  fireEvent.click(dateBtn);
  const formDate = await screen.findByTestId('form-date');
  const closeBtn = await screen.findByTestId('close-btn');

  fireEvent.click(closeBtn);

  expect(formDate).not.toBeInTheDocument();

  expect(gencienciaBtn).toBeInTheDocument();
  expect(socialBtn).toBeInTheDocument();
  expect(dateBtn).toBeInTheDocument();
  expect(ibgeBtn).toBeInTheDocument();
  expect(economyBtn).toBeInTheDocument();
  expect(footerMenu).toBeInTheDocument();
});
