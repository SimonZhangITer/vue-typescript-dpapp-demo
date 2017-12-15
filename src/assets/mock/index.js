import Mock from 'mockjs'
import modules from './slides'

Mock.mock('/modules', 'get', (options) => {
  return {
    code: 200,
    result: {
      list: modules
    }
  }
})
