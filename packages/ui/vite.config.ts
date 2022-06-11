import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ insertTypesEntry: true }),
    libCss(),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: 'src/index.ts',
      name: 'UiLibrary',
      formats: ['es', 'umd'],
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['clsx', 'react', 'react-dom'],
      output: {
        globals: {
          clsx: 'clsx',
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
