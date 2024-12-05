import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@Itypes', replacement: fileURLToPath(new URL('./src/types/index.ts', import.meta.url)) },
      { find: '@constants', replacement: fileURLToPath(new URL('./src/constants/index.ts', import.meta.url)) },
      { find: '@components', replacement: fileURLToPath(new URL('./src/components/index.ts', import.meta.url)) },
      {find:  '@stores', replacement: fileURLToPath(new URL('./src/store/counter.ts', import.meta.url))},
    ],
  },
})
