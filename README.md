# typescript-utility-types

Collection of generic types for TypeScript, complementing built-in mapped types and aliases.

## Installation

1. Install package

```bash
npm install --save-dev typescript-utility-types
```

2. Add reference to your `<type definition file>.d.ts`

```ts
/// <reference types="typescript-utility-types"/>
```

Or:

```ts
import 'typescript-utility-types';
```

## Typescript compatibility

- v3 - minimum TS v3.6.0

## Table of content

- [typescript-utility-types](#typescript-utility-types)
  - [Installation](#installation)
  - [Typescript compatibility](#typescript-compatibility)
  - [Table of content](#table-of-content)
    - [Dictionary](#dictionary)
    - [XOR&lt;A, B&gt;](#xorlta-bgt)
    - [OneOf&lt;A, B&gt; (same as XOR)](#oneoflta-bgt-same-as-xor)
    - [Extend&lt;A, B&gt;](#extendlta-bgt)
    - [Subtract&lt;A, B&gt;](#subtractlta-bgt)
    - [Nullable&lt;A&gt;](#nullableltagt)
    - [RecordObject&lt;A, B&gt;](#recordobjectlta-bgt)
    - [ValuesOf&lt;A&gt;](#valuesofltagt)

### `Dictionary`

`Dictionary` is variable object type.

Usage:

```ts
  let obj: Dictionary;
  obj = { a: 0, b: 0 }; // Ok
  obj = { c: 'string', d: 'string' }; // Ok
```

### `XOR<A, B>`

`XOR` will create exclusive set where you can set only one or other type

Usage:

```ts
  type exclusive = XOR<{ property: string }, { property2: number }>;

  let result: exclusive;
  result = { property: 'test' }; // Ok
  result = { property2: 1 }; // Ok
  result = { property: 'test', property2: 2 }; // Error
```

### `OneOf<A, B>` (same as XOR)

`OneOf` will create exclusive set where you can set only one or other type

Usage:

```ts
  type exclusive = OneOf<{ property: string }, { property2: number }>;

  let result: exclusive;
  result = { property: 'test' }; // Ok
  result = { property2: 1 }; // Ok
  result = { property: 'test', property2: 2 }; // Error
```

### `Extend<A, B>`

`Extend` will extend A type with B type

usage:

```ts
  type Extended = Extend<{ a: string }, { b: string }>;

  // Will result in
  type Extended = { a: string, b: string };
```

### `Subtract<A, B>`

`Subtract` will subtract B type from A type

Usage:

```ts
  type Subtracted = Subtract<{ a: string, b: string }, { b: string }>;

  // Will result in
  type Subtracted = { a: string };
```

### `Nullable<A>`

`Nullable` will make possible to assign null to variable.

Usage:

```ts
  let test: Nullable<string> = null;
  test = 'Will work';
```

### `RecordObject<A, B>`

`RecordObject` creates type for object which each key has same type.

Usage:

```ts
  const mySizes = {
    big: '22px',
    medium: 14,
    small: '1rem',
  };
  type MySizes = RecordObject<keyof typeof mySizes, string | number>
```

### `ValuesOf<A>`

`ValuesOf` Returns values of constant array as type.

Usage:

 ```ts
  const myArray = ['test', 'of', 'value', 'of'] as const;
  type AllowedValue = ValueOf<typeof myArray>; // 'test' | 'of' | 'values';
```
