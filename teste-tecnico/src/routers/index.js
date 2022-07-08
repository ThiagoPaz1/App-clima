import { createRouter, createWebHistory } from 'vue-router';


export let routes = [
  // {
  //   path: '/detailsCity',
  //   name: 'AddNewClients',
  //   component: AddNewClients,
  // },
  // {
  //   path: '/Home',
  //   name: 'Home',
  //   component: Home,
  // },
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router