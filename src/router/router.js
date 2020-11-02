import Vue from "vue";
import VueRouter from "vue-router";

// const NotFound = () => import("../../src/components/404");
const Counter = () => import("../../src/components/Counter");
const Photos = () => import("../../src/components/Photos");
const Bark = () => import("../../src/components/Bark");
const Weather = () => import("../../src/components/Weather");
const Albums = () => import("../../src/components/Albums");
const Admin = () => import("../../src/components/Admin");

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    // { path: '/*', name: "NotFound", component: NotFound },
    { path: '/', name: "Counter", component: Counter },
    { path: '/counter', name: "Counter", component: Counter },
    { path: '/photos', name: "Photos", component: Photos },
    { path: '/bark', name: "Bark", component: Bark },
    { path: '/weather', name: "Weather", component: Weather },
    { path: '/albums', name: "Albums", component: Albums },
    { path: '/admin', name: "Admin", component: Admin },
    ]
});

export default router;
