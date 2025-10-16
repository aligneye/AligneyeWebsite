import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: './', // 👈 crucial for Amplify deployment
  server: {
    host: true,
    port: process.env.VITE_PORT || 5173,
  },
})
