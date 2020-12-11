import fetch from 'node-fetch';
import * as extractor from 'unfluff';

export const summarize = async ({ url }: { url: string }): Promise<void> => {
  const content = await getUrlContent(url);
  console.log(content);
};

const getUrlContent = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const html = await response.text();
  const data = extractor(html);

  return data.text;
};
