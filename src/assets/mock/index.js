import Mock from 'mockjs'
import modules from './slides'
import headline from './headline'

// modules
Mock
  .mock('/modules', 'get', () => {
    return {
      code: 200,
      result: modules
    }
  })

  // headline
  .mock('/headline', 'get', () => {
    return {
      code: 200,
      result: headline
    }
  })
