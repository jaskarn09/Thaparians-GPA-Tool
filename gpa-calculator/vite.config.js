import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // 👇 This line is crucial to support React Router on refresh or direct route access
    historyApiFallback: true,
  },
});
