import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faUser, faLock, faCamera } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faLock, faCamera)

Vue.component('font-awesome-icon', FontAwesomeIcon)
