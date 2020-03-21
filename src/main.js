import Vue from 'vue';
import Landing from './views/Landing.vue';
import VueAnalytics from 'vue-analytics';

import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-161526517-1'
})

const routes = {
  '/landing': Landing,
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || Landing
    }
  },
  render(h) { return h(this.ViewComponent) },
}).$mount('#app')
