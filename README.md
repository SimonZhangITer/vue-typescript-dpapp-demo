
<div align=center>
    <img src="https://p1.meituan.net/dpgroup/60168751a8f4a79ca3c59edffdde00e423571.jpg" width="92"/>
    <img src="https://p0.meituan.net/dpgroup/4a48f7ad4e6231c12c44b3422d67008116085.jpg" width="80"/>
</div>

## 功能

- [x] 轮播
- [x] 搜索
- [x] 列表
- [x] 懒加载
- [x] 简单动画
- [x] loading
- [x] vue-router.ts
- [x] vuex.ts
- [x] vue-class-component使用
- [x] vuex-class使用
- [x] xxx.d.ts声明文件
- [x] 基于类的编写方式
- [x] mock数据
- [x] tsconfig.json
- [x] webpack配置
- [ ] vue-typecript-cli

## 完成后的简单例子
基于类的写法加上静态类型检查，简直不能再嗨

```javascript
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { State } from "vuex-class";

@Component
export default class Shops extends Vue {
  @State shops: StoreState.shop[];
  @State searchVal: string;

  get shopList(): StoreState.shop[] {
    const shops = this.shops;
    const searchVal = this.searchVal;
    return shops.filter(
      (el: StoreState.shop) => el.shopName.indexOf(searchVal) > -1
    );
  }
}
</script>
```

# 为什么使用TypeScript

### 强类型语言
现在很多主流语言都是强类型的，而这点也一直是JavaScript所被人诟病的地方。使用TypeScript之后，将会在代码调试、重构等步骤节省很多时间。
### 强大的IDE支持
现在的主流编辑器如`VSCode`、`WebStorm`、`Atom`、`Sublime`等都对TypeScript有着非常友好的支持，主要体现在智能提示上，非常的方便
### 可运行于任何浏览器、计算机、操作系统
强大的编译引擎
### 迭代更新快
不断更新，提供更加方便友好的Api
### 微软和Google爸爸
TypeScript是微软开发的语言，而Google的Angular使用的就是TypeScript，所以不用担心会停止维护，至少在近几年内TypeScript都会一门主流开发语言
### npm下载量非常高
截止2017.12.17, TypeScript在全球范围内的npm日均下载量在30w左右，这个数字将近是vue下载量的10倍，可见TypeScript还是非常受欢迎的

# TypeScript配置
本项目已经配置完毕，这里记录一下当时的踩坑过程

## Webpack
首先需要安装`ts-loader`，这是TypeScript为Webpack提供的编译器，类似于`babel-loader`

```bash
npm i ts-loader -D
```
接着在Webpack的`module.rules`里面添加对ts的支持(我这里的webpack版本是2.x)：

```javascript
{
    test: /\.vue$/,
    loader: 'vue-loader',
    options: vueLoaderConfig
},
{
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      "babel-loader",
      {
        loader: "ts-loader",
        options: { appendTsxSuffixTo: [/\.vue$/] }
      }
    ]
}
```

## tsconfig.json

创建tsconfig.json文件，放在根目录下，和`package.json`同级

配置内容主要也看个人需求，具体可以去typescript的官网查看，但是有一点需要注意：
> 在Vue中，你需要引入 strict: true (或者至少 noImplicitThis: true，这是 strict 模式的一部分) 以利用组件方法中 this 的类型检查，否则它会始终被看作 any 类型。

这里列出我的配置，功能在注释中给出

```javascript
{
  "include": [
    "src/*",
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ],
  "compilerOptions": {
    // types option has been previously configured
    "types": [
      // add node as an option
      "node"
    ],
    // typeRoots option has been previously configured
    "typeRoots": [
      // add path to @types
      "node_modules/@types"
    ],
    // 以严格模式解析
    "strict": true,
    // 在.tsx文件里支持JSX
    "jsx": "preserve",
    // 使用的JSX工厂函数
    "jsxFactory": "h",
    // 允许从没有设置默认导出的模块中默认导入
    "allowSyntheticDefaultImports": true,
    // 启用装饰器
    "experimentalDecorators": true,
    "strictFunctionTypes": false,
    // 允许编译javascript文件
    "allowJs": true,
    // 采用的模块系统
    "module": "esnext",
    // 编译输出目标 ES 版本
    "target": "es5",
    // 如何处理模块
    "moduleResolution": "node",
    // 在表达式和声明上有隐含的any类型时报错
    "noImplicitAny": true,
    "lib": [
      "dom",
      "es5",
      "es6",
      "es7",
      "es2015.promise"
    ],
    "sourceMap": true,
    "pretty": true
  }
}
```

## 修改main.js
1. 把项目主文件`main.js`修改成`main.ts`，里面的写法基本不变，但是有一点需要注意：
引入Vue文件的时候需要加上`.vue`后缀,否则编辑器识别不到

2. 把webpack的entry文件也修改成`main.ts`

## vue-shims.d.ts
TypeScript并不支持Vue文件，所以需要告诉TypeScript`*.vue`文件交给vue编辑器来处理。解决方案就是在创建一个vue-shims.d.ts文件，建议放在src目录下再创建一个`typings`文件夹，把这个声明文件放进去，如：`src/typings/vue-shims.d.ts`，文件内容：

> `*.d.ts`类型文件不需要手动引入，TypeScript会自动加载

```javascript
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```
# 坑
### 引入部分第三方库的时候需要额外声明文件
比如说我想引入`vue-lazyload`,虽然已经在本地安装，但是typescript还是提示找不到模块。原因是typescript是从`node_modules/@types`目录下去找模块声明，有些库并没有提供typescript的声明文件，所以就需要自己去添加

解决办法：在`src/typings`目前下建一个`tools.d.ts`文件，声明这个模块即可

```javascript
declare module 'vue-awesome-swiper' {
  export const swiper: any
  export const swiperSlide: any
}

declare module 'vue-lazyload'
```

### 对vuex的支持不是很好
在TypeScript里面使用不了mapState、mapGetters等方法，只能一个变量一个变量的去引用，这个要麻烦不少。不过使用`vuex-class`库之后，写法上也还算简洁美观

```javascript
export default class modules extends Vue {
  @State login: boolean; // 对应this.$store.state.login
  @State headline: StoreState.headline[]; // 对应this.$store.state.headline

  private swiperOption: Object = {
    autoplay: true,
    loop: true,
    direction: "vertical"
  };

  logoClick(): void {
    alert("点我干嘛");
  }
}
```
## Build Setup

``` bash
# 安装依赖
npm install

# 启动项目
npm run dev

# 打包项目
npm run build
```



