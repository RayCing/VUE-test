// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import api from './api/api'
import Qs from 'qs'
import VueResource from 'vue-resource'
import { Button, Select, Container, Aside, Main, Menu, Submenu, MenuItem, MenuItemGroup, Icon, Radio, RadioGroup, RadioButton, Table, TableColumn } from 'element-ui'
require('./mock.js')

Vue.prototype.axios = axios
Vue.prototype.qs = Qs
Vue.prototype.api = api
Vue.config.productionTip = false
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Container.name, Container)
Vue.component(Aside.name, Aside)
Vue.component(Main.name, Main)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Icon.name, Icon)
Vue.component(Radio.name, Radio)
Vue.component(RadioButton.name, RadioButton)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
