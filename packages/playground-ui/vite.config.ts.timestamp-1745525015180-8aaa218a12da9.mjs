// vite.config.ts
import react from "file:///Users/mfrachet/soft/mastra/node_modules/.pnpm/@vitejs+plugin-react@4.3.4_vite@5.4.15_@types+node@20.17.30_lightningcss@1.29.2_terser@5.39.0_/node_modules/@vitejs/plugin-react/dist/index.mjs";
import autoprefixer from "file:///Users/mfrachet/soft/mastra/node_modules/.pnpm/autoprefixer@10.4.21_postcss@8.5.3/node_modules/autoprefixer/lib/autoprefixer.js";
import { resolve } from "path";
import tailwindcss from "file:///Users/mfrachet/soft/mastra/node_modules/.pnpm/tailwindcss@3.4.17_ts-node@10.9.2_@swc+core@1.11.10_@swc+helpers@0.5.15__@types+node@20.17.30_typescript@5.8.2_/node_modules/tailwindcss/lib/index.js";
import { defineConfig } from "file:///Users/mfrachet/soft/mastra/node_modules/.pnpm/vite@5.4.15_@types+node@20.17.30_lightningcss@1.29.2_terser@5.39.0/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/mfrachet/soft/mastra/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.17.30_rollup@4.36.0_typescript@5.8.2_vite@5.4.15_@_a66326dd882149d27b50b5993dd3de1d/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///Users/mfrachet/soft/mastra/node_modules/.pnpm/vite-plugin-lib-inject-css@2.2.1_vite@5.4.15_@types+node@20.17.30_lightningcss@1.29.2_terser@5.39.0_/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import nodeExternals from "file:///Users/mfrachet/soft/mastra/node_modules/.pnpm/rollup-plugin-node-externals@8.0.0_rollup@4.36.0/node_modules/rollup-plugin-node-externals/dist/index.js";
var __vite_injected_original_dirname = "/Users/mfrachet/soft/mastra/packages/playground-ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    libInjectCss(),
    nodeExternals()
  ],
  resolve: {
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__vite_injected_original_dirname, "src/index.ts"),
        tokens: resolve(__vite_injected_original_dirname, "src/ds/tokens/index.ts")
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        return `${entryName}.${format}.js`;
      }
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: "esnext",
    // Leave minification up to applications.
    minify: false,
    rollupOptions: {
      external: ["motion/react"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWZyYWNoZXQvc29mdC9tYXN0cmEvcGFja2FnZXMvcGxheWdyb3VuZC11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21mcmFjaGV0L3NvZnQvbWFzdHJhL3BhY2thZ2VzL3BsYXlncm91bmQtdWkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21mcmFjaGV0L3NvZnQvbWFzdHJhL3BhY2thZ2VzL3BsYXlncm91bmQtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuaW1wb3J0IHsgbGliSW5qZWN0Q3NzIH0gZnJvbSAndml0ZS1wbHVnaW4tbGliLWluamVjdC1jc3MnO1xuaW1wb3J0IG5vZGVFeHRlcm5hbHMgZnJvbSAncm9sbHVwLXBsdWdpbi1ub2RlLWV4dGVybmFscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGR0cyh7XG4gICAgICBpbnNlcnRUeXBlc0VudHJ5OiB0cnVlLFxuICAgIH0pLFxuICAgIGxpYkluamVjdENzcygpLFxuICAgIG5vZGVFeHRlcm5hbHMoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MsIGF1dG9wcmVmaXhlcl0sXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiB7XG4gICAgICAgIGluZGV4OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgICB0b2tlbnM6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2RzL3Rva2Vucy9pbmRleC50cycpLFxuICAgICAgfSxcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCwgZW50cnlOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiBgJHtlbnRyeU5hbWV9LiR7Zm9ybWF0fS5qc2A7XG4gICAgICB9LFxuICAgIH0sXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIC8vIFJlZHVjZSBibG9hdCBmcm9tIGxlZ2FjeSBwb2x5ZmlsbHMuXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICAvLyBMZWF2ZSBtaW5pZmljYXRpb24gdXAgdG8gYXBwbGljYXRpb25zLlxuICAgIG1pbmlmeTogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsnbW90aW9uL3JlYWN0J10sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxPQUFPLFdBQVc7QUFDMVYsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8saUJBQWlCO0FBQ3hCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQVAxQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixJQUFJO0FBQUEsTUFDRixrQkFBa0I7QUFBQSxJQUNwQixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsYUFBYSxZQUFZO0FBQUEsSUFDckM7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxLQUFLO0FBQUEsTUFDSCxPQUFPO0FBQUEsUUFDTCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLFFBQ3hDLFFBQVEsUUFBUSxrQ0FBVyx3QkFBd0I7QUFBQSxNQUNyRDtBQUFBLE1BQ0EsU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxRQUFRLGNBQWM7QUFDL0IsZUFBTyxHQUFHLFNBQVMsSUFBSSxNQUFNO0FBQUEsTUFDL0I7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUE7QUFBQSxJQUVYLFFBQVE7QUFBQTtBQUFBLElBRVIsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLGNBQWM7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
