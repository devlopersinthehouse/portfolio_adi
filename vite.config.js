import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,              // important
    port: 5173,
    strictPort: true,
    allowedHosts: true,      // ⚠️ CHANGE THIS (not 'all')
  },

  preview: {
    host: true,
    allowedHosts: true
  },

  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'icons': ['lucide-react'],
        }
      }
    }
  }
})