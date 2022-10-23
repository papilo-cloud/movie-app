import Vue from 'vue';
import VueRouter from 'vue-router';
// import login from '../components/Authentication/login.vue';
import HomeView from '../views/HomeView.vue'
import Bookmarked from '../views/Bookmarked.vue'
import MoviesView from '../views/MoviesView.vue'
import SeriesView from '../views/SeriesView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
  // },
  {
    path: '/bookmarked',
    name: 'Bookmarked',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Bookmarked.vue'),
    component: Bookmarked
  },
  {
    name: 'MoviesView',
    path: '/moviesview',
    component: MoviesView
  },
  {
    name: 'SeriesView',
    path: '/seriesview',
    component: SeriesView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
