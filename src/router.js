import Home from '@/pages/Home.vue';
import Bookmark from '@/pages/Bookmark.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/bookmark',
        name: 'Bookmark',
        component: Bookmark,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
