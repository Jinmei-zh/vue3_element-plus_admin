import { MockMethod } from "vite-plugin-mock"
import user from "./user"
// import mockjs from "mockjs";

// Mock.mock("/mock/user/login", (ops) => {
//   // 拦截ajax请求，调用函数
//   console.log(ops);
// });

// Mock.mock("/mock/user/login");

export default [
  ...user,
  // {
  //   url: "/mock/getUserInfo",
  //   method: "get",
  //   response: ({ query }) => {
  //     return {
  //       code: 200,
  //       message: "数据",
  //       data: {
  //         nickname: "@cname",
  //         age: "@integer(10-100)",
  //         uid: "@id",
  //         url: "@image",
  //         city: "@city",
  //         country: "@county(true)",
  //         province: "@province",
  //         mobile_phone: "@phone",
  //         email: "@email",
  //         region: "@region",
  //         menus: [
  //           {
  //             menu_name: "一级导航",
  //             id: "@id",
  //             code: "Nav1",
  //             children: [
  //               {
  //                 code: "about",
  //                 menu_url: "views/about",
  //                 access_permissions: '["about"]',
  //                 children: [],
  //                 menu_name: "测试1",
  //                 id: "@id",
  //               },
  //               {
  //                 code: "home",
  //                 menu_url: "views/home",
  //                 access_permissions: '["home"]',
  //                 children: [],
  //                 menu_name: "测试2",
  //                 id: "@id",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     }
  //   },
  // },
] as MockMethod[]
