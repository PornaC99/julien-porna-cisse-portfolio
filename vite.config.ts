import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'upload-portrait-middleware',
        configureServer(server) {
          server.middlewares.use('/api/upload-portrait', (req, res) => {
            if (req.method === 'POST') {
              const chunks: Buffer[] = [];
              req.on('data', (chunk) => chunks.push(chunk));
              req.on('end', () => {
                try {
                  const buffer = Buffer.concat(chunks);
                  const target = path.resolve(process.cwd(), 'public/images/julien-porna-cisse.jpg');
                  fs.mkdirSync(path.dirname(target), { recursive: true });
                  fs.writeFileSync(target, buffer);
                  res.writeHead(200, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ success: true, path: '/images/julien-porna-cisse.jpg' }));
                } catch (e) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: String(e) }));
                }
              });
            } else {
              res.writeHead(405).end();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
