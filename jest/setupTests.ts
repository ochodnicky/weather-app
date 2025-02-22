import '@testing-library/react-native/extend-expect';

import {server} from './mocks/server';
import {testQueryClient} from './utils';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  testQueryClient.clear();
});

afterAll(() => {
  server.close();
});
