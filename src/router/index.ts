import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Layout from "@/components/layouts/index.vue";
import HomeView from "@/views/HomeView.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        meta: { name: "主页", icon: "house" },
        component: HomeView,
      },
      {
        path: "/table",
        name: "table",
        meta: { name: "表格", icon: "grid" },
        children: [
          {
            path: "/table/list",
            name: "list",
            meta: { name: "列表" },
            component: () => import("@/views/tables/index.vue"),
          },
        ],
      },
      {
        path: "/test",
        name: "test",
        meta: { name: "其他页", icon: "house" },
        component: HomeView,
        children: [
          {
            path: "/test/test1",
            name: "test1",
            meta: { name: "测试1", icon: "edit" },
            component: () => import("@/views/AboutView.vue"),
            children: [
              {
                path: "/test/test1/test3",
                name: "test3",
                meta: { name: "测试3", icon: "edit" },
                component: () => import("@/views/AboutView.vue"),
              },
            ],
          },
          {
            path: "/test/test2",
            name: "test2",
            meta: { name: "测试2", icon: "edit" },
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("@/views/AboutView.vue"),
          },
        ],
      },
      {
        path: "/about",
        name: "about",
        meta: { name: "关于我们", icon: "edit" },
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("@/views/AboutView.vue"),
      },
      {
        path: "/disable",
        name: "disable",
        meta: { name: "禁用菜单", icon: "edit", disabled: true },
        redirect: "/home",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
