// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

// bootstrap-vue 报错兼容代码
let originalVueComponent = Vue.component
Vue.component = function (name, definition) {
  if (Array.isArray(definition.components) && definition.components.length === 1) {
    definition.components = {[name]: definition.components[0]}
  }
  originalVueComponent.apply(this, [name, definition])
}
// bootstrap-vue 报错兼容代码
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(ElementUI)

Vue.component = originalVueComponent
Vue.config.productionTip = false

	
const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})
/* eslint-disable no-new */
// const routes = [{
//   path: '/first',
//   component: first
// },
// {
//   path: '/enterLeave',
//   component: enterLeave
// },
// {
//   path: '/wage',
//   component: wage
// }
// ];
// const router = new VueRouter({
//   routes,
// });
const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  render: h => h(App)
})
