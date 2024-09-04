// vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitest.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true, // enables global test functions like `describe`, `it`, etc.
    setupFiles: './setupTests.js', // path to your setup file if you have one
  },
});
