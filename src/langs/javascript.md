# javascript

## 声明变量，无类型信息

var a
let b
const c

### 变量提升问题

## 类型

- Number
  - BigInt
- String
- Boolean
- undefined
- null
- Object
  - Object
  - Array
  - Function
- Symbol
- Set & WeakSet
- Map & WeakMap

### 类型转换？

## 基本控制结构

- if else if else
- 三元运算法 ? :
- switch(x) {case 1: ...;}
- while
- do while
- for
- for in
- for of
- break & continue
- label

## 内置数据结构基本操作

### Number

- parseInt
- parseFloat
- isNaN
- isFinite
- Number.isFinite 不同于上面那个
- Number.isNaN 不同于上面那个
- Number.parseInt
- Number.parseFloat
- Number.isInteger
- Number.isSafeInteger

Math全局对象

### String

- charAt
- charCodeAt
- codePointAt
- concat
- endsWith
- includes
- indexOf
- lastIndexOf
- length
- localeCompare
- match
- matchAll
- normalize
- padEnd
- padStart
- repeat
- replace
- search
- slice
- split
- startsWith
- substr
- substring
- toLocaleLowerCase
- toLocaleUpperCase
- toLowerCase
- toUpperCase
- trim
- trimEnd
- trimLeft
- trimRight
- trimStart
- fromCodePoint
- raw

### Array

- from
- of
- isArray

- concat
- copyWithin
- entries
- every
- fill
- filter
- find
- findIndex
- flat
- flatMap
- forEach
- includes
- indexOf
- join
- keys
- lastIndexOf
- map
- pop
- push
- reduce
- reduceRight
- reverse
- shift
- unshift
- values
- sort

### Object

- hasOwnProperty
- isPrototypeOf
- is
- assign
- create
- defineProperty/ies
- entries
- freeze
- fromEntries
- getOwnPropertyDescriptor/s
- getOwnPropertyNames
- getOwnPropertySymbols
- getPrototypeOf
- isExtensible
- isFrozen
- isSealed
- seal
- setPrototypeOf
- getPrototypeOf
- keys
- values

### Symbol

- for
- keyFor

### Set

- size
- add
- delete
- has
- clear
- keys
- values
- entries
- forEach

### WeakSet

- add
- delete
- has

### Map

- size
- set
- get
- has
- delete
- clear
- keys
- values
- entries
- forEach

### WeakMap

- get
- set
- has
- delete

### Proxy & Reflect

- get
- set
- has
- deleteProperty
- ownKeys
- getOwnPropertyDescriptor
- defineProperty
- preventExtensions
- getPrototypeOf
- isExtensible
- setPrototypeOf
- apply
- construct

### Promise

- then
- catch
- finally
- all
- race
- allSettled
- any
- resolve
- reject
- try

## 模块

### es6:export & import

export & export default

import {} from yyyy
import xxx from yyy
import * as xxx from yyyy

export 和 import混合写法

### cjs: exports & require

exports.xxxx = yyyy
module.exports = xxxxx
require(xxxxx)
