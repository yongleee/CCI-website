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
    path: "/:id",
    name: "Content",
    component: () => import("./views/Content.vue"),
    props: true,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
});

router.beforeEach((to, from, next) => {
  let documentTitle = `${to.meta.title}`;
  if (to.query.title) {
    documentTitle = `${to.query.title}`;
  }
  document.title = documentTitle;
  next();
});
