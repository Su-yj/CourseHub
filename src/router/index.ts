import { createRouter, createWebHistory } from 'vue-router';

// 导入组件
// import Home from '../views/Home.vue';

const routes = [{
//     path: '/',
//     component: Home
// }, {
    path: '/',
    component: () => import('@/views/Login.vue'),
}];

const router = createRouter({
    history: createWebHistory(), // 使用 HTML5 历史模式
    routes
});

export default router;
