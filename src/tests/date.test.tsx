//testa display de data

import { Provider } from "react-redux";
import store from "../components/redux/store";
import { vi } from "vitest";
import mockData from "./mock/mockData";
import renderWithRouter from "./helper/renderWithRouter";
import App from "../App";
import moment from "moment";
import { render } from "@testing-library/react";
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
    <div>
      <DateTimeDisplay dateTime={today} />
      <DateTimeDisplay dateTime={oneHourAgo} />
      <DateTimeDisplay dateTime={oneDayAgo} />
      <DateTimeDisplay dateTime={oneWeekAgo} />
      <DateTimeDisplay dateTime={oneMonthAgo} />
      <DateTimeDisplay dateTime={oneYearAgo} />
    </div>
  );

  expect(getByText('publicado agora')).toBeInTheDocument();
  expect(getByText(/Publicado há: 1 horas? atrás/)).toBeInTheDocument();
  expect(getByText(/Publicado há: 1 dias? atrás/)).toBeInTheDocument();

  expect(mockeFetch).toHaveBeenCalled();
});