import Mock from 'mockjs'

Mock.mock('/list', 'get', (options) => {
  return {
    code: 200,
    result: {
      arr: [1, 2, 3],
      str: 'test'
    }
  }
})
console.log('mock js')
