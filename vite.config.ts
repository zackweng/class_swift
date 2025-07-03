import path from 'path'
import { fileURLToPath } from 'url'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      terminal: true,
      overlay: {
        initialIsOpen: false,
      },
      typescript: {
        root: './',
        buildMode: true,
      },
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint ./**/*.{ts,tsx}',
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@ui': path.resolve(__dirname, './src/ui/index.ts'),
    },
  },
})
