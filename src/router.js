import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
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
  history: createWebHistory("/cci-website/"),
});
