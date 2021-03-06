import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
    meta: {
      title: "主页",
    },
  },
  {
    path: "/:id/:title",
    name: "Content",
    component: () => import("./views/Content.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  let documentTitle = `${to.meta.title}`;
  if (to.params.title) {
    documentTitle = `${to.params.title}`;
  }
  document.title = documentTitle;
  next();
});
