import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/rgsig/',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
})
