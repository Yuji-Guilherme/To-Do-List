import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
  alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@components',  replacement: path.resolve(__dirname, './src/components') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@templates', replacement: path.resolve(__dirname, './src/templates') },
      { find: '@functions', replacement: path.resolve(__dirname, './src/functions') },
    ]
  },
  plugins: [react()],
});