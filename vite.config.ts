import vue from "@vitejs/plugin-vue"
import Icons from "unplugin-icons/vite"
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import { defineConfig } from "vite"

module.exports = defineConfig({
	plugins: [
		vue({ customElement: true }),
		Icons({
			autoInstall: true,
		}),
		VueI18nPlugin({ }),
	],
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
