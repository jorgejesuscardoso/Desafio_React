import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

function renderWithRouter(component: JSX.Element) {
  return {
  ...render( component, { wrapper: BrowserRouter })
  }
}

export default renderWithRouter;
