import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Use @ for src path
    },
  },
  server: {
    open: true,           // Automatically open browser on dev server start
    port: 5173,           // Default is 5173, can be changed
  },
  build: {
    outDir: 'dist',       // Where to output the build
    sourcemap: true,      // Helpful for debugging production issues
  },
})
