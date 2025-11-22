import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy `/api` to the Google Apps Script web app to avoid CORS in development.
      // In `.env` set `VITE_SHEETS_ENDPOINT=/api` for local testing.
      '/api': {
        target: 'https://script.google.com/macros/s/AKfycby95lG3MD43g69xACTCuGHH96_R2pVU40lMnl5inrdr6SAUMVa1-OUyKVWvFdpMnZl_/exec',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
