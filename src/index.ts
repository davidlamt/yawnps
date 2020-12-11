import { summarize } from './summarize';

const [, , url] = process.argv;

try {
  if (!url) {
    throw new Error('Expected usage: yawnps [url]');
  }

  summarize({ url });
} catch (err) {
  console.error(err.message);
}
