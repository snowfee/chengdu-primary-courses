import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ChineseView from './views/ChineseView.vue';
import MathView from './views/MathView.vue';
import EnglishView from './views/EnglishView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chinese',
      name: 'chinese',
      component: ChineseView
    },
    {
      path: '/math',
      name: 'math',
      component: MathView
    },
    {
      path: '/english',
      name: 'english',
      component: EnglishView
    }
  ]
});

export default router;
