import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
  tailwindcss()
  ],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'https://ai-exam-note-server.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  headers: {
    'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    'Cross-Origin-Embedder-Policy': 'unsafe-none',
  }
})
