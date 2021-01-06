import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
import { getUrlContent } from '../src/summarize';

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockedFetch = mocked(fetch);

describe('getUrlContent()', () => {
  const testUrl = 'https://google.com';

  it('relays error from fetch', async () => {
    const fetchError = new Error('bad fetch');
    mockedFetch.mockImplementation(
      () =>
        new Promise(() => {
          throw fetchError;
        })
    );

    await expect(getUrlContent(testUrl)).rejects.toThrow(fetchError);
  });
});
