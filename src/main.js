import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
