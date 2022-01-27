import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import el from 'element-ui/src/locale/lang/el'

// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user) {
      axios.get('/authentication').then(resp => {
        // 调用后端authentication接口后，应该校验resp.data，而不是resp。
        // 因为我发现虽然关闭浏览器后，JSESSIONID被清除了，后端也能在preHandler里面拦截发现没登录并返回false，
        // 但是给前端的响应还是200，resp本身不为空。而resp.data为空。
        // 所以不应该只校验resp，而应该校验resp.data是否为空。
        // 此外，这里校验完resp.data为空后，应该加上跳转到前端login页面的逻辑
        if (resp.data) {
          next()
        } else {
          next({
            path: 'login',
            query: {redirect: to.fullPath}
          })
        }
      })
    } else {
      next({
        path: 'login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
