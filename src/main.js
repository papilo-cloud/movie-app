import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueDragscroll from 'vue-dragscroll'
// Vue.use()

Vue.config.productionTip = false;

new Vue({
  router,
  VueDragscroll,
  store,
  render: (h) => h(App),
}).$mount("#app");
