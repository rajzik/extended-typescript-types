/**
 * `Dictionary` is variable object type.
 *
 * Usage:
 * ```ts
 * let obj: Dictionary;
 * obj = { a: 0, b: 0 }; // Pass
 * obj = { c: 'string', d: 'string' }; // Pass
 * ```
 */
declare interface Dictionary {
  [key: string]: unknown;
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * `XOR` will create exclusive set where you can set only one or other type
 *
 * Usage:
 * ```ts
 * type exclusive = XOR<{ property: string }, { property2: number }>;
 *
 * let result: exclusive;
 * result = { property: 'test' }; // Pass
 * result = { property2: 1 }; // Pass
 * result = { property: 'test', property2: 2 }; // Error
 * ```
 */
declare type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

/**
 * `OneOf` will create exclusive set where you can set only one or other type
 *
 * Usage:
 * ```ts
 * type exclusive = OneOf<{ property: string }, { property2: number }>;
 *
 * let result: exclusive;
 * result = { property: 'test' }; // Pass
 * result = { property2: 1 }; // Pass
 * result = { property: 'test', property2: 2 }; // Error
 * ```
 */
declare type OneOf<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

/**
 * `Extend` will extend A with B type
 *
 * Usage:
 * ```ts
 * type Extended = Extend<{ a: string }, { b: string }>;
 *
 * // Will result in
 * type Extended = { a: string, b: string };
 * ```
 */
declare type Extend<T, U> = T & U;

/**
 * `Subtract` will subtract B type from A type
 *
 * Usage:
 * ```ts
 * type Subtracted = Subtract<{ a: string, b: string }, { b: string }>;
 *
 * // Will result in
 * type Subtracted = { a: string };
 * ```
 */
declare type Subtract<T, K> = Pick<T, Exclude<keyof T, K>>;

/**
 * `Nullable` will make possible to assign null to variable.
 *
 * Usage:
 * ```ts
 * let test: Nullable<string> = null;
 * test = 'Will work';
 * ```
 */
declare type Nullable<T> = T | null;

/**
 * `Optional` will make every field optional.
 *
 * Usage:
 * ```ts
 * interface type {
 *  optional: string;
 * }
 *
 * let test: Optional<type>;
 * test = {};
 * ```
 */
declare type Optional<T> = { [P in keyof T]?: T[P] };

/**
 * `Mandatory` will make every field mandatory.
 *
 * Usage:
 * ```ts
 * interface requiredType {
 *  required?: string;
 * }
 *
 * let test: Mandatory<requiredType>;
 * test = {}; // Error
 * test = {
 *  required: 'Will work'
 * }; // Pass
 */
type RequiredInternal<T, K extends keyof T> = { [P in K]: T[P] };

declare type Mandatory<T> = T & RequiredInternal<T, keyof T>;

/**
 * `RecordObject` Creates typed object with single type for each object.
 *
 * Usage:
 * ```ts
 *  const mySizes = {
 *    big: '22px',
 *    medium: 14,
 *    small: '1rem',
 *  };
 *
 *  const SizeShape: RecordObject<keyof typeof mySizes, string | number> = {
 *    big: 44,
 *    medium: '2rem',
 *    small: '10vw',
 *  }; // Pass
 *
 *  const SizeShape1: RecordObject<keyof typeof mySizes, string | number> = {
 *    big: /10/,
 *    medium: '2rem',
 *    small: '10vw',
 *  }; // Fails
 * ```
 */
declare type RecordObject<K extends keyof any, T> = {
  [P in K]: T;
};
