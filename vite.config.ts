import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"

module.exports = defineConfig({
	plugins: [vue({ customElement: true })],
	build: {
		lib: {
			entry: "./src/view/index.ts",
			formats: ["es", "cjs"],
			fileName: (format) => `index.${format}.js`
		},
		emptyOutDir: false,
		outDir: "dist/compiled"
	}
})
