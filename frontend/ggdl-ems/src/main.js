import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
<<<<<<< HEAD
import './plugins/fontawesome.js'

=======
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faUser, faLock, faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faLock, faCamera)

Vue.component('font-awesome-icon', FontAwesomeIcon)

>>>>>>> e42342a1ba64ef0de4cc7b53b9dcf1d31c79e37a
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
