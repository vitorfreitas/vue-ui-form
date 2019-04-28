import Vue from 'vue';
import VueFlip from 'vue-flip';
import App from './App.vue';

Vue.use(VueFlip);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
