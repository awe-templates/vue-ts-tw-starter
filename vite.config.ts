import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  server: {
    port: 3000,
  },

  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
