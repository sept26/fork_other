import Vue from 'vue';
import Router from 'vue-router';
import App from '../App';
import home from '../page/home';
import item from '../page/item';
import score from '../page/score';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: home,
      },
      {
        path: '/item',
        component: item,
      },
      {
        path: '/score',
        component: score,
      },
    ],
  },
];

export default new Router({
  routes,
});
