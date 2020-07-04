import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import vue router
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//import component
import PostIndex from './components/posts/Index'
import PostCreate from './components/posts/Create'
import PostEdit from './components/posts/Edit'

const router = new VueRouter({
  routes: [{
      path: '/',
      name: 'posts',
      component: PostIndex
    },
    {
      path: '/create',
      name: '/create',
      component: PostCreate
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: PostEdit
    }
  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')