const { defineConfig } = require("vite")
const react = require("@vitejs/plugin-react")

module.exports = defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "build",
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
})
