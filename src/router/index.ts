import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/components/layout";
import HomeView from "../views/HomeView.vue";

export const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "table",
        name: "table",
        meta: { name: "表格", icon: "local" },
        children: [
          {
            path: "list",
            name: "list",
            meta: { name: "列表", icon: "edit" },
            component: () => import("../views/tables/index.vue"),
          },
        ]
    },
      {
        path: "home",
        name: "home",
        meta: { name: "主页", icon: "local" },
        component: HomeView,
        children: [
          {
            path: "test",
            name: "test",
            meta: { name: "测试1", icon: "edit" },
            component: () => import("../views/AboutView.vue"),
            children: [
              {
                path: "test3",
                name: "test3",
                meta: { name: "测试3", icon: "edit" },
                component: () => import("../views/AboutView.vue"),
              },
            ],
          },
          {
            path: "test2",
            name: "test2",
            meta: { name: "测试2", icon: "edit" },
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
          },
        ],
      },
      {
        path: "about",
        name: "about",
        meta: { name: "关于我们", icon: "edit" },
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/AboutView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
