import Vue from 'vue'
import App from './App'
import router from './router/index'
import MintUI from 'mint-ui'
import ElementUI from 'element-ui'
import BootstrapVue from 'bootstrap-vue' // bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.css' // 加入字体图标库
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
  from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
