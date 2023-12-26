// import mockjs from "mockjs";

// Mock.mock("/mock/user/login", (ops) => {
//   // 拦截ajax请求，调用函数
//   console.log(ops);
// });

// Mock.mock("/mock/user/login");

const token = "ijiosefsefsefs"
const userInfo = {
  username: "admin",
  password: "123456",
}
export default [
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      // if (data.username != userInfo.username || data.password != userInfo.password) {
      //   return {
      //     code: 400,
      //     message: "用户名或密码错误",
      //     data: {},
      //   }
      // }
      return {
        code: 200,
        message: "数据",
        data: {
          token: token,
          data: body,
        },
      }
    },
  },
  {
    url: "/api/user",
    method: "get",
    response: (data) => {
      return {
        code: 200,
        message: "数据",
        data: {
          data: data,
          username: userInfo.username,
        },
      }
    },
  },
]
