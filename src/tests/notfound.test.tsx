//testa notfound
import { vi } from "vitest";
import renderWithRouter from "./helper/renderWithRouter";
import { Provider } from "react-redux";
import store from "../components/redux/store";
import { fireEvent, screen } from "@testing-library/react";
import NotFound from "../components/notFound/NotFound";

test('notfound', async () => {
  const fetchResolved = {
    json: async () => ({ error: 'not found' }),
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><NotFound /></Provider>);

  expect(await screen.findByText('Erro 404')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('home-btn'));
  expect(window.location.pathname).toBe('/');

  afterEach(() => {
    mockeFetch.mockClear();
  }
  );
});
