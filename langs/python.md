# python

## 声明变量，无类型信息

不用声明，但是要先赋值。
代码块中使用global关键字可以声明全局变量

## 类型

- Number
  - int
  - long
  - float
  - complex
- String
- List
- Tuple
- Dictionary

### 类型转换？

显示，无隐式？

## 基本控制结构

- if: elif: else:
- while: else:
- for in: else:
- break & continue
- pass

## 内置数据结构基本操作

### Number

都放在math和cmath模块中

### String

- capitalize
- center
- count
- decode
- encode
- endsWith
- expandtabs
- find
- format
- index
- isalnum
- isalpha
- isdecimal
- isdigit
- islower
- isnumeric
- isspace
- istitle
- isupper
- join
- ljust
- lower
- lstrip
- maketrans
- max
- min
- partition
- replace
- rfind
- rindex
- rjust
- rpatition
- rstrip
- split
- splitlines
- startswith
- strip
- swapcase
- title
- translate
- upper
- zfill

### List

- cmp
- len
- max
- min
- list

- append
- count
- extend
- index
- insert
- pop
- remove
- reverse
- sort

### tuple

- cmp
- len
- max
- min
- tuple

### dict

- cmp
- len
- str
- type

- clear
- copy
- fromkeys
- get
- has_key
- items
- keys
- setdefault
- update
- values
- pop
- popitem

### 时间

- time
- calendar
- datetime
- pytz
- dateutil

## 模块

import yyy
from yyy import xxxx
from yyy import *

## 比较

- is & is not: python中的 is 用来判断是否是同一个对象，也就是说is是来判断两个变量的地址引用是否相同，相同的话返回true，表示这两个变量的内存ID是相同的（查内存地址用 id() ），不相同的话返回false。
- python中的‘==’ 是用来判断两个对象的值是否相等的，比如判断两个数字的值是否相等。判断的是内存块里存的值。
- in & not in: python 中的in关键字其实是实现了python中的遍历协议，in后面跟的对象一般是可迭代对象（不包括生成器；但包括set集合，set不能迭代，但是也能用“in”来查找元素），字符串也是属于可迭代对象的。比如’ab’ in ‘abc’或者’abc’ in 'abc’都是true。
- 3.x 已无cmp函数

## 正则

- match: 只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回None
- search: 匹配整个字符串，直到找到一个匹配
- sub
- findall
- finditer
- split
- 针对结果还有几个函数
  - group
  - groups
  - start
  - end
  - span
