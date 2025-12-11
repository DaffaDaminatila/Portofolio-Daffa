import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portofolio-Daffa/",  // <--- GANTI JADI INI (Harus sama persis dengan nama Repo)
})