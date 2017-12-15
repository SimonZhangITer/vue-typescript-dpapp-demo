import Mock from 'mockjs'
import modules from './slides'
import headline from './headline'
import board from './board'
import supersale from './super_sale'
import shops from './shop_list'

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

  // activity
  .mock('/activity', 'get', () => {
    return {
      code: 200,
      result: board
    }
  })

  // super_sale
  .mock('/supersale', 'get', () => {
    return {
      code: 200,
      result: supersale
    }
  })

  // shops
  .mock('/shops', 'get', () => {
    return {
      code: 200,
      result: shops
    }
  })
