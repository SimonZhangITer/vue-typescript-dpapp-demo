/**
 * Interface
 *
 * TypeScript的核心原则之一是对值所具有的结构进行类型检查。
 * 它有时被称做“鸭式辨型法”或“结构性子类型化”。
 * 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 */

interface Person {
  name: string,
  age: number,
  isMale: boolean,
  birthDay?: Date, // 问号表示可有可无
  addition?: {
    rich: boolean,
    married: boolean
  }
}

let zhangsan: Person = {
  name: 'zhangsan',
  age: 18,
  isMale: true,
  birthDay: new Date('2017-10-19'),
}

// zhangsan.birthDay = '1990-10-19'

function getMyName(person: Person): string {
  return `i am ${person.name}`
}

getMyName(zhangsan)
