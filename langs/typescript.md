# typescript

## 声明变量，有类型信息，变量后面，支持类型推断

let helloWorld = "Hello World";
let helloWorld: string = "Hello World";

## 类型

- Boolean
- Number
- String
- Array
- Tuple, let x: [string, number];
- Enum
- Unknown
  We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content – e.g. from the user – or we may want to intentionally accept all values in our API. In these cases, we want to provide a type that tells the compiler and future readers that this variable could be anything, so we give it the unknown type.
- Any
  In some situations, not all type information is available or it’s declaration would take an inappropriate amount of effort. These may occur for values from code that has been written without TypeScript or a 3rd party library. In these cases, we might want to opt-out of type checking. To do so, we label these values with the any type
- Void
  void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value
- Null
- Undefined
  By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number
- Never
  The never type represents the type of values that never occur. For instance, never is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns. Variables also acquire the type never when narrowed by any type guards that can never be true.
  The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.
- Object

### 强类型，大部分不可以直接转换？

## 基本控制结构

同javascript


