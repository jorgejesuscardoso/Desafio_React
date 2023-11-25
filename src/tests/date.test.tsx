//testa display de data

import { Provider } from "react-redux";
import store from "../components/redux/store";
import { vi } from "vitest";
import mockData from "./mock/mockData";
import renderWithRouter from "./helper/renderWithRouter";
import App from "../App";
import moment from "moment";
import { fireEvent, render, screen } from "@testing-library/react";
import DateTimeDisplay from "../components/dateTime/DateTImeDIsplay";

test('testa display de data', () => {
  const fetchResolved = {
    json: async () => mockData,
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><App /></Provider>);

    const today = moment().format('DD/MM/YYYY HH:mm:ss');
  const oneHourAgo = moment().subtract(1, 'hours').format('DD/MM/YYYY HH:mm:ss');
  const oneDayAgo = moment().subtract(1, 'days').format('DD/MM/YYYY HH:mm:ss');
  const oneWeekAgo = moment().subtract(1, 'weeks').format('DD/MM/YYYY HH:mm:ss');
  const oneMonthAgo = moment().subtract(1, 'months').format('DD/MM/YYYY HH:mm:ss');
  const oneYearAgo = moment().subtract(1, 'years').format('DD/MM/YYYY HH:mm:ss');

  const { getByText } = render(
      <Provider store={store}>
        <div>
            <DateTimeDisplay dateTime={today} />
            <DateTimeDisplay dateTime={oneHourAgo} />
            <DateTimeDisplay dateTime={oneDayAgo} />
            <DateTimeDisplay dateTime={oneWeekAgo} />
            <DateTimeDisplay dateTime={oneMonthAgo} />
            <DateTimeDisplay dateTime={oneYearAgo} />
        </div>
      </Provider>
  );

  expect(getByText('publicado agora')).toBeInTheDocument();
  expect(getByText(/Publicado há: 1 horas? atrás/)).toBeInTheDocument();
  expect(getByText(/Publicado há: 1 dias? atrás/)).toBeInTheDocument();

  expect(mockeFetch).toHaveBeenCalled();
});

test('testa input de pesquisa', async () => {
  const fetchResolved = {
    json: async () => mockData,
  } as Response;

  const mockeFetch = vi.spyOn(global, 'fetch')
    .mockResolvedValue(fetchResolved);
    renderWithRouter(<Provider store={store}><App /></Provider>);

  const filterFooter = await screen.findByTestId('footer-filter-btn');
  fireEvent.click(filterFooter);

  const dateFilter = await screen.findByTestId('date-btn');
  fireEvent.click(dateFilter);

  const initialDate = await screen.findByTestId('search-initial-date');
  const finalDate = await screen.findByTestId('search-final-date');

  fireEvent.change(initialDate, { target: { value: '21-09-2022' } });
  fireEvent.change(finalDate, { target: { value: '20-08-2022' } });
  
  const searchBtn = await screen.findByTestId('search-btn');
  fireEvent.click(searchBtn);

  expect(mockeFetch).toHaveBeenCalled();
  expect(initialDate && finalDate).not.toBeInTheDocument();


  expect(mockeFetch).toHaveBeenCalled();
});