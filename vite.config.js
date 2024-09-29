import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Marque o módulo como externo
      external: ['@hookform/resolvers/yup']
    }
  }
})
