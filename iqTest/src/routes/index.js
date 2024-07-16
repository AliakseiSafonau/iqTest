import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import TestView from './views/TestView.vue'
import ResultView from './views/ResultView.vue'



const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/test/:id', name: 'test', component: TestView },
  { path: '/result', name: 'result', component: ResultView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router

