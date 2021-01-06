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

export const getUrlContent = async (url: string): Promise<string> => {
  let data: { text: string };
  let html: string;

  try {
    const response = await fetch(url);
    html = await response.text();
    data = extractor(html);
  } catch (err) {
    if (err?.code === 'ENOTFOUND') {
      throw new Error(`Cannot find ${url}`);
    }

    throw err;
  }

  return data.text;
};
