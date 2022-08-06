import { defineConfig } from 'vite';
import postcss from './postcss.config.cjs';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  css: {
    postcss,
  },
});
