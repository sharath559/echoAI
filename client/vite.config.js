import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open:true,
    port:3000,
    proxy: {
      "/pss/api/v1": {
        target:"http://localhost:16000",
        changeOrigin:true
      }
    }
  }
})
