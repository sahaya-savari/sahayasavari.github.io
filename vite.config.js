import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // GitHub Pages will serve at root domain
  build: {
    outDir: 'dist',
  },
  publicDir: 'public', // Ensures 404.html is copied to dist
})
