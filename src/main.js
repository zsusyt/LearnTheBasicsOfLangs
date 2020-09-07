import Vue from 'vue'
import App from './App.vue'
import "prismjs";
import "prismjs/themes/prism-funky.css";
import "prismjs/components/prism-scss.min";
import "prismjs/plugins/autolinker/prism-autolinker.min";
import "prismjs/plugins/autolinker/prism-autolinker.css";
import Prism from "vue-prism-component";
Vue.component("prism", Prism);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
