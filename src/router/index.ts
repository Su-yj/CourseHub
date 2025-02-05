import {createRouter, createWebHistory} from 'vue-router'
import App from '../App.vue'

// 导入组件
// import Home from '../views/Home.vue';

const routes = [{
  path: '/login',
  name: 'login',
  component: () => import('@/views/Login.vue'),
}, {
  path: '/',
  name: 'layout',
  component: () => import('@/components/Layout.vue'),
}]

const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 历史模式
  routes,
})

export default router
