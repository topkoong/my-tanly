import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import postcss from './postcss.config.cjs';

export default defineConfig({
  plugins: [svelte(), tsconfigPaths()],
  css: {
    postcss,
  },
});
