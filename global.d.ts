
/**
 * `Dictionary` is variable object type.
 *
 * Usage:
 * ```ts
 * let obj: Dictionary;
 * obj = { a: 0, b: 0 }; // Ok
 * obj = { c: 'string', d: 'string' }; // Ok
 * ```
 */
declare interface Dictionary extends Object {
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
 * result = { property: 'test' }; // Ok
 * result = { property2: 1 }; // Ok
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
 * result = { property: 'test' }; // Ok
 * result = { property2: 1 }; // Ok
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
 * interface type {
 *  required?: string;
 * }
 *
 * let test: Mandatory<type>;
 * test = {}; // Error
 * test = {
 *  required: 'Will work'
 * };
 * ```
 */
type RequiredInternal<T, K extends keyof T> = { [P in K]: T[P] };
declare type Mandatory<T> = T & RequiredInternal<T, keyof T>;
