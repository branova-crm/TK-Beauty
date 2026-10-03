/**
 * Production entry for Dokploy Nixpacks / node start.
 * Serves Astro `dist/` on PORT and proxies /api/* to send-api on API_PORT.
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(__dirname, '..', 'dist');
const PORT = Number(process.env.PORT || 3000);
const API_PORT = Number(process.env.API_PORT || 3001);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

if (!fs.existsSync(DIST)) {
  console.error(`[prod-start] dist/ missing at ${DIST} – run npm run build first`);
  process.exit(1);
}

const api = spawn(process.execPath, [path.join(__dirname, 'send-api.mjs')], {
  stdio: 'inherit',
  env: { ...process.env, API_PORT: String(API_PORT) },
});

api.on('exit', (code, signal) => {
  console.error(`[prod-start] send-api exited code=${code} signal=${signal}`);
});

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': type });
  fs.createReadStream(filePath).pipe(res);
}

function proxyApi(req, res) {
  const headers = { ...req.headers, host: `127.0.0.1:${API_PORT}` };
  const proxyReq = http.request(
    {
      hostname: '127.0.0.1',
      port: API_PORT,
      path: req.url,
      method: req.method,
      headers,
    },
    (proxyRes) => {
      res.writeHead(proxyRes.statusCode || 502, proxyRes.headers);
      proxyRes.pipe(res);
    },
  );
  proxyReq.on('error', (err) => {
    console.error('[prod-start] api proxy error:', err.message);
    if (!res.headersSent) {
      res.writeHead(502, { 'Content-Type': 'application/json' });
    }
    res.end(JSON.stringify({ error: 'API unavailable' }));
  });
  req.pipe(proxyReq);
}

const server = http.createServer((req, res) => {
  const url = req.url || '/';

  if (url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('ok\n');
    return;
  }

  if (url.startsWith('/api/')) {
    proxyApi(req, res);
    return;
  }

  const clean = decodeURIComponent(url.split('?')[0]);
  let rel = clean === '/' ? '/index.html' : clean;
  let filePath = path.join(DIST, rel);

  if (!filePath.startsWith(DIST)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (!fs.existsSync(filePath) && !path.extname(rel)) {
    const asDir = path.join(DIST, rel, 'index.html');
    if (fs.existsSync(asDir)) filePath = asDir;
  }

  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Not found');
    return;
  }

  sendFile(res, filePath);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`[prod-start] static+proxy on 0.0.0.0:${PORT} | api :${API_PORT}`);
});

function shutdown() {
  try {
    api.kill('SIGTERM');
  } catch {
    /* ignore */
  }
  server.close(() => process.exit(0));
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
