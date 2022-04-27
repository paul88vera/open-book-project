
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/logged', component: () => import('src/pages/admin/IndexPage.vue'), meta: { requireLogin: true }}
    ]
  },
  {
    name: 'Login',
    path: '/',
    component: () => import('pages/Login.vue')
  },
  {
    name: 'LoggedIn',
    path: '/logged',
    component: () => import('src/pages/admin/IndexPage.vue')
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
