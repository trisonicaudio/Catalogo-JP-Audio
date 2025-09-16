import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/Catalogo-JP-Audio/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimizações de build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs em produção
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Separar chunks para melhor cache
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react'],
        },
      },
    },
    // Compressão e otimização
    cssCodeSplit: true,
    sourcemap: false, // Desabilitar sourcemaps em produção
    assetsInlineLimit: 4096, // Inline assets menores que 4kb
  },
  server: {
    // Configurações do servidor de desenvolvimento
    host: true,
    port: 5173,
  },
  // Otimizações de performance
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react'],
  },
})
