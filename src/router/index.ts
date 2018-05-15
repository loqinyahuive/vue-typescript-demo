import Vue, { AsyncComponent } from 'vue'
import Router, { RouteConfig, Route, NavigationGuard } from 'vue-router'

const HelloWorld: AsyncComponent = (): any => import('@/components/HelloWorld.vue')
const List: AsyncComponent = (): any => import('@/components/list.vue')
const Metrice: AsyncComponent = (): any => import('@/components/metrice.vue')

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/metrice',
    component: Metrice
  }
]

const router: Router = new Router({
  mode: 'history',
  base: '/',
  routes
})

export default router
