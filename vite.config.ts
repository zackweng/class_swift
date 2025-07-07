import path from 'path'
import { fileURLToPath } from 'url'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import svgr from 'vite-plugin-svgr'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  base: '/class_swift/',
  plugins: [
    react(),
    svgr(),
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
      '@assets': path.resolve(__dirname, './src/assets'),
      '@ui': path.resolve(__dirname, './src/ui/index.ts'),
    },
  },
})
