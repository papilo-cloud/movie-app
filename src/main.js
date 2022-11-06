import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
  })

new Vue({ 
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
 