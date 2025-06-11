import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({ dts: true }),
    AutoImport({
      dts: true,
      imports: ['vue'],
    }),
  ],
  server: {
    host: true,
    open: true,
  },
})
