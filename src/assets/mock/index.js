import Mock from 'mockjs'
import modules from './slides'

// modules
Mock.mock('/modules', 'get', () => {
  return {
    code: 200,
    result: modules
  }
})
