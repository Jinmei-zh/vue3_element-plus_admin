export default [
  {
    url: "/api/table",
    method: "get",
    response: () => {
      return {
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        code: 200,
        msg: "success",
        "data|1-10": [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            "id|+1": 1,
            name: "@name",
          },
        ],
      }
    },
  },
]
// 输出结果
// console.log(JSON.stringify(data, null, 4))
