import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })


export default defineConfig({
  plugins: [vue()],
  // 关键配置：打包后路径适配 GitHub Pages
  base: 'You',  // 比如你的仓库叫 my-intro，就写 /my-intro/
  build: {
    outDir: 'dist',  // 打包输出到 dist 文件夹
    assetsDir: 'assets'
  }
})