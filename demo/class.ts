/**
 * Class
 *
 * public
 * 公有的，属性对外可见，默认public
 */

class Animal {
  public name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log(`Animal moved ${distance}m`);
  }
}

let animal: Animal = new Animal('zhangsan')

/**
 * extends 继承
 *
 * 类从基类中继承属性和方法
 */
class Dog extends Animal {
  type: string

  constructor(name: string, type: string) {
    super(name)
    this.type = type
  }

  bark() {
    console.log('Woof! Woof')
  }
}

let dog: Dog = new Dog('jack', 'type')


/**
 * private
 * 私有的，只有自己可见
 */
class Animal2 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let cat: Animal2 = new Animal2("Cat");

// cat.name// 错误: 'name' 是私有的.


/**
 * protected
 * 受保护的，在派生类中可见
 */

class Person2 {
  protected bloodType: string = 'A';
  name: string
  constructor(name: string) {
    this.name = name;
  }
}

class child extends Person2 {
  constructor(name: string) {
    super(name)
  }

  getBloodType(): string {
    return this.bloodType
  }
}

let person: Person2 = new Person2('zhangsan')
let howard = new child('Howard')

// person.bloodType // error 属性“bloodType”受保护，只能在类“Person”及其子类中访问
howard.getBloodType() // A


/**
 * readonly
 * 将属性设置为只读的
 * 只读属性必须在声明时或构造函数里被初始化
 */

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
