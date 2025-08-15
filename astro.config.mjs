// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Force Bun runtime
  vite: {
    define: {
      'process.env.BUN': 'true'
    }
  }
});
