import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router/index'
import { Picker } from 'vant';
import { Popup } from 'vant';
import { Field } from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
import { Toast } from 'vant';
import { Overlay } from 'vant';
import store from './store/store'
import { Area } from 'vant';

Vue.use(Area);
Vue.use(Overlay);

Vue.use(Toast);
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);
Vue.use(Field);
Vue.use(Popup);

Vue.use(Picker);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
