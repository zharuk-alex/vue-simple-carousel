import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
const path = require('path')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/_variables.scss";
          @import "./src/scss/_mixins.scss";
          @import "./src/scss/_fonts.scss";
          @import "./src/scss/main.scss";
        `,
        plugins: [
          autoprefixer
        ],
      }
    }
  },

  base: process.env.NODE_ENV === 'production' ? '/vue-simple-carousel/' : '/',
})
