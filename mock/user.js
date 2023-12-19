// import mockjs from "mockjs";

// Mock.mock("/mock/user/login", (ops) => {
//   // 拦截ajax请求，调用函数
//   console.log(ops);
// });

// Mock.mock("/mock/user/login");

export default [
  {
    url: "/mock/login",
    method: "post",
    response: ({ body: { data } }) => {
      if (data.username != "admin" || data.password != "123456") {
        return {
          code: 400,
          message: "用户名或密码错误",
          data: {},
        };
      }
      return {
        code: 200,
        message: "数据",
        data: {
          token: "123456",
          body: data,
        },
      };
    },
  },
];
