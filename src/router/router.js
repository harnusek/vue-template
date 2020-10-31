import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const ROUTES = {
  ADMIN: {
    path: "/admin",
    name: "Admin",
    menu: true,
    authorized: true,
    roles: ["BPO"],
    icon: "mdi-cog",
    component: () => import("../views/404.vue")
  },
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: Object.keys(ROUTES).map(key => ROUTES[key])
});

export default router;
