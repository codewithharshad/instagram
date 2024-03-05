import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('./views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'AboutView',
        component: () => import('./views/AboutView.vue'),
    },
 
    {
        path: '/team',
        name: 'team',
        component: () => import('./views/TeamView.vue'),
    },
    {
        path: '/ai',
        name: 'ai',
        component: () => import('./views/AiView.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
