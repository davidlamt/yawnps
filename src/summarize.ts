import fetch from 'node-fetch';
import * as extractor from 'unfluff';

export const summarize = async ({ url }: { url: string }): Promise<void> => {
  try {
    const content = await getUrlContent(url);
    console.log(content);
  } catch (err) {
    console.error(err.message);
  }
};

const getUrlContent = async (url: string): Promise<string> => {
  let html: string;

  try {
    const response = await fetch(url);
    html = await response.text();
  } catch (err) {
    if (err?.code === 'ENOTFOUND') {
      throw new Error(`Cannot find ${url}`);
    }

    throw err;
  }

  const data = extractor(html);

  return data.text;
};
