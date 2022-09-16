import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

import { createPinia } from "pinia";

loadFonts();

createApp(App).use(router).use(createPinia()).use(vuetify).mount("#app");
