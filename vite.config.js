import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
const isDemo = process.env.VITE_BUILD_TARGET === "demo";

export default defineConfig({
  base: isDemo ? './' : undefined,
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      outputDir: "dist",
      skipDiagnostics: false,
    })],
  optimizeDeps: {
    include: ["vue3-markdown-it"]
  },
  build: isDemo
    ? {
      outDir: "dist-demo",
      emptyOutDir: true,
    }
    : {
      lib: {
        entry: "src/entry.ts",
        name: "TvUi",
        fileName: format => `tv-ui.${format}.js`,
        formats: ["es", "cjs"]
      },
      rollupOptions: {
        external: ["vue"],
        output: {
          globals: {
            vue: "Vue"
          },
          exports: 'named'
        }
      }
    },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
});
