const router = new VueRouter({
    routes: [
      {path: '/', component: Home},
      {path: '/404', component: NotFound},
      {path: '*', redirect: '/404'}
    ],
    mode: "history"
  });
  