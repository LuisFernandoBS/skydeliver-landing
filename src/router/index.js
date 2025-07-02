import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layouts/DefaultLayout.vue';

const InicioPage = () => import('@/pages/InicioPage.vue');
// const SobrePage = () => import('@/pages/SobrePage.vue');
// const ContatoPage = () => import('@/pages/ContatoPage.vue');

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            { path: '', component: InicioPage },
            // { path: 'planos', component: PlanosPage }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
