/**
 * string
 * 字符串
 */
let str: string = 'haha'

str = 'xixi'

/**
 * number
 * 数字
 */
let num: number = 1

num = 2

/**
 * boolean
 * 布尔
 */
let bool: boolean = true

bool = false


/**
 * 类型推断
 */
let x = 'test'

// x = 1

/**
 * array
 * 数组
 */
let arr1: number[] = [2, 3]

let arr2: Array<number> = [2, 3]

/**
 * tuple
 * 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
 */
let tup1: [number, string] = [2, '2']

let tup2: [number] = [1, 2]

// tup1.push(false)

/**
 * 枚举
 * enum类型是对JavaScript标准数据类型的一个补充
 * 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
 *
 * 默认情况下，从0开始为元素编号
 */
enum Type {
  Shop = 2,
  Food = 1,
  Drink = 3
}

let shop: Type = Type.Shop


/**
 * any
 * 可存储任何类型
 */

let any: any = 3

any = 'haha'
any = true

/**
 * void
 * 没有类型，多用于函数
 */
function warnUser(): void {
  alert("This is my warning message")
}

function getName(name: string): string {
  return `my name is ${name}`
}

getName('haha')
