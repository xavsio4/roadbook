import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import VueHtmlToPaper from "./plugins/VueHtmlToPaper";

let app = createApp(App);

app.use(VueHtmlToPaper);

app.mount("#app");
