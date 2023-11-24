// testa componentes do footerMenu

import { Provider } from "react-redux";
import Home from "../components/home/Home";
import renderWithRouter from "./helper/renderWithRouter";
import store from "../components/redux/store";
import { fireEvent, screen } from "@testing-library/react";

test('Testa componentes do footerMenu', () => {
  renderWithRouter(<Provider store={store}><Home /></Provider> );
  const footbtn = screen.getByTestId('footer-filter-btn');
  expect(footbtn).toBeInTheDocument();
  fireEvent.click(footbtn);
  const footmenu = screen.getByTestId('footer-home-menu');
  expect(footmenu).toBeInTheDocument();
});