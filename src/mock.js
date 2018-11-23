// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNewsData = function () {
  let backData = Mock.mock({
    data: [{
      name: '王1虎',
      date: Random.date(),
      address: Random.id()
    },
    {
      name: '王2虎',
      date: Random.date(),
      address: Random.id()
    },
    {
      name: '王3虎',
      date: Random.date(),
      address: Random.id()
    },
    {
      name: '王4虎',
      date: Random.date(),
      address: Random.id()
    }
    ]
  })
  let backDatas = {
    code: 0,
    data: backData.data,
    msg: 'ok'
  }
  return backDatas
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData)
