import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'prompt-engineering-platform' with your GitHub repo name for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/prompt-engineering-platform/',
})
