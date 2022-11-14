import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ErrorPage from "../pages/ErrorPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: () => import("../views/TaskView.vue"),
  },
  {
    path: "/task/:uuid",
    name: "detail-info-page",
    component: () => import("../pages/DetailInfoPage.vue"),
    props: true,
  },
  {
    path: "*",
    name: "error-page",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
