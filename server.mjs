// Static file server for the WEBTREX one-page site, wired to Compute via the service declaration.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import service from './service.mjs';

const html = await readFile(new URL('./index.html', import.meta.url));

const server = createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    res.end();
    return;
  }
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': html.length,
  });
  if (req.method === 'HEAD') {
    res.end();
  } else {
    res.end(html);
  }
});

server.listen(service.port(), '0.0.0.0');
