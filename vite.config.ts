import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tsconfigPaths(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": "/src",
      "@widget": "/src/widget",
      "@layout": "/src/widget/layout",
      "@router": "/src/router"
    }
  }
})
