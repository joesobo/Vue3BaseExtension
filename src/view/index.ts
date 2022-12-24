import { createApp } from "vue"
import { createI18n } from "vue-i18n"
import App from "./App.vue"
/*
 * The i18n resources in the path specified in the plugin `include` option can be read
 * as vue-i18n optimized locale messages using the import syntax
 */
import en from "../locales/en.json"
import ja from "../locales/ja.json"

const i18n = createI18n({
	locale: "ja",
	messages: {
		en,
		ja,
	}
})

const app = createApp(App)
app.use(i18n).mount("#app")
