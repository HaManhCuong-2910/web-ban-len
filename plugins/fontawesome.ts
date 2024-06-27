// For Nuxt 3
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
// import "@/utils/loadingIndicator";
export default defineNuxtPlugin((nuxtApp) => {
  library.add(fas, fab, far);
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
