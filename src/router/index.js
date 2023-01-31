import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AdminView from '../views/AdminView.vue'
import AuswahlView from '../views/AuswahlView.vue'
import AdminAnlegen from '../views/AdminAnlegen.vue'
import AdminAnpassen from '../views/AdminAnpassen.vue'
import TicketsAnsehen from '../views/TicketsAnsehenView'
import ticketsHinzufügen from '../views/TicketsHinzufügenView'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/auswahl',
    name: 'auswahl',
    component: AuswahlView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/anpassen',
    name: 'anpassen',
    component: AdminAnpassen
  },
  {
    path: '/anlegen',
    name: 'anlegen',
    component: AdminAnlegen
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/showTickets',
    name: 'ticketsAnsehen',
    component: TicketsAnsehen
  },
  {
    path: '/addTickets',
    name: 'ticketsHinzufügen',
    component: ticketsHinzufügen
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
