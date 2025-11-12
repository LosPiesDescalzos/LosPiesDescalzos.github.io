import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/lospiesdescalzos.github.io/',
  plugins: [react()],
  resolve: {
    alias: {
      '@recipes': path.resolve(__dirname, './src/resipes-data')
    }
  }
})