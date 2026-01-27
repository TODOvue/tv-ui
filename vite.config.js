import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDemo = process.env.VITE_BUILD_TARGET === "demo";

const localTvDemoPath = path.resolve(__dirname, '../tv-demo');
const useLocalAliases = fs.existsSync(localTvDemoPath);

const aliases = {};
if (useLocalAliases) {
  Object.assign(aliases, {
    '@todovue/tv-demo/demo': path.resolve(__dirname, '../tv-demo/src/demo/Demo.vue'),
    '@todovue/tv-demo/style.css': path.resolve(__dirname, '../tv-demo/src/style.scss'),
    '@todovue/tv-demo': path.resolve(__dirname, '../tv-demo/src/entry.ts')
  });
}

export default defineConfig({
  base: isDemo ? './' : undefined,
  resolve: {
    alias: aliases
  },
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
