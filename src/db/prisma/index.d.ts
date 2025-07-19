
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_permissions
 * 
 */
export type user_permissions = $Result.DefaultSelection<Prisma.$user_permissionsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model scrapes
 * 
 */
export type scrapes = $Result.DefaultSelection<Prisma.$scrapesPayload>
/**
 * Model emails
 * 
 */
export type emails = $Result.DefaultSelection<Prisma.$emailsPayload>
/**
 * Model tasks
 * 
 */
export type tasks = $Result.DefaultSelection<Prisma.$tasksPayload>
/**
 * Model uploads
 * 
 */
export type uploads = $Result.DefaultSelection<Prisma.$uploadsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more User_permissions
 * const user_permissions = await prisma.user_permissions.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more User_permissions
   * const user_permissions = await prisma.user_permissions.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_permissions`: Exposes CRUD operations for the **user_permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_permissions
    * const user_permissions = await prisma.user_permissions.findMany()
    * ```
    */
  get user_permissions(): Prisma.user_permissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scrapes`: Exposes CRUD operations for the **scrapes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scrapes
    * const scrapes = await prisma.scrapes.findMany()
    * ```
    */
  get scrapes(): Prisma.scrapesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emails`: Exposes CRUD operations for the **emails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emails
    * const emails = await prisma.emails.findMany()
    * ```
    */
  get emails(): Prisma.emailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uploads`: Exposes CRUD operations for the **uploads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Uploads
    * const uploads = await prisma.uploads.findMany()
    * ```
    */
  get uploads(): Prisma.uploadsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_permissions: 'user_permissions',
    users: 'users',
    scrapes: 'scrapes',
    emails: 'emails',
    tasks: 'tasks',
    uploads: 'uploads'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_permissions" | "users" | "scrapes" | "emails" | "tasks" | "uploads"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_permissions: {
        payload: Prisma.$user_permissionsPayload<ExtArgs>
        fields: Prisma.user_permissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_permissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_permissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload>
          }
          findFirst: {
            args: Prisma.user_permissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_permissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload>
          }
          findMany: {
            args: Prisma.user_permissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload>[]
          }
          create: {
            args: Prisma.user_permissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload>
          }
          createMany: {
            args: Prisma.user_permissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.user_permissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload>
          }
          update: {
            args: Prisma.user_permissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload>
          }
          deleteMany: {
            args: Prisma.user_permissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_permissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.user_permissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_permissionsPayload>
          }
          aggregate: {
            args: Prisma.User_permissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_permissions>
          }
          groupBy: {
            args: Prisma.user_permissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_permissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_permissionsCountArgs<ExtArgs>
            result: $Utils.Optional<User_permissionsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      scrapes: {
        payload: Prisma.$scrapesPayload<ExtArgs>
        fields: Prisma.scrapesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.scrapesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.scrapesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload>
          }
          findFirst: {
            args: Prisma.scrapesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.scrapesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload>
          }
          findMany: {
            args: Prisma.scrapesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload>[]
          }
          create: {
            args: Prisma.scrapesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload>
          }
          createMany: {
            args: Prisma.scrapesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.scrapesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload>
          }
          update: {
            args: Prisma.scrapesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload>
          }
          deleteMany: {
            args: Prisma.scrapesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.scrapesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.scrapesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$scrapesPayload>
          }
          aggregate: {
            args: Prisma.ScrapesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScrapes>
          }
          groupBy: {
            args: Prisma.scrapesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScrapesGroupByOutputType>[]
          }
          count: {
            args: Prisma.scrapesCountArgs<ExtArgs>
            result: $Utils.Optional<ScrapesCountAggregateOutputType> | number
          }
        }
      }
      emails: {
        payload: Prisma.$emailsPayload<ExtArgs>
        fields: Prisma.emailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.emailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.emailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          findFirst: {
            args: Prisma.emailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.emailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          findMany: {
            args: Prisma.emailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>[]
          }
          create: {
            args: Prisma.emailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          createMany: {
            args: Prisma.emailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.emailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          update: {
            args: Prisma.emailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          deleteMany: {
            args: Prisma.emailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.emailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.emailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$emailsPayload>
          }
          aggregate: {
            args: Prisma.EmailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmails>
          }
          groupBy: {
            args: Prisma.emailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.emailsCountArgs<ExtArgs>
            result: $Utils.Optional<EmailsCountAggregateOutputType> | number
          }
        }
      }
      tasks: {
        payload: Prisma.$tasksPayload<ExtArgs>
        fields: Prisma.tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findFirst: {
            args: Prisma.tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          findMany: {
            args: Prisma.tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>[]
          }
          create: {
            args: Prisma.tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          createMany: {
            args: Prisma.tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          update: {
            args: Prisma.tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          deleteMany: {
            args: Prisma.tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.tasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      uploads: {
        payload: Prisma.$uploadsPayload<ExtArgs>
        fields: Prisma.uploadsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.uploadsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.uploadsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          findFirst: {
            args: Prisma.uploadsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.uploadsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          findMany: {
            args: Prisma.uploadsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>[]
          }
          create: {
            args: Prisma.uploadsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          createMany: {
            args: Prisma.uploadsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.uploadsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          update: {
            args: Prisma.uploadsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          deleteMany: {
            args: Prisma.uploadsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.uploadsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.uploadsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$uploadsPayload>
          }
          aggregate: {
            args: Prisma.UploadsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUploads>
          }
          groupBy: {
            args: Prisma.uploadsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UploadsGroupByOutputType>[]
          }
          count: {
            args: Prisma.uploadsCountArgs<ExtArgs>
            result: $Utils.Optional<UploadsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user_permissions?: user_permissionsOmit
    users?: usersOmit
    scrapes?: scrapesOmit
    emails?: emailsOmit
    tasks?: tasksOmit
    uploads?: uploadsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    scrapes: number
    user_permissions: number
    tasks: number
    emails: number
    uploads: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapes?: boolean | UsersCountOutputTypeCountScrapesArgs
    user_permissions?: boolean | UsersCountOutputTypeCountUser_permissionsArgs
    tasks?: boolean | UsersCountOutputTypeCountTasksArgs
    emails?: boolean | UsersCountOutputTypeCountEmailsArgs
    uploads?: boolean | UsersCountOutputTypeCountUploadsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountScrapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scrapesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_permissionsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emailsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uploadsWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    scrapes: number
    emails: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapes?: boolean | TasksCountOutputTypeCountScrapesArgs
    emails?: boolean | TasksCountOutputTypeCountEmailsArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountScrapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scrapesWhereInput
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountEmailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user_permissions
   */

  export type AggregateUser_permissions = {
    _count: User_permissionsCountAggregateOutputType | null
    _avg: User_permissionsAvgAggregateOutputType | null
    _sum: User_permissionsSumAggregateOutputType | null
    _min: User_permissionsMinAggregateOutputType | null
    _max: User_permissionsMaxAggregateOutputType | null
  }

  export type User_permissionsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_permissionsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type User_permissionsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_permissionsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type User_permissionsCountAggregateOutputType = {
    id: number
    user_id: number
    permissions: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type User_permissionsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_permissionsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type User_permissionsMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_permissionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type User_permissionsCountAggregateInputType = {
    id?: true
    user_id?: true
    permissions?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type User_permissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_permissions to aggregate.
     */
    where?: user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionsOrderByWithRelationInput | user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_permissions
    **/
    _count?: true | User_permissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_permissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_permissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_permissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_permissionsMaxAggregateInputType
  }

  export type GetUser_permissionsAggregateType<T extends User_permissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_permissions[P]>
      : GetScalarType<T[P], AggregateUser_permissions[P]>
  }




  export type user_permissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_permissionsWhereInput
    orderBy?: user_permissionsOrderByWithAggregationInput | user_permissionsOrderByWithAggregationInput[]
    by: User_permissionsScalarFieldEnum[] | User_permissionsScalarFieldEnum
    having?: user_permissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_permissionsCountAggregateInputType | true
    _avg?: User_permissionsAvgAggregateInputType
    _sum?: User_permissionsSumAggregateInputType
    _min?: User_permissionsMinAggregateInputType
    _max?: User_permissionsMaxAggregateInputType
  }

  export type User_permissionsGroupByOutputType = {
    id: number
    user_id: number | null
    permissions: JsonValue | null
    created_at: Date | null
    updated_at: Date | null
    _count: User_permissionsCountAggregateOutputType | null
    _avg: User_permissionsAvgAggregateOutputType | null
    _sum: User_permissionsSumAggregateOutputType | null
    _min: User_permissionsMinAggregateOutputType | null
    _max: User_permissionsMaxAggregateOutputType | null
  }

  type GetUser_permissionsGroupByPayload<T extends user_permissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_permissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_permissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_permissionsGroupByOutputType[P]>
            : GetScalarType<T[P], User_permissionsGroupByOutputType[P]>
        }
      >
    >


  export type user_permissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    permissions?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | user_permissions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["user_permissions"]>



  export type user_permissionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    permissions?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type user_permissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "permissions" | "created_at" | "updated_at", ExtArgs["result"]["user_permissions"]>
  export type user_permissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_permissions$usersArgs<ExtArgs>
  }

  export type $user_permissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_permissions"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      permissions: Prisma.JsonValue | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["user_permissions"]>
    composites: {}
  }

  type user_permissionsGetPayload<S extends boolean | null | undefined | user_permissionsDefaultArgs> = $Result.GetResult<Prisma.$user_permissionsPayload, S>

  type user_permissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_permissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_permissionsCountAggregateInputType | true
    }

  export interface user_permissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_permissions'], meta: { name: 'user_permissions' } }
    /**
     * Find zero or one User_permissions that matches the filter.
     * @param {user_permissionsFindUniqueArgs} args - Arguments to find a User_permissions
     * @example
     * // Get one User_permissions
     * const user_permissions = await prisma.user_permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_permissionsFindUniqueArgs>(args: SelectSubset<T, user_permissionsFindUniqueArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_permissionsFindUniqueOrThrowArgs} args - Arguments to find a User_permissions
     * @example
     * // Get one User_permissions
     * const user_permissions = await prisma.user_permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_permissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_permissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionsFindFirstArgs} args - Arguments to find a User_permissions
     * @example
     * // Get one User_permissions
     * const user_permissions = await prisma.user_permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_permissionsFindFirstArgs>(args?: SelectSubset<T, user_permissionsFindFirstArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionsFindFirstOrThrowArgs} args - Arguments to find a User_permissions
     * @example
     * // Get one User_permissions
     * const user_permissions = await prisma.user_permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_permissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_permissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_permissions
     * const user_permissions = await prisma.user_permissions.findMany()
     * 
     * // Get first 10 User_permissions
     * const user_permissions = await prisma.user_permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_permissionsWithIdOnly = await prisma.user_permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_permissionsFindManyArgs>(args?: SelectSubset<T, user_permissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_permissions.
     * @param {user_permissionsCreateArgs} args - Arguments to create a User_permissions.
     * @example
     * // Create one User_permissions
     * const User_permissions = await prisma.user_permissions.create({
     *   data: {
     *     // ... data to create a User_permissions
     *   }
     * })
     * 
     */
    create<T extends user_permissionsCreateArgs>(args: SelectSubset<T, user_permissionsCreateArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_permissions.
     * @param {user_permissionsCreateManyArgs} args - Arguments to create many User_permissions.
     * @example
     * // Create many User_permissions
     * const user_permissions = await prisma.user_permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_permissionsCreateManyArgs>(args?: SelectSubset<T, user_permissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User_permissions.
     * @param {user_permissionsDeleteArgs} args - Arguments to delete one User_permissions.
     * @example
     * // Delete one User_permissions
     * const User_permissions = await prisma.user_permissions.delete({
     *   where: {
     *     // ... filter to delete one User_permissions
     *   }
     * })
     * 
     */
    delete<T extends user_permissionsDeleteArgs>(args: SelectSubset<T, user_permissionsDeleteArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_permissions.
     * @param {user_permissionsUpdateArgs} args - Arguments to update one User_permissions.
     * @example
     * // Update one User_permissions
     * const user_permissions = await prisma.user_permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_permissionsUpdateArgs>(args: SelectSubset<T, user_permissionsUpdateArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_permissions.
     * @param {user_permissionsDeleteManyArgs} args - Arguments to filter User_permissions to delete.
     * @example
     * // Delete a few User_permissions
     * const { count } = await prisma.user_permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_permissionsDeleteManyArgs>(args?: SelectSubset<T, user_permissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_permissions
     * const user_permissions = await prisma.user_permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_permissionsUpdateManyArgs>(args: SelectSubset<T, user_permissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User_permissions.
     * @param {user_permissionsUpsertArgs} args - Arguments to update or create a User_permissions.
     * @example
     * // Update or create a User_permissions
     * const user_permissions = await prisma.user_permissions.upsert({
     *   create: {
     *     // ... data to create a User_permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_permissions we want to update
     *   }
     * })
     */
    upsert<T extends user_permissionsUpsertArgs>(args: SelectSubset<T, user_permissionsUpsertArgs<ExtArgs>>): Prisma__user_permissionsClient<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionsCountArgs} args - Arguments to filter User_permissions to count.
     * @example
     * // Count the number of User_permissions
     * const count = await prisma.user_permissions.count({
     *   where: {
     *     // ... the filter for the User_permissions we want to count
     *   }
     * })
    **/
    count<T extends user_permissionsCountArgs>(
      args?: Subset<T, user_permissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_permissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_permissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_permissionsAggregateArgs>(args: Subset<T, User_permissionsAggregateArgs>): Prisma.PrismaPromise<GetUser_permissionsAggregateType<T>>

    /**
     * Group by User_permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_permissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_permissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_permissionsGroupByArgs['orderBy'] }
        : { orderBy?: user_permissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_permissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_permissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_permissions model
   */
  readonly fields: user_permissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_permissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends user_permissions$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_permissions$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_permissions model
   */
  interface user_permissionsFieldRefs {
    readonly id: FieldRef<"user_permissions", 'Int'>
    readonly user_id: FieldRef<"user_permissions", 'Int'>
    readonly permissions: FieldRef<"user_permissions", 'Json'>
    readonly created_at: FieldRef<"user_permissions", 'DateTime'>
    readonly updated_at: FieldRef<"user_permissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_permissions findUnique
   */
  export type user_permissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which user_permissions to fetch.
     */
    where: user_permissionsWhereUniqueInput
  }

  /**
   * user_permissions findUniqueOrThrow
   */
  export type user_permissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which user_permissions to fetch.
     */
    where: user_permissionsWhereUniqueInput
  }

  /**
   * user_permissions findFirst
   */
  export type user_permissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which user_permissions to fetch.
     */
    where?: user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionsOrderByWithRelationInput | user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_permissions.
     */
    cursor?: user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_permissions.
     */
    distinct?: User_permissionsScalarFieldEnum | User_permissionsScalarFieldEnum[]
  }

  /**
   * user_permissions findFirstOrThrow
   */
  export type user_permissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which user_permissions to fetch.
     */
    where?: user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionsOrderByWithRelationInput | user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_permissions.
     */
    cursor?: user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_permissions.
     */
    distinct?: User_permissionsScalarFieldEnum | User_permissionsScalarFieldEnum[]
  }

  /**
   * user_permissions findMany
   */
  export type user_permissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * Filter, which user_permissions to fetch.
     */
    where?: user_permissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_permissions to fetch.
     */
    orderBy?: user_permissionsOrderByWithRelationInput | user_permissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_permissions.
     */
    cursor?: user_permissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_permissions.
     */
    skip?: number
    distinct?: User_permissionsScalarFieldEnum | User_permissionsScalarFieldEnum[]
  }

  /**
   * user_permissions create
   */
  export type user_permissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_permissions.
     */
    data?: XOR<user_permissionsCreateInput, user_permissionsUncheckedCreateInput>
  }

  /**
   * user_permissions createMany
   */
  export type user_permissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_permissions.
     */
    data: user_permissionsCreateManyInput | user_permissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_permissions update
   */
  export type user_permissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_permissions.
     */
    data: XOR<user_permissionsUpdateInput, user_permissionsUncheckedUpdateInput>
    /**
     * Choose, which user_permissions to update.
     */
    where: user_permissionsWhereUniqueInput
  }

  /**
   * user_permissions updateMany
   */
  export type user_permissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_permissions.
     */
    data: XOR<user_permissionsUpdateManyMutationInput, user_permissionsUncheckedUpdateManyInput>
    /**
     * Filter which user_permissions to update
     */
    where?: user_permissionsWhereInput
    /**
     * Limit how many user_permissions to update.
     */
    limit?: number
  }

  /**
   * user_permissions upsert
   */
  export type user_permissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_permissions to update in case it exists.
     */
    where: user_permissionsWhereUniqueInput
    /**
     * In case the user_permissions found by the `where` argument doesn't exist, create a new user_permissions with this data.
     */
    create: XOR<user_permissionsCreateInput, user_permissionsUncheckedCreateInput>
    /**
     * In case the user_permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_permissionsUpdateInput, user_permissionsUncheckedUpdateInput>
  }

  /**
   * user_permissions delete
   */
  export type user_permissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    /**
     * Filter which user_permissions to delete.
     */
    where: user_permissionsWhereUniqueInput
  }

  /**
   * user_permissions deleteMany
   */
  export type user_permissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_permissions to delete
     */
    where?: user_permissionsWhereInput
    /**
     * Limit how many user_permissions to delete.
     */
    limit?: number
  }

  /**
   * user_permissions.users
   */
  export type user_permissions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * user_permissions without action
   */
  export type user_permissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    avatarId: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    avatarId: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    avatarId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    avatarId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    avatarId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    avatarId?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    avatarId?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatarId?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatarId?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatarId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    avatarId: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatarId?: boolean
    created_at?: boolean
    updated_at?: boolean
    scrapes?: boolean | users$scrapesArgs<ExtArgs>
    user_permissions?: boolean | users$user_permissionsArgs<ExtArgs>
    tasks?: boolean | users$tasksArgs<ExtArgs>
    emails?: boolean | users$emailsArgs<ExtArgs>
    uploads?: boolean | users$uploadsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatarId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "avatarId" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapes?: boolean | users$scrapesArgs<ExtArgs>
    user_permissions?: boolean | users$user_permissionsArgs<ExtArgs>
    tasks?: boolean | users$tasksArgs<ExtArgs>
    emails?: boolean | users$emailsArgs<ExtArgs>
    uploads?: boolean | users$uploadsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      scrapes: Prisma.$scrapesPayload<ExtArgs>[]
      user_permissions: Prisma.$user_permissionsPayload<ExtArgs>[]
      tasks: Prisma.$tasksPayload<ExtArgs>[]
      emails: Prisma.$emailsPayload<ExtArgs>[]
      uploads: Prisma.$uploadsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      avatarId: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scrapes<T extends users$scrapesArgs<ExtArgs> = {}>(args?: Subset<T, users$scrapesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_permissions<T extends users$user_permissionsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_permissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends users$tasksArgs<ExtArgs> = {}>(args?: Subset<T, users$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emails<T extends users$emailsArgs<ExtArgs> = {}>(args?: Subset<T, users$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    uploads<T extends users$uploadsArgs<ExtArgs> = {}>(args?: Subset<T, users$uploadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly avatarId: FieldRef<"users", 'Int'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.scrapes
   */
  export type users$scrapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    where?: scrapesWhereInput
    orderBy?: scrapesOrderByWithRelationInput | scrapesOrderByWithRelationInput[]
    cursor?: scrapesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScrapesScalarFieldEnum | ScrapesScalarFieldEnum[]
  }

  /**
   * users.user_permissions
   */
  export type users$user_permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_permissions
     */
    select?: user_permissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_permissions
     */
    omit?: user_permissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_permissionsInclude<ExtArgs> | null
    where?: user_permissionsWhereInput
    orderBy?: user_permissionsOrderByWithRelationInput | user_permissionsOrderByWithRelationInput[]
    cursor?: user_permissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_permissionsScalarFieldEnum | User_permissionsScalarFieldEnum[]
  }

  /**
   * users.tasks
   */
  export type users$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    cursor?: tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * users.emails
   */
  export type users$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    where?: emailsWhereInput
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    cursor?: emailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * users.uploads
   */
  export type users$uploadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    where?: uploadsWhereInput
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    cursor?: uploadsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model scrapes
   */

  export type AggregateScrapes = {
    _count: ScrapesCountAggregateOutputType | null
    _avg: ScrapesAvgAggregateOutputType | null
    _sum: ScrapesSumAggregateOutputType | null
    _min: ScrapesMinAggregateOutputType | null
    _max: ScrapesMaxAggregateOutputType | null
  }

  export type ScrapesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ScrapesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type ScrapesMinAggregateOutputType = {
    id: number | null
    task_uid: string | null
    user_id: number | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScrapesMaxAggregateOutputType = {
    id: number | null
    task_uid: string | null
    user_id: number | null
    url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ScrapesCountAggregateOutputType = {
    id: number
    task_uid: number
    user_id: number
    url: number
    result: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ScrapesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ScrapesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type ScrapesMinAggregateInputType = {
    id?: true
    task_uid?: true
    user_id?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ScrapesMaxAggregateInputType = {
    id?: true
    task_uid?: true
    user_id?: true
    url?: true
    created_at?: true
    updated_at?: true
  }

  export type ScrapesCountAggregateInputType = {
    id?: true
    task_uid?: true
    user_id?: true
    url?: true
    result?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ScrapesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scrapes to aggregate.
     */
    where?: scrapesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scrapes to fetch.
     */
    orderBy?: scrapesOrderByWithRelationInput | scrapesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: scrapesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scrapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned scrapes
    **/
    _count?: true | ScrapesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScrapesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScrapesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScrapesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScrapesMaxAggregateInputType
  }

  export type GetScrapesAggregateType<T extends ScrapesAggregateArgs> = {
        [P in keyof T & keyof AggregateScrapes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScrapes[P]>
      : GetScalarType<T[P], AggregateScrapes[P]>
  }




  export type scrapesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scrapesWhereInput
    orderBy?: scrapesOrderByWithAggregationInput | scrapesOrderByWithAggregationInput[]
    by: ScrapesScalarFieldEnum[] | ScrapesScalarFieldEnum
    having?: scrapesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScrapesCountAggregateInputType | true
    _avg?: ScrapesAvgAggregateInputType
    _sum?: ScrapesSumAggregateInputType
    _min?: ScrapesMinAggregateInputType
    _max?: ScrapesMaxAggregateInputType
  }

  export type ScrapesGroupByOutputType = {
    id: number
    task_uid: string
    user_id: number | null
    url: string
    result: JsonValue | null
    created_at: Date | null
    updated_at: Date | null
    _count: ScrapesCountAggregateOutputType | null
    _avg: ScrapesAvgAggregateOutputType | null
    _sum: ScrapesSumAggregateOutputType | null
    _min: ScrapesMinAggregateOutputType | null
    _max: ScrapesMaxAggregateOutputType | null
  }

  type GetScrapesGroupByPayload<T extends scrapesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScrapesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScrapesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScrapesGroupByOutputType[P]>
            : GetScalarType<T[P], ScrapesGroupByOutputType[P]>
        }
      >
    >


  export type scrapesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_uid?: boolean
    user_id?: boolean
    url?: boolean
    result?: boolean
    created_at?: boolean
    updated_at?: boolean
    task?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | scrapes$usersArgs<ExtArgs>
  }, ExtArgs["result"]["scrapes"]>



  export type scrapesSelectScalar = {
    id?: boolean
    task_uid?: boolean
    user_id?: boolean
    url?: boolean
    result?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type scrapesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_uid" | "user_id" | "url" | "result" | "created_at" | "updated_at", ExtArgs["result"]["scrapes"]>
  export type scrapesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | scrapes$usersArgs<ExtArgs>
  }

  export type $scrapesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "scrapes"
    objects: {
      task: Prisma.$tasksPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_uid: string
      user_id: number | null
      url: string
      result: Prisma.JsonValue | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["scrapes"]>
    composites: {}
  }

  type scrapesGetPayload<S extends boolean | null | undefined | scrapesDefaultArgs> = $Result.GetResult<Prisma.$scrapesPayload, S>

  type scrapesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<scrapesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScrapesCountAggregateInputType | true
    }

  export interface scrapesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['scrapes'], meta: { name: 'scrapes' } }
    /**
     * Find zero or one Scrapes that matches the filter.
     * @param {scrapesFindUniqueArgs} args - Arguments to find a Scrapes
     * @example
     * // Get one Scrapes
     * const scrapes = await prisma.scrapes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends scrapesFindUniqueArgs>(args: SelectSubset<T, scrapesFindUniqueArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scrapes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {scrapesFindUniqueOrThrowArgs} args - Arguments to find a Scrapes
     * @example
     * // Get one Scrapes
     * const scrapes = await prisma.scrapes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends scrapesFindUniqueOrThrowArgs>(args: SelectSubset<T, scrapesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scrapes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrapesFindFirstArgs} args - Arguments to find a Scrapes
     * @example
     * // Get one Scrapes
     * const scrapes = await prisma.scrapes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends scrapesFindFirstArgs>(args?: SelectSubset<T, scrapesFindFirstArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scrapes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrapesFindFirstOrThrowArgs} args - Arguments to find a Scrapes
     * @example
     * // Get one Scrapes
     * const scrapes = await prisma.scrapes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends scrapesFindFirstOrThrowArgs>(args?: SelectSubset<T, scrapesFindFirstOrThrowArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scrapes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrapesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scrapes
     * const scrapes = await prisma.scrapes.findMany()
     * 
     * // Get first 10 Scrapes
     * const scrapes = await prisma.scrapes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scrapesWithIdOnly = await prisma.scrapes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends scrapesFindManyArgs>(args?: SelectSubset<T, scrapesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scrapes.
     * @param {scrapesCreateArgs} args - Arguments to create a Scrapes.
     * @example
     * // Create one Scrapes
     * const Scrapes = await prisma.scrapes.create({
     *   data: {
     *     // ... data to create a Scrapes
     *   }
     * })
     * 
     */
    create<T extends scrapesCreateArgs>(args: SelectSubset<T, scrapesCreateArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scrapes.
     * @param {scrapesCreateManyArgs} args - Arguments to create many Scrapes.
     * @example
     * // Create many Scrapes
     * const scrapes = await prisma.scrapes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends scrapesCreateManyArgs>(args?: SelectSubset<T, scrapesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Scrapes.
     * @param {scrapesDeleteArgs} args - Arguments to delete one Scrapes.
     * @example
     * // Delete one Scrapes
     * const Scrapes = await prisma.scrapes.delete({
     *   where: {
     *     // ... filter to delete one Scrapes
     *   }
     * })
     * 
     */
    delete<T extends scrapesDeleteArgs>(args: SelectSubset<T, scrapesDeleteArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scrapes.
     * @param {scrapesUpdateArgs} args - Arguments to update one Scrapes.
     * @example
     * // Update one Scrapes
     * const scrapes = await prisma.scrapes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends scrapesUpdateArgs>(args: SelectSubset<T, scrapesUpdateArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scrapes.
     * @param {scrapesDeleteManyArgs} args - Arguments to filter Scrapes to delete.
     * @example
     * // Delete a few Scrapes
     * const { count } = await prisma.scrapes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends scrapesDeleteManyArgs>(args?: SelectSubset<T, scrapesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scrapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrapesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scrapes
     * const scrapes = await prisma.scrapes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends scrapesUpdateManyArgs>(args: SelectSubset<T, scrapesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Scrapes.
     * @param {scrapesUpsertArgs} args - Arguments to update or create a Scrapes.
     * @example
     * // Update or create a Scrapes
     * const scrapes = await prisma.scrapes.upsert({
     *   create: {
     *     // ... data to create a Scrapes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scrapes we want to update
     *   }
     * })
     */
    upsert<T extends scrapesUpsertArgs>(args: SelectSubset<T, scrapesUpsertArgs<ExtArgs>>): Prisma__scrapesClient<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scrapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrapesCountArgs} args - Arguments to filter Scrapes to count.
     * @example
     * // Count the number of Scrapes
     * const count = await prisma.scrapes.count({
     *   where: {
     *     // ... the filter for the Scrapes we want to count
     *   }
     * })
    **/
    count<T extends scrapesCountArgs>(
      args?: Subset<T, scrapesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScrapesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scrapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScrapesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScrapesAggregateArgs>(args: Subset<T, ScrapesAggregateArgs>): Prisma.PrismaPromise<GetScrapesAggregateType<T>>

    /**
     * Group by Scrapes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scrapesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends scrapesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scrapesGroupByArgs['orderBy'] }
        : { orderBy?: scrapesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, scrapesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScrapesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the scrapes model
   */
  readonly fields: scrapesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for scrapes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scrapesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends scrapes$usersArgs<ExtArgs> = {}>(args?: Subset<T, scrapes$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the scrapes model
   */
  interface scrapesFieldRefs {
    readonly id: FieldRef<"scrapes", 'Int'>
    readonly task_uid: FieldRef<"scrapes", 'String'>
    readonly user_id: FieldRef<"scrapes", 'Int'>
    readonly url: FieldRef<"scrapes", 'String'>
    readonly result: FieldRef<"scrapes", 'Json'>
    readonly created_at: FieldRef<"scrapes", 'DateTime'>
    readonly updated_at: FieldRef<"scrapes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * scrapes findUnique
   */
  export type scrapesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * Filter, which scrapes to fetch.
     */
    where: scrapesWhereUniqueInput
  }

  /**
   * scrapes findUniqueOrThrow
   */
  export type scrapesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * Filter, which scrapes to fetch.
     */
    where: scrapesWhereUniqueInput
  }

  /**
   * scrapes findFirst
   */
  export type scrapesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * Filter, which scrapes to fetch.
     */
    where?: scrapesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scrapes to fetch.
     */
    orderBy?: scrapesOrderByWithRelationInput | scrapesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scrapes.
     */
    cursor?: scrapesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scrapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scrapes.
     */
    distinct?: ScrapesScalarFieldEnum | ScrapesScalarFieldEnum[]
  }

  /**
   * scrapes findFirstOrThrow
   */
  export type scrapesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * Filter, which scrapes to fetch.
     */
    where?: scrapesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scrapes to fetch.
     */
    orderBy?: scrapesOrderByWithRelationInput | scrapesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for scrapes.
     */
    cursor?: scrapesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scrapes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of scrapes.
     */
    distinct?: ScrapesScalarFieldEnum | ScrapesScalarFieldEnum[]
  }

  /**
   * scrapes findMany
   */
  export type scrapesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * Filter, which scrapes to fetch.
     */
    where?: scrapesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of scrapes to fetch.
     */
    orderBy?: scrapesOrderByWithRelationInput | scrapesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing scrapes.
     */
    cursor?: scrapesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` scrapes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` scrapes.
     */
    skip?: number
    distinct?: ScrapesScalarFieldEnum | ScrapesScalarFieldEnum[]
  }

  /**
   * scrapes create
   */
  export type scrapesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * The data needed to create a scrapes.
     */
    data: XOR<scrapesCreateInput, scrapesUncheckedCreateInput>
  }

  /**
   * scrapes createMany
   */
  export type scrapesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many scrapes.
     */
    data: scrapesCreateManyInput | scrapesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * scrapes update
   */
  export type scrapesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * The data needed to update a scrapes.
     */
    data: XOR<scrapesUpdateInput, scrapesUncheckedUpdateInput>
    /**
     * Choose, which scrapes to update.
     */
    where: scrapesWhereUniqueInput
  }

  /**
   * scrapes updateMany
   */
  export type scrapesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update scrapes.
     */
    data: XOR<scrapesUpdateManyMutationInput, scrapesUncheckedUpdateManyInput>
    /**
     * Filter which scrapes to update
     */
    where?: scrapesWhereInput
    /**
     * Limit how many scrapes to update.
     */
    limit?: number
  }

  /**
   * scrapes upsert
   */
  export type scrapesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * The filter to search for the scrapes to update in case it exists.
     */
    where: scrapesWhereUniqueInput
    /**
     * In case the scrapes found by the `where` argument doesn't exist, create a new scrapes with this data.
     */
    create: XOR<scrapesCreateInput, scrapesUncheckedCreateInput>
    /**
     * In case the scrapes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scrapesUpdateInput, scrapesUncheckedUpdateInput>
  }

  /**
   * scrapes delete
   */
  export type scrapesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    /**
     * Filter which scrapes to delete.
     */
    where: scrapesWhereUniqueInput
  }

  /**
   * scrapes deleteMany
   */
  export type scrapesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which scrapes to delete
     */
    where?: scrapesWhereInput
    /**
     * Limit how many scrapes to delete.
     */
    limit?: number
  }

  /**
   * scrapes.users
   */
  export type scrapes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * scrapes without action
   */
  export type scrapesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
  }


  /**
   * Model emails
   */

  export type AggregateEmails = {
    _count: EmailsCountAggregateOutputType | null
    _avg: EmailsAvgAggregateOutputType | null
    _sum: EmailsSumAggregateOutputType | null
    _min: EmailsMinAggregateOutputType | null
    _max: EmailsMaxAggregateOutputType | null
  }

  export type EmailsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type EmailsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type EmailsMinAggregateOutputType = {
    id: number | null
    task_uid: string | null
    user_id: number | null
    to: string | null
    from: string | null
    subject: string | null
    body: string | null
    sent_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EmailsMaxAggregateOutputType = {
    id: number | null
    task_uid: string | null
    user_id: number | null
    to: string | null
    from: string | null
    subject: string | null
    body: string | null
    sent_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type EmailsCountAggregateOutputType = {
    id: number
    task_uid: number
    user_id: number
    to: number
    from: number
    subject: number
    body: number
    sent_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type EmailsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type EmailsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type EmailsMinAggregateInputType = {
    id?: true
    task_uid?: true
    user_id?: true
    to?: true
    from?: true
    subject?: true
    body?: true
    sent_at?: true
    created_at?: true
    updated_at?: true
  }

  export type EmailsMaxAggregateInputType = {
    id?: true
    task_uid?: true
    user_id?: true
    to?: true
    from?: true
    subject?: true
    body?: true
    sent_at?: true
    created_at?: true
    updated_at?: true
  }

  export type EmailsCountAggregateInputType = {
    id?: true
    task_uid?: true
    user_id?: true
    to?: true
    from?: true
    subject?: true
    body?: true
    sent_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type EmailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emails to aggregate.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned emails
    **/
    _count?: true | EmailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailsMaxAggregateInputType
  }

  export type GetEmailsAggregateType<T extends EmailsAggregateArgs> = {
        [P in keyof T & keyof AggregateEmails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmails[P]>
      : GetScalarType<T[P], AggregateEmails[P]>
  }




  export type emailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: emailsWhereInput
    orderBy?: emailsOrderByWithAggregationInput | emailsOrderByWithAggregationInput[]
    by: EmailsScalarFieldEnum[] | EmailsScalarFieldEnum
    having?: emailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailsCountAggregateInputType | true
    _avg?: EmailsAvgAggregateInputType
    _sum?: EmailsSumAggregateInputType
    _min?: EmailsMinAggregateInputType
    _max?: EmailsMaxAggregateInputType
  }

  export type EmailsGroupByOutputType = {
    id: number
    task_uid: string
    user_id: number | null
    to: string
    from: string
    subject: string
    body: string | null
    sent_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: EmailsCountAggregateOutputType | null
    _avg: EmailsAvgAggregateOutputType | null
    _sum: EmailsSumAggregateOutputType | null
    _min: EmailsMinAggregateOutputType | null
    _max: EmailsMaxAggregateOutputType | null
  }

  type GetEmailsGroupByPayload<T extends emailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailsGroupByOutputType[P]>
            : GetScalarType<T[P], EmailsGroupByOutputType[P]>
        }
      >
    >


  export type emailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_uid?: boolean
    user_id?: boolean
    to?: boolean
    from?: boolean
    subject?: boolean
    body?: boolean
    sent_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    task?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | emails$usersArgs<ExtArgs>
  }, ExtArgs["result"]["emails"]>



  export type emailsSelectScalar = {
    id?: boolean
    task_uid?: boolean
    user_id?: boolean
    to?: boolean
    from?: boolean
    subject?: boolean
    body?: boolean
    sent_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type emailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_uid" | "user_id" | "to" | "from" | "subject" | "body" | "sent_at" | "created_at" | "updated_at", ExtArgs["result"]["emails"]>
  export type emailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | tasksDefaultArgs<ExtArgs>
    users?: boolean | emails$usersArgs<ExtArgs>
  }

  export type $emailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "emails"
    objects: {
      task: Prisma.$tasksPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_uid: string
      user_id: number | null
      to: string
      from: string
      subject: string
      body: string | null
      sent_at: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["emails"]>
    composites: {}
  }

  type emailsGetPayload<S extends boolean | null | undefined | emailsDefaultArgs> = $Result.GetResult<Prisma.$emailsPayload, S>

  type emailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<emailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailsCountAggregateInputType | true
    }

  export interface emailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['emails'], meta: { name: 'emails' } }
    /**
     * Find zero or one Emails that matches the filter.
     * @param {emailsFindUniqueArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends emailsFindUniqueArgs>(args: SelectSubset<T, emailsFindUniqueArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {emailsFindUniqueOrThrowArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends emailsFindUniqueOrThrowArgs>(args: SelectSubset<T, emailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsFindFirstArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends emailsFindFirstArgs>(args?: SelectSubset<T, emailsFindFirstArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsFindFirstOrThrowArgs} args - Arguments to find a Emails
     * @example
     * // Get one Emails
     * const emails = await prisma.emails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends emailsFindFirstOrThrowArgs>(args?: SelectSubset<T, emailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emails
     * const emails = await prisma.emails.findMany()
     * 
     * // Get first 10 Emails
     * const emails = await prisma.emails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailsWithIdOnly = await prisma.emails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends emailsFindManyArgs>(args?: SelectSubset<T, emailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emails.
     * @param {emailsCreateArgs} args - Arguments to create a Emails.
     * @example
     * // Create one Emails
     * const Emails = await prisma.emails.create({
     *   data: {
     *     // ... data to create a Emails
     *   }
     * })
     * 
     */
    create<T extends emailsCreateArgs>(args: SelectSubset<T, emailsCreateArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emails.
     * @param {emailsCreateManyArgs} args - Arguments to create many Emails.
     * @example
     * // Create many Emails
     * const emails = await prisma.emails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends emailsCreateManyArgs>(args?: SelectSubset<T, emailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Emails.
     * @param {emailsDeleteArgs} args - Arguments to delete one Emails.
     * @example
     * // Delete one Emails
     * const Emails = await prisma.emails.delete({
     *   where: {
     *     // ... filter to delete one Emails
     *   }
     * })
     * 
     */
    delete<T extends emailsDeleteArgs>(args: SelectSubset<T, emailsDeleteArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emails.
     * @param {emailsUpdateArgs} args - Arguments to update one Emails.
     * @example
     * // Update one Emails
     * const emails = await prisma.emails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends emailsUpdateArgs>(args: SelectSubset<T, emailsUpdateArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emails.
     * @param {emailsDeleteManyArgs} args - Arguments to filter Emails to delete.
     * @example
     * // Delete a few Emails
     * const { count } = await prisma.emails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends emailsDeleteManyArgs>(args?: SelectSubset<T, emailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emails
     * const emails = await prisma.emails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends emailsUpdateManyArgs>(args: SelectSubset<T, emailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Emails.
     * @param {emailsUpsertArgs} args - Arguments to update or create a Emails.
     * @example
     * // Update or create a Emails
     * const emails = await prisma.emails.upsert({
     *   create: {
     *     // ... data to create a Emails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emails we want to update
     *   }
     * })
     */
    upsert<T extends emailsUpsertArgs>(args: SelectSubset<T, emailsUpsertArgs<ExtArgs>>): Prisma__emailsClient<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsCountArgs} args - Arguments to filter Emails to count.
     * @example
     * // Count the number of Emails
     * const count = await prisma.emails.count({
     *   where: {
     *     // ... the filter for the Emails we want to count
     *   }
     * })
    **/
    count<T extends emailsCountArgs>(
      args?: Subset<T, emailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailsAggregateArgs>(args: Subset<T, EmailsAggregateArgs>): Prisma.PrismaPromise<GetEmailsAggregateType<T>>

    /**
     * Group by Emails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {emailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends emailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: emailsGroupByArgs['orderBy'] }
        : { orderBy?: emailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, emailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the emails model
   */
  readonly fields: emailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for emails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__emailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tasksDefaultArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends emails$usersArgs<ExtArgs> = {}>(args?: Subset<T, emails$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the emails model
   */
  interface emailsFieldRefs {
    readonly id: FieldRef<"emails", 'Int'>
    readonly task_uid: FieldRef<"emails", 'String'>
    readonly user_id: FieldRef<"emails", 'Int'>
    readonly to: FieldRef<"emails", 'String'>
    readonly from: FieldRef<"emails", 'String'>
    readonly subject: FieldRef<"emails", 'String'>
    readonly body: FieldRef<"emails", 'String'>
    readonly sent_at: FieldRef<"emails", 'DateTime'>
    readonly created_at: FieldRef<"emails", 'DateTime'>
    readonly updated_at: FieldRef<"emails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * emails findUnique
   */
  export type emailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails findUniqueOrThrow
   */
  export type emailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails findFirst
   */
  export type emailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails.
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails.
     */
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * emails findFirstOrThrow
   */
  export type emailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for emails.
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of emails.
     */
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * emails findMany
   */
  export type emailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter, which emails to fetch.
     */
    where?: emailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of emails to fetch.
     */
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing emails.
     */
    cursor?: emailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` emails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` emails.
     */
    skip?: number
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * emails create
   */
  export type emailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * The data needed to create a emails.
     */
    data: XOR<emailsCreateInput, emailsUncheckedCreateInput>
  }

  /**
   * emails createMany
   */
  export type emailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many emails.
     */
    data: emailsCreateManyInput | emailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * emails update
   */
  export type emailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * The data needed to update a emails.
     */
    data: XOR<emailsUpdateInput, emailsUncheckedUpdateInput>
    /**
     * Choose, which emails to update.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails updateMany
   */
  export type emailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update emails.
     */
    data: XOR<emailsUpdateManyMutationInput, emailsUncheckedUpdateManyInput>
    /**
     * Filter which emails to update
     */
    where?: emailsWhereInput
    /**
     * Limit how many emails to update.
     */
    limit?: number
  }

  /**
   * emails upsert
   */
  export type emailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * The filter to search for the emails to update in case it exists.
     */
    where: emailsWhereUniqueInput
    /**
     * In case the emails found by the `where` argument doesn't exist, create a new emails with this data.
     */
    create: XOR<emailsCreateInput, emailsUncheckedCreateInput>
    /**
     * In case the emails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<emailsUpdateInput, emailsUncheckedUpdateInput>
  }

  /**
   * emails delete
   */
  export type emailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    /**
     * Filter which emails to delete.
     */
    where: emailsWhereUniqueInput
  }

  /**
   * emails deleteMany
   */
  export type emailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which emails to delete
     */
    where?: emailsWhereInput
    /**
     * Limit how many emails to delete.
     */
    limit?: number
  }

  /**
   * emails.users
   */
  export type emails$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * emails without action
   */
  export type emailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
  }


  /**
   * Model tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    id: number | null
    usersId: number | null
  }

  export type TasksSumAggregateOutputType = {
    id: number | null
    usersId: number | null
  }

  export type TasksMinAggregateOutputType = {
    id: number | null
    uid: string | null
    type: string | null
    status: string | null
    error: string | null
    started_at: Date | null
    finished_at: Date | null
    usersId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    type: string | null
    status: string | null
    error: string | null
    started_at: Date | null
    finished_at: Date | null
    usersId: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    uid: number
    type: number
    status: number
    data: number
    error: number
    started_at: number
    finished_at: number
    usersId: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    id?: true
    usersId?: true
  }

  export type TasksSumAggregateInputType = {
    id?: true
    usersId?: true
  }

  export type TasksMinAggregateInputType = {
    id?: true
    uid?: true
    type?: true
    status?: true
    error?: true
    started_at?: true
    finished_at?: true
    usersId?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    uid?: true
    type?: true
    status?: true
    error?: true
    started_at?: true
    finished_at?: true
    usersId?: true
    created_at?: true
    updated_at?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    uid?: true
    type?: true
    status?: true
    data?: true
    error?: true
    started_at?: true
    finished_at?: true
    usersId?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to aggregate.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tasksWhereInput
    orderBy?: tasksOrderByWithAggregationInput | tasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: number
    uid: string
    type: string
    status: string
    data: JsonValue | null
    error: string | null
    started_at: Date | null
    finished_at: Date | null
    usersId: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    type?: boolean
    status?: boolean
    data?: boolean
    error?: boolean
    started_at?: boolean
    finished_at?: boolean
    usersId?: boolean
    created_at?: boolean
    updated_at?: boolean
    scrapes?: boolean | tasks$scrapesArgs<ExtArgs>
    emails?: boolean | tasks$emailsArgs<ExtArgs>
    users?: boolean | tasks$usersArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>



  export type tasksSelectScalar = {
    id?: boolean
    uid?: boolean
    type?: boolean
    status?: boolean
    data?: boolean
    error?: boolean
    started_at?: boolean
    finished_at?: boolean
    usersId?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uid" | "type" | "status" | "data" | "error" | "started_at" | "finished_at" | "usersId" | "created_at" | "updated_at", ExtArgs["result"]["tasks"]>
  export type tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scrapes?: boolean | tasks$scrapesArgs<ExtArgs>
    emails?: boolean | tasks$emailsArgs<ExtArgs>
    users?: boolean | tasks$usersArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tasks"
    objects: {
      scrapes: Prisma.$scrapesPayload<ExtArgs>[]
      emails: Prisma.$emailsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      type: string
      status: string
      data: Prisma.JsonValue | null
      error: string | null
      started_at: Date | null
      finished_at: Date | null
      usersId: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type tasksGetPayload<S extends boolean | null | undefined | tasksDefaultArgs> = $Result.GetResult<Prisma.$tasksPayload, S>

  type tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tasks'], meta: { name: 'tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {tasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tasksFindUniqueArgs>(args: SelectSubset<T, tasksFindUniqueArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tasksFindFirstArgs>(args?: SelectSubset<T, tasksFindFirstArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tasksFindManyArgs>(args?: SelectSubset<T, tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {tasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends tasksCreateArgs>(args: SelectSubset<T, tasksCreateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {tasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tasksCreateManyArgs>(args?: SelectSubset<T, tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tasks.
     * @param {tasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends tasksDeleteArgs>(args: SelectSubset<T, tasksDeleteArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {tasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tasksUpdateArgs>(args: SelectSubset<T, tasksUpdateArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {tasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tasksDeleteManyArgs>(args?: SelectSubset<T, tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tasksUpdateManyArgs>(args: SelectSubset<T, tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tasks.
     * @param {tasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends tasksUpsertArgs>(args: SelectSubset<T, tasksUpsertArgs<ExtArgs>>): Prisma__tasksClient<$Result.GetResult<Prisma.$tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends tasksCountArgs>(
      args?: Subset<T, tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tasksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tasksGroupByArgs['orderBy'] }
        : { orderBy?: tasksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tasks model
   */
  readonly fields: tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    scrapes<T extends tasks$scrapesArgs<ExtArgs> = {}>(args?: Subset<T, tasks$scrapesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$scrapesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emails<T extends tasks$emailsArgs<ExtArgs> = {}>(args?: Subset<T, tasks$emailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$emailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends tasks$usersArgs<ExtArgs> = {}>(args?: Subset<T, tasks$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tasks model
   */
  interface tasksFieldRefs {
    readonly id: FieldRef<"tasks", 'Int'>
    readonly uid: FieldRef<"tasks", 'String'>
    readonly type: FieldRef<"tasks", 'String'>
    readonly status: FieldRef<"tasks", 'String'>
    readonly data: FieldRef<"tasks", 'Json'>
    readonly error: FieldRef<"tasks", 'String'>
    readonly started_at: FieldRef<"tasks", 'DateTime'>
    readonly finished_at: FieldRef<"tasks", 'DateTime'>
    readonly usersId: FieldRef<"tasks", 'Int'>
    readonly created_at: FieldRef<"tasks", 'DateTime'>
    readonly updated_at: FieldRef<"tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tasks findUnique
   */
  export type tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findUniqueOrThrow
   */
  export type tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks findFirst
   */
  export type tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findFirstOrThrow
   */
  export type tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks findMany
   */
  export type tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter, which tasks to fetch.
     */
    where?: tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tasks to fetch.
     */
    orderBy?: tasksOrderByWithRelationInput | tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tasks.
     */
    cursor?: tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * tasks create
   */
  export type tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a tasks.
     */
    data: XOR<tasksCreateInput, tasksUncheckedCreateInput>
  }

  /**
   * tasks createMany
   */
  export type tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: tasksCreateManyInput | tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tasks update
   */
  export type tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a tasks.
     */
    data: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
    /**
     * Choose, which tasks to update.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks updateMany
   */
  export type tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyInput>
    /**
     * Filter which tasks to update
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to update.
     */
    limit?: number
  }

  /**
   * tasks upsert
   */
  export type tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the tasks to update in case it exists.
     */
    where: tasksWhereUniqueInput
    /**
     * In case the tasks found by the `where` argument doesn't exist, create a new tasks with this data.
     */
    create: XOR<tasksCreateInput, tasksUncheckedCreateInput>
    /**
     * In case the tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tasksUpdateInput, tasksUncheckedUpdateInput>
  }

  /**
   * tasks delete
   */
  export type tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
    /**
     * Filter which tasks to delete.
     */
    where: tasksWhereUniqueInput
  }

  /**
   * tasks deleteMany
   */
  export type tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: tasksWhereInput
    /**
     * Limit how many tasks to delete.
     */
    limit?: number
  }

  /**
   * tasks.scrapes
   */
  export type tasks$scrapesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the scrapes
     */
    select?: scrapesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the scrapes
     */
    omit?: scrapesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: scrapesInclude<ExtArgs> | null
    where?: scrapesWhereInput
    orderBy?: scrapesOrderByWithRelationInput | scrapesOrderByWithRelationInput[]
    cursor?: scrapesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScrapesScalarFieldEnum | ScrapesScalarFieldEnum[]
  }

  /**
   * tasks.emails
   */
  export type tasks$emailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the emails
     */
    select?: emailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the emails
     */
    omit?: emailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: emailsInclude<ExtArgs> | null
    where?: emailsWhereInput
    orderBy?: emailsOrderByWithRelationInput | emailsOrderByWithRelationInput[]
    cursor?: emailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailsScalarFieldEnum | EmailsScalarFieldEnum[]
  }

  /**
   * tasks.users
   */
  export type tasks$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * tasks without action
   */
  export type tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tasks
     */
    select?: tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tasks
     */
    omit?: tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tasksInclude<ExtArgs> | null
  }


  /**
   * Model uploads
   */

  export type AggregateUploads = {
    _count: UploadsCountAggregateOutputType | null
    _avg: UploadsAvgAggregateOutputType | null
    _sum: UploadsSumAggregateOutputType | null
    _min: UploadsMinAggregateOutputType | null
    _max: UploadsMaxAggregateOutputType | null
  }

  export type UploadsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    size: number | null
  }

  export type UploadsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    size: number | null
  }

  export type UploadsMinAggregateOutputType = {
    id: number | null
    uid: string | null
    user_id: number | null
    type: string | null
    filename: string | null
    filepath: string | null
    publicpath: string | null
    mimetype: string | null
    size: number | null
    created_at: Date | null
  }

  export type UploadsMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    user_id: number | null
    type: string | null
    filename: string | null
    filepath: string | null
    publicpath: string | null
    mimetype: string | null
    size: number | null
    created_at: Date | null
  }

  export type UploadsCountAggregateOutputType = {
    id: number
    uid: number
    user_id: number
    type: number
    filename: number
    filepath: number
    publicpath: number
    mimetype: number
    size: number
    created_at: number
    _all: number
  }


  export type UploadsAvgAggregateInputType = {
    id?: true
    user_id?: true
    size?: true
  }

  export type UploadsSumAggregateInputType = {
    id?: true
    user_id?: true
    size?: true
  }

  export type UploadsMinAggregateInputType = {
    id?: true
    uid?: true
    user_id?: true
    type?: true
    filename?: true
    filepath?: true
    publicpath?: true
    mimetype?: true
    size?: true
    created_at?: true
  }

  export type UploadsMaxAggregateInputType = {
    id?: true
    uid?: true
    user_id?: true
    type?: true
    filename?: true
    filepath?: true
    publicpath?: true
    mimetype?: true
    size?: true
    created_at?: true
  }

  export type UploadsCountAggregateInputType = {
    id?: true
    uid?: true
    user_id?: true
    type?: true
    filename?: true
    filepath?: true
    publicpath?: true
    mimetype?: true
    size?: true
    created_at?: true
    _all?: true
  }

  export type UploadsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uploads to aggregate.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned uploads
    **/
    _count?: true | UploadsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UploadsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UploadsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UploadsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UploadsMaxAggregateInputType
  }

  export type GetUploadsAggregateType<T extends UploadsAggregateArgs> = {
        [P in keyof T & keyof AggregateUploads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUploads[P]>
      : GetScalarType<T[P], AggregateUploads[P]>
  }




  export type uploadsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: uploadsWhereInput
    orderBy?: uploadsOrderByWithAggregationInput | uploadsOrderByWithAggregationInput[]
    by: UploadsScalarFieldEnum[] | UploadsScalarFieldEnum
    having?: uploadsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UploadsCountAggregateInputType | true
    _avg?: UploadsAvgAggregateInputType
    _sum?: UploadsSumAggregateInputType
    _min?: UploadsMinAggregateInputType
    _max?: UploadsMaxAggregateInputType
  }

  export type UploadsGroupByOutputType = {
    id: number
    uid: string
    user_id: number | null
    type: string
    filename: string
    filepath: string
    publicpath: string
    mimetype: string | null
    size: number | null
    created_at: Date
    _count: UploadsCountAggregateOutputType | null
    _avg: UploadsAvgAggregateOutputType | null
    _sum: UploadsSumAggregateOutputType | null
    _min: UploadsMinAggregateOutputType | null
    _max: UploadsMaxAggregateOutputType | null
  }

  type GetUploadsGroupByPayload<T extends uploadsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UploadsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UploadsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UploadsGroupByOutputType[P]>
            : GetScalarType<T[P], UploadsGroupByOutputType[P]>
        }
      >
    >


  export type uploadsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    user_id?: boolean
    type?: boolean
    filename?: boolean
    filepath?: boolean
    publicpath?: boolean
    mimetype?: boolean
    size?: boolean
    created_at?: boolean
    user?: boolean | uploads$userArgs<ExtArgs>
  }, ExtArgs["result"]["uploads"]>



  export type uploadsSelectScalar = {
    id?: boolean
    uid?: boolean
    user_id?: boolean
    type?: boolean
    filename?: boolean
    filepath?: boolean
    publicpath?: boolean
    mimetype?: boolean
    size?: boolean
    created_at?: boolean
  }

  export type uploadsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uid" | "user_id" | "type" | "filename" | "filepath" | "publicpath" | "mimetype" | "size" | "created_at", ExtArgs["result"]["uploads"]>
  export type uploadsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | uploads$userArgs<ExtArgs>
  }

  export type $uploadsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "uploads"
    objects: {
      user: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      user_id: number | null
      type: string
      filename: string
      filepath: string
      publicpath: string
      mimetype: string | null
      size: number | null
      created_at: Date
    }, ExtArgs["result"]["uploads"]>
    composites: {}
  }

  type uploadsGetPayload<S extends boolean | null | undefined | uploadsDefaultArgs> = $Result.GetResult<Prisma.$uploadsPayload, S>

  type uploadsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<uploadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UploadsCountAggregateInputType | true
    }

  export interface uploadsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['uploads'], meta: { name: 'uploads' } }
    /**
     * Find zero or one Uploads that matches the filter.
     * @param {uploadsFindUniqueArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends uploadsFindUniqueArgs>(args: SelectSubset<T, uploadsFindUniqueArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Uploads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {uploadsFindUniqueOrThrowArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends uploadsFindUniqueOrThrowArgs>(args: SelectSubset<T, uploadsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsFindFirstArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends uploadsFindFirstArgs>(args?: SelectSubset<T, uploadsFindFirstArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Uploads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsFindFirstOrThrowArgs} args - Arguments to find a Uploads
     * @example
     * // Get one Uploads
     * const uploads = await prisma.uploads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends uploadsFindFirstOrThrowArgs>(args?: SelectSubset<T, uploadsFindFirstOrThrowArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Uploads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Uploads
     * const uploads = await prisma.uploads.findMany()
     * 
     * // Get first 10 Uploads
     * const uploads = await prisma.uploads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uploadsWithIdOnly = await prisma.uploads.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends uploadsFindManyArgs>(args?: SelectSubset<T, uploadsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Uploads.
     * @param {uploadsCreateArgs} args - Arguments to create a Uploads.
     * @example
     * // Create one Uploads
     * const Uploads = await prisma.uploads.create({
     *   data: {
     *     // ... data to create a Uploads
     *   }
     * })
     * 
     */
    create<T extends uploadsCreateArgs>(args: SelectSubset<T, uploadsCreateArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Uploads.
     * @param {uploadsCreateManyArgs} args - Arguments to create many Uploads.
     * @example
     * // Create many Uploads
     * const uploads = await prisma.uploads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends uploadsCreateManyArgs>(args?: SelectSubset<T, uploadsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Uploads.
     * @param {uploadsDeleteArgs} args - Arguments to delete one Uploads.
     * @example
     * // Delete one Uploads
     * const Uploads = await prisma.uploads.delete({
     *   where: {
     *     // ... filter to delete one Uploads
     *   }
     * })
     * 
     */
    delete<T extends uploadsDeleteArgs>(args: SelectSubset<T, uploadsDeleteArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Uploads.
     * @param {uploadsUpdateArgs} args - Arguments to update one Uploads.
     * @example
     * // Update one Uploads
     * const uploads = await prisma.uploads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends uploadsUpdateArgs>(args: SelectSubset<T, uploadsUpdateArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Uploads.
     * @param {uploadsDeleteManyArgs} args - Arguments to filter Uploads to delete.
     * @example
     * // Delete a few Uploads
     * const { count } = await prisma.uploads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends uploadsDeleteManyArgs>(args?: SelectSubset<T, uploadsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Uploads
     * const uploads = await prisma.uploads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends uploadsUpdateManyArgs>(args: SelectSubset<T, uploadsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Uploads.
     * @param {uploadsUpsertArgs} args - Arguments to update or create a Uploads.
     * @example
     * // Update or create a Uploads
     * const uploads = await prisma.uploads.upsert({
     *   create: {
     *     // ... data to create a Uploads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Uploads we want to update
     *   }
     * })
     */
    upsert<T extends uploadsUpsertArgs>(args: SelectSubset<T, uploadsUpsertArgs<ExtArgs>>): Prisma__uploadsClient<$Result.GetResult<Prisma.$uploadsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsCountArgs} args - Arguments to filter Uploads to count.
     * @example
     * // Count the number of Uploads
     * const count = await prisma.uploads.count({
     *   where: {
     *     // ... the filter for the Uploads we want to count
     *   }
     * })
    **/
    count<T extends uploadsCountArgs>(
      args?: Subset<T, uploadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UploadsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UploadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UploadsAggregateArgs>(args: Subset<T, UploadsAggregateArgs>): Prisma.PrismaPromise<GetUploadsAggregateType<T>>

    /**
     * Group by Uploads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {uploadsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends uploadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: uploadsGroupByArgs['orderBy'] }
        : { orderBy?: uploadsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, uploadsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUploadsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the uploads model
   */
  readonly fields: uploadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for uploads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__uploadsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends uploads$userArgs<ExtArgs> = {}>(args?: Subset<T, uploads$userArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the uploads model
   */
  interface uploadsFieldRefs {
    readonly id: FieldRef<"uploads", 'Int'>
    readonly uid: FieldRef<"uploads", 'String'>
    readonly user_id: FieldRef<"uploads", 'Int'>
    readonly type: FieldRef<"uploads", 'String'>
    readonly filename: FieldRef<"uploads", 'String'>
    readonly filepath: FieldRef<"uploads", 'String'>
    readonly publicpath: FieldRef<"uploads", 'String'>
    readonly mimetype: FieldRef<"uploads", 'String'>
    readonly size: FieldRef<"uploads", 'Int'>
    readonly created_at: FieldRef<"uploads", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * uploads findUnique
   */
  export type uploadsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads findUniqueOrThrow
   */
  export type uploadsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads findFirst
   */
  export type uploadsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uploads.
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uploads.
     */
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * uploads findFirstOrThrow
   */
  export type uploadsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for uploads.
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of uploads.
     */
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * uploads findMany
   */
  export type uploadsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter, which uploads to fetch.
     */
    where?: uploadsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of uploads to fetch.
     */
    orderBy?: uploadsOrderByWithRelationInput | uploadsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing uploads.
     */
    cursor?: uploadsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` uploads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` uploads.
     */
    skip?: number
    distinct?: UploadsScalarFieldEnum | UploadsScalarFieldEnum[]
  }

  /**
   * uploads create
   */
  export type uploadsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * The data needed to create a uploads.
     */
    data: XOR<uploadsCreateInput, uploadsUncheckedCreateInput>
  }

  /**
   * uploads createMany
   */
  export type uploadsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many uploads.
     */
    data: uploadsCreateManyInput | uploadsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * uploads update
   */
  export type uploadsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * The data needed to update a uploads.
     */
    data: XOR<uploadsUpdateInput, uploadsUncheckedUpdateInput>
    /**
     * Choose, which uploads to update.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads updateMany
   */
  export type uploadsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update uploads.
     */
    data: XOR<uploadsUpdateManyMutationInput, uploadsUncheckedUpdateManyInput>
    /**
     * Filter which uploads to update
     */
    where?: uploadsWhereInput
    /**
     * Limit how many uploads to update.
     */
    limit?: number
  }

  /**
   * uploads upsert
   */
  export type uploadsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * The filter to search for the uploads to update in case it exists.
     */
    where: uploadsWhereUniqueInput
    /**
     * In case the uploads found by the `where` argument doesn't exist, create a new uploads with this data.
     */
    create: XOR<uploadsCreateInput, uploadsUncheckedCreateInput>
    /**
     * In case the uploads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<uploadsUpdateInput, uploadsUncheckedUpdateInput>
  }

  /**
   * uploads delete
   */
  export type uploadsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
    /**
     * Filter which uploads to delete.
     */
    where: uploadsWhereUniqueInput
  }

  /**
   * uploads deleteMany
   */
  export type uploadsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which uploads to delete
     */
    where?: uploadsWhereInput
    /**
     * Limit how many uploads to delete.
     */
    limit?: number
  }

  /**
   * uploads.user
   */
  export type uploads$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * uploads without action
   */
  export type uploadsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the uploads
     */
    select?: uploadsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the uploads
     */
    omit?: uploadsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: uploadsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_permissionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    permissions: 'permissions',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type User_permissionsScalarFieldEnum = (typeof User_permissionsScalarFieldEnum)[keyof typeof User_permissionsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    avatarId: 'avatarId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ScrapesScalarFieldEnum: {
    id: 'id',
    task_uid: 'task_uid',
    user_id: 'user_id',
    url: 'url',
    result: 'result',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ScrapesScalarFieldEnum = (typeof ScrapesScalarFieldEnum)[keyof typeof ScrapesScalarFieldEnum]


  export const EmailsScalarFieldEnum: {
    id: 'id',
    task_uid: 'task_uid',
    user_id: 'user_id',
    to: 'to',
    from: 'from',
    subject: 'subject',
    body: 'body',
    sent_at: 'sent_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type EmailsScalarFieldEnum = (typeof EmailsScalarFieldEnum)[keyof typeof EmailsScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    type: 'type',
    status: 'status',
    data: 'data',
    error: 'error',
    started_at: 'started_at',
    finished_at: 'finished_at',
    usersId: 'usersId',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const UploadsScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    user_id: 'user_id',
    type: 'type',
    filename: 'filename',
    filepath: 'filepath',
    publicpath: 'publicpath',
    mimetype: 'mimetype',
    size: 'size',
    created_at: 'created_at'
  };

  export type UploadsScalarFieldEnum = (typeof UploadsScalarFieldEnum)[keyof typeof UploadsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const scrapesOrderByRelevanceFieldEnum: {
    task_uid: 'task_uid',
    url: 'url'
  };

  export type scrapesOrderByRelevanceFieldEnum = (typeof scrapesOrderByRelevanceFieldEnum)[keyof typeof scrapesOrderByRelevanceFieldEnum]


  export const emailsOrderByRelevanceFieldEnum: {
    task_uid: 'task_uid',
    to: 'to',
    from: 'from',
    subject: 'subject',
    body: 'body'
  };

  export type emailsOrderByRelevanceFieldEnum = (typeof emailsOrderByRelevanceFieldEnum)[keyof typeof emailsOrderByRelevanceFieldEnum]


  export const tasksOrderByRelevanceFieldEnum: {
    uid: 'uid',
    type: 'type',
    status: 'status',
    error: 'error'
  };

  export type tasksOrderByRelevanceFieldEnum = (typeof tasksOrderByRelevanceFieldEnum)[keyof typeof tasksOrderByRelevanceFieldEnum]


  export const uploadsOrderByRelevanceFieldEnum: {
    uid: 'uid',
    type: 'type',
    filename: 'filename',
    filepath: 'filepath',
    publicpath: 'publicpath',
    mimetype: 'mimetype'
  };

  export type uploadsOrderByRelevanceFieldEnum = (typeof uploadsOrderByRelevanceFieldEnum)[keyof typeof uploadsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type user_permissionsWhereInput = {
    AND?: user_permissionsWhereInput | user_permissionsWhereInput[]
    OR?: user_permissionsWhereInput[]
    NOT?: user_permissionsWhereInput | user_permissionsWhereInput[]
    id?: IntFilter<"user_permissions"> | number
    user_id?: IntNullableFilter<"user_permissions"> | number | null
    permissions?: JsonNullableFilter<"user_permissions">
    created_at?: DateTimeNullableFilter<"user_permissions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_permissions"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type user_permissionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type user_permissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: user_permissionsWhereInput | user_permissionsWhereInput[]
    OR?: user_permissionsWhereInput[]
    NOT?: user_permissionsWhereInput | user_permissionsWhereInput[]
    user_id?: IntNullableFilter<"user_permissions"> | number | null
    permissions?: JsonNullableFilter<"user_permissions">
    created_at?: DateTimeNullableFilter<"user_permissions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_permissions"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type user_permissionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    permissions?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: user_permissionsCountOrderByAggregateInput
    _avg?: user_permissionsAvgOrderByAggregateInput
    _max?: user_permissionsMaxOrderByAggregateInput
    _min?: user_permissionsMinOrderByAggregateInput
    _sum?: user_permissionsSumOrderByAggregateInput
  }

  export type user_permissionsScalarWhereWithAggregatesInput = {
    AND?: user_permissionsScalarWhereWithAggregatesInput | user_permissionsScalarWhereWithAggregatesInput[]
    OR?: user_permissionsScalarWhereWithAggregatesInput[]
    NOT?: user_permissionsScalarWhereWithAggregatesInput | user_permissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user_permissions"> | number
    user_id?: IntNullableWithAggregatesFilter<"user_permissions"> | number | null
    permissions?: JsonNullableWithAggregatesFilter<"user_permissions">
    created_at?: DateTimeNullableWithAggregatesFilter<"user_permissions"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"user_permissions"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    avatarId?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    scrapes?: ScrapesListRelationFilter
    user_permissions?: User_permissionsListRelationFilter
    tasks?: TasksListRelationFilter
    emails?: EmailsListRelationFilter
    uploads?: UploadsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    scrapes?: scrapesOrderByRelationAggregateInput
    user_permissions?: user_permissionsOrderByRelationAggregateInput
    tasks?: tasksOrderByRelationAggregateInput
    emails?: emailsOrderByRelationAggregateInput
    uploads?: uploadsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    avatarId?: IntNullableFilter<"users"> | number | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    scrapes?: ScrapesListRelationFilter
    user_permissions?: User_permissionsListRelationFilter
    tasks?: TasksListRelationFilter
    emails?: EmailsListRelationFilter
    uploads?: UploadsListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    avatarId?: IntNullableWithAggregatesFilter<"users"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type scrapesWhereInput = {
    AND?: scrapesWhereInput | scrapesWhereInput[]
    OR?: scrapesWhereInput[]
    NOT?: scrapesWhereInput | scrapesWhereInput[]
    id?: IntFilter<"scrapes"> | number
    task_uid?: StringFilter<"scrapes"> | string
    user_id?: IntNullableFilter<"scrapes"> | number | null
    url?: StringFilter<"scrapes"> | string
    result?: JsonNullableFilter<"scrapes">
    created_at?: DateTimeNullableFilter<"scrapes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"scrapes"> | Date | string | null
    task?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type scrapesOrderByWithRelationInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    url?: SortOrder
    result?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    task?: tasksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: scrapesOrderByRelevanceInput
  }

  export type scrapesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    task_uid?: string
    AND?: scrapesWhereInput | scrapesWhereInput[]
    OR?: scrapesWhereInput[]
    NOT?: scrapesWhereInput | scrapesWhereInput[]
    user_id?: IntNullableFilter<"scrapes"> | number | null
    url?: StringFilter<"scrapes"> | string
    result?: JsonNullableFilter<"scrapes">
    created_at?: DateTimeNullableFilter<"scrapes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"scrapes"> | Date | string | null
    task?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "task_uid">

  export type scrapesOrderByWithAggregationInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    url?: SortOrder
    result?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: scrapesCountOrderByAggregateInput
    _avg?: scrapesAvgOrderByAggregateInput
    _max?: scrapesMaxOrderByAggregateInput
    _min?: scrapesMinOrderByAggregateInput
    _sum?: scrapesSumOrderByAggregateInput
  }

  export type scrapesScalarWhereWithAggregatesInput = {
    AND?: scrapesScalarWhereWithAggregatesInput | scrapesScalarWhereWithAggregatesInput[]
    OR?: scrapesScalarWhereWithAggregatesInput[]
    NOT?: scrapesScalarWhereWithAggregatesInput | scrapesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"scrapes"> | number
    task_uid?: StringWithAggregatesFilter<"scrapes"> | string
    user_id?: IntNullableWithAggregatesFilter<"scrapes"> | number | null
    url?: StringWithAggregatesFilter<"scrapes"> | string
    result?: JsonNullableWithAggregatesFilter<"scrapes">
    created_at?: DateTimeNullableWithAggregatesFilter<"scrapes"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"scrapes"> | Date | string | null
  }

  export type emailsWhereInput = {
    AND?: emailsWhereInput | emailsWhereInput[]
    OR?: emailsWhereInput[]
    NOT?: emailsWhereInput | emailsWhereInput[]
    id?: IntFilter<"emails"> | number
    task_uid?: StringFilter<"emails"> | string
    user_id?: IntNullableFilter<"emails"> | number | null
    to?: StringFilter<"emails"> | string
    from?: StringFilter<"emails"> | string
    subject?: StringFilter<"emails"> | string
    body?: StringNullableFilter<"emails"> | string | null
    sent_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    created_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    task?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type emailsOrderByWithRelationInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    task?: tasksOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    _relevance?: emailsOrderByRelevanceInput
  }

  export type emailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    task_uid?: string
    AND?: emailsWhereInput | emailsWhereInput[]
    OR?: emailsWhereInput[]
    NOT?: emailsWhereInput | emailsWhereInput[]
    user_id?: IntNullableFilter<"emails"> | number | null
    to?: StringFilter<"emails"> | string
    from?: StringFilter<"emails"> | string
    subject?: StringFilter<"emails"> | string
    body?: StringNullableFilter<"emails"> | string | null
    sent_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    created_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    task?: XOR<TasksScalarRelationFilter, tasksWhereInput>
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "task_uid">

  export type emailsOrderByWithAggregationInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrderInput | SortOrder
    sent_at?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: emailsCountOrderByAggregateInput
    _avg?: emailsAvgOrderByAggregateInput
    _max?: emailsMaxOrderByAggregateInput
    _min?: emailsMinOrderByAggregateInput
    _sum?: emailsSumOrderByAggregateInput
  }

  export type emailsScalarWhereWithAggregatesInput = {
    AND?: emailsScalarWhereWithAggregatesInput | emailsScalarWhereWithAggregatesInput[]
    OR?: emailsScalarWhereWithAggregatesInput[]
    NOT?: emailsScalarWhereWithAggregatesInput | emailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"emails"> | number
    task_uid?: StringWithAggregatesFilter<"emails"> | string
    user_id?: IntNullableWithAggregatesFilter<"emails"> | number | null
    to?: StringWithAggregatesFilter<"emails"> | string
    from?: StringWithAggregatesFilter<"emails"> | string
    subject?: StringWithAggregatesFilter<"emails"> | string
    body?: StringNullableWithAggregatesFilter<"emails"> | string | null
    sent_at?: DateTimeNullableWithAggregatesFilter<"emails"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"emails"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"emails"> | Date | string | null
  }

  export type tasksWhereInput = {
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    id?: IntFilter<"tasks"> | number
    uid?: StringFilter<"tasks"> | string
    type?: StringFilter<"tasks"> | string
    status?: StringFilter<"tasks"> | string
    data?: JsonNullableFilter<"tasks">
    error?: StringNullableFilter<"tasks"> | string | null
    started_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    usersId?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    scrapes?: ScrapesListRelationFilter
    emails?: EmailsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type tasksOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    finished_at?: SortOrderInput | SortOrder
    usersId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    scrapes?: scrapesOrderByRelationAggregateInput
    emails?: emailsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    _relevance?: tasksOrderByRelevanceInput
  }

  export type tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: tasksWhereInput | tasksWhereInput[]
    OR?: tasksWhereInput[]
    NOT?: tasksWhereInput | tasksWhereInput[]
    type?: StringFilter<"tasks"> | string
    status?: StringFilter<"tasks"> | string
    data?: JsonNullableFilter<"tasks">
    error?: StringNullableFilter<"tasks"> | string | null
    started_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    usersId?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    scrapes?: ScrapesListRelationFilter
    emails?: EmailsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "uid">

  export type tasksOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    finished_at?: SortOrderInput | SortOrder
    usersId?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: tasksCountOrderByAggregateInput
    _avg?: tasksAvgOrderByAggregateInput
    _max?: tasksMaxOrderByAggregateInput
    _min?: tasksMinOrderByAggregateInput
    _sum?: tasksSumOrderByAggregateInput
  }

  export type tasksScalarWhereWithAggregatesInput = {
    AND?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    OR?: tasksScalarWhereWithAggregatesInput[]
    NOT?: tasksScalarWhereWithAggregatesInput | tasksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tasks"> | number
    uid?: StringWithAggregatesFilter<"tasks"> | string
    type?: StringWithAggregatesFilter<"tasks"> | string
    status?: StringWithAggregatesFilter<"tasks"> | string
    data?: JsonNullableWithAggregatesFilter<"tasks">
    error?: StringNullableWithAggregatesFilter<"tasks"> | string | null
    started_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    finished_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    usersId?: IntNullableWithAggregatesFilter<"tasks"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"tasks"> | Date | string | null
  }

  export type uploadsWhereInput = {
    AND?: uploadsWhereInput | uploadsWhereInput[]
    OR?: uploadsWhereInput[]
    NOT?: uploadsWhereInput | uploadsWhereInput[]
    id?: IntFilter<"uploads"> | number
    uid?: StringFilter<"uploads"> | string
    user_id?: IntNullableFilter<"uploads"> | number | null
    type?: StringFilter<"uploads"> | string
    filename?: StringFilter<"uploads"> | string
    filepath?: StringFilter<"uploads"> | string
    publicpath?: StringFilter<"uploads"> | string
    mimetype?: StringNullableFilter<"uploads"> | string | null
    size?: IntNullableFilter<"uploads"> | number | null
    created_at?: DateTimeFilter<"uploads"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type uploadsOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    type?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    publicpath?: SortOrder
    mimetype?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    created_at?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: uploadsOrderByRelevanceInput
  }

  export type uploadsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: uploadsWhereInput | uploadsWhereInput[]
    OR?: uploadsWhereInput[]
    NOT?: uploadsWhereInput | uploadsWhereInput[]
    user_id?: IntNullableFilter<"uploads"> | number | null
    type?: StringFilter<"uploads"> | string
    filename?: StringFilter<"uploads"> | string
    filepath?: StringFilter<"uploads"> | string
    publicpath?: StringFilter<"uploads"> | string
    mimetype?: StringNullableFilter<"uploads"> | string | null
    size?: IntNullableFilter<"uploads"> | number | null
    created_at?: DateTimeFilter<"uploads"> | Date | string
    user?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "uid">

  export type uploadsOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    user_id?: SortOrderInput | SortOrder
    type?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    publicpath?: SortOrder
    mimetype?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: uploadsCountOrderByAggregateInput
    _avg?: uploadsAvgOrderByAggregateInput
    _max?: uploadsMaxOrderByAggregateInput
    _min?: uploadsMinOrderByAggregateInput
    _sum?: uploadsSumOrderByAggregateInput
  }

  export type uploadsScalarWhereWithAggregatesInput = {
    AND?: uploadsScalarWhereWithAggregatesInput | uploadsScalarWhereWithAggregatesInput[]
    OR?: uploadsScalarWhereWithAggregatesInput[]
    NOT?: uploadsScalarWhereWithAggregatesInput | uploadsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"uploads"> | number
    uid?: StringWithAggregatesFilter<"uploads"> | string
    user_id?: IntNullableWithAggregatesFilter<"uploads"> | number | null
    type?: StringWithAggregatesFilter<"uploads"> | string
    filename?: StringWithAggregatesFilter<"uploads"> | string
    filepath?: StringWithAggregatesFilter<"uploads"> | string
    publicpath?: StringWithAggregatesFilter<"uploads"> | string
    mimetype?: StringNullableWithAggregatesFilter<"uploads"> | string | null
    size?: IntNullableWithAggregatesFilter<"uploads"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"uploads"> | Date | string
  }

  export type user_permissionsCreateInput = {
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutUser_permissionsInput
  }

  export type user_permissionsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_permissionsUpdateInput = {
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutUser_permissionsNestedInput
  }

  export type user_permissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionsCreateManyInput = {
    id?: number
    user_id?: number | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_permissionsUpdateManyMutationInput = {
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    emails?: emailsCreateNestedManyWithoutUsersInput
    uploads?: uploadsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    emails?: emailsUncheckedCreateNestedManyWithoutUsersInput
    uploads?: uploadsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    emails?: emailsUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrapesCreateInput = {
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task: tasksCreateNestedOneWithoutScrapesInput
    users?: usersCreateNestedOneWithoutScrapesInput
  }

  export type scrapesUncheckedCreateInput = {
    id?: number
    task_uid: string
    user_id?: number | null
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type scrapesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: tasksUpdateOneRequiredWithoutScrapesNestedInput
    users?: usersUpdateOneWithoutScrapesNestedInput
  }

  export type scrapesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrapesCreateManyInput = {
    id?: number
    task_uid: string
    user_id?: number | null
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type scrapesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrapesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emailsCreateInput = {
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task: tasksCreateNestedOneWithoutEmailsInput
    users?: usersCreateNestedOneWithoutEmailsInput
  }

  export type emailsUncheckedCreateInput = {
    id?: number
    task_uid: string
    user_id?: number | null
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emailsUpdateInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: tasksUpdateOneRequiredWithoutEmailsNestedInput
    users?: usersUpdateOneWithoutEmailsNestedInput
  }

  export type emailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emailsCreateManyInput = {
    id?: number
    task_uid: string
    user_id?: number | null
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emailsUpdateManyMutationInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksCreateInput = {
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutTaskInput
    emails?: emailsCreateNestedManyWithoutTaskInput
    users?: usersCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateInput = {
    id?: number
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    usersId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutTaskInput
    emails?: emailsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutTaskNestedInput
    emails?: emailsUpdateManyWithoutTaskNestedInput
    users?: usersUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutTaskNestedInput
    emails?: emailsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type tasksCreateManyInput = {
    id?: number
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    usersId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type uploadsCreateInput = {
    uid: string
    type: string
    filename: string
    filepath: string
    publicpath: string
    mimetype?: string | null
    size?: number | null
    created_at?: Date | string
    user?: usersCreateNestedOneWithoutUploadsInput
  }

  export type uploadsUncheckedCreateInput = {
    id?: number
    uid: string
    user_id?: number | null
    type: string
    filename: string
    filepath: string
    publicpath: string
    mimetype?: string | null
    size?: number | null
    created_at?: Date | string
  }

  export type uploadsUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    publicpath?: StringFieldUpdateOperationsInput | string
    mimetype?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneWithoutUploadsNestedInput
  }

  export type uploadsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    publicpath?: StringFieldUpdateOperationsInput | string
    mimetype?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsCreateManyInput = {
    id?: number
    uid: string
    user_id?: number | null
    type: string
    filename: string
    filepath: string
    publicpath: string
    mimetype?: string | null
    size?: number | null
    created_at?: Date | string
  }

  export type uploadsUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    publicpath?: StringFieldUpdateOperationsInput | string
    mimetype?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    publicpath?: StringFieldUpdateOperationsInput | string
    mimetype?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_permissionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    permissions?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_permissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type user_permissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_permissionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type user_permissionsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ScrapesListRelationFilter = {
    every?: scrapesWhereInput
    some?: scrapesWhereInput
    none?: scrapesWhereInput
  }

  export type User_permissionsListRelationFilter = {
    every?: user_permissionsWhereInput
    some?: user_permissionsWhereInput
    none?: user_permissionsWhereInput
  }

  export type TasksListRelationFilter = {
    every?: tasksWhereInput
    some?: tasksWhereInput
    none?: tasksWhereInput
  }

  export type EmailsListRelationFilter = {
    every?: emailsWhereInput
    some?: emailsWhereInput
    none?: emailsWhereInput
  }

  export type UploadsListRelationFilter = {
    every?: uploadsWhereInput
    some?: uploadsWhereInput
    none?: uploadsWhereInput
  }

  export type scrapesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_permissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type emailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type uploadsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    avatarId?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatarId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    avatarId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TasksScalarRelationFilter = {
    is?: tasksWhereInput
    isNot?: tasksWhereInput
  }

  export type scrapesOrderByRelevanceInput = {
    fields: scrapesOrderByRelevanceFieldEnum | scrapesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type scrapesCountOrderByAggregateInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    result?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scrapesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type scrapesMaxOrderByAggregateInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scrapesMinOrderByAggregateInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrder
    url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type scrapesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type emailsOrderByRelevanceInput = {
    fields: emailsOrderByRelevanceFieldEnum | emailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type emailsCountOrderByAggregateInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type emailsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type emailsMaxOrderByAggregateInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type emailsMinOrderByAggregateInput = {
    id?: SortOrder
    task_uid?: SortOrder
    user_id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    sent_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type emailsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type tasksOrderByRelevanceInput = {
    fields: tasksOrderByRelevanceFieldEnum | tasksOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tasksCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    data?: SortOrder
    error?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    usersId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksAvgOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
  }

  export type tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    error?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    usersId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    type?: SortOrder
    status?: SortOrder
    error?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    usersId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type tasksSumOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type uploadsOrderByRelevanceInput = {
    fields: uploadsOrderByRelevanceFieldEnum | uploadsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type uploadsCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    publicpath?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
  }

  export type uploadsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    size?: SortOrder
  }

  export type uploadsMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    publicpath?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
  }

  export type uploadsMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    filename?: SortOrder
    filepath?: SortOrder
    publicpath?: SortOrder
    mimetype?: SortOrder
    size?: SortOrder
    created_at?: SortOrder
  }

  export type uploadsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    size?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutUser_permissionsInput = {
    create?: XOR<usersCreateWithoutUser_permissionsInput, usersUncheckedCreateWithoutUser_permissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_permissionsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutUser_permissionsNestedInput = {
    create?: XOR<usersCreateWithoutUser_permissionsInput, usersUncheckedCreateWithoutUser_permissionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_permissionsInput
    upsert?: usersUpsertWithoutUser_permissionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_permissionsInput, usersUpdateWithoutUser_permissionsInput>, usersUncheckedUpdateWithoutUser_permissionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type scrapesCreateNestedManyWithoutUsersInput = {
    create?: XOR<scrapesCreateWithoutUsersInput, scrapesUncheckedCreateWithoutUsersInput> | scrapesCreateWithoutUsersInput[] | scrapesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutUsersInput | scrapesCreateOrConnectWithoutUsersInput[]
    createMany?: scrapesCreateManyUsersInputEnvelope
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
  }

  export type user_permissionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_permissionsCreateWithoutUsersInput, user_permissionsUncheckedCreateWithoutUsersInput> | user_permissionsCreateWithoutUsersInput[] | user_permissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_permissionsCreateOrConnectWithoutUsersInput | user_permissionsCreateOrConnectWithoutUsersInput[]
    createMany?: user_permissionsCreateManyUsersInputEnvelope
    connect?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
  }

  export type tasksCreateNestedManyWithoutUsersInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type emailsCreateNestedManyWithoutUsersInput = {
    create?: XOR<emailsCreateWithoutUsersInput, emailsUncheckedCreateWithoutUsersInput> | emailsCreateWithoutUsersInput[] | emailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUsersInput | emailsCreateOrConnectWithoutUsersInput[]
    createMany?: emailsCreateManyUsersInputEnvelope
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
  }

  export type uploadsCreateNestedManyWithoutUserInput = {
    create?: XOR<uploadsCreateWithoutUserInput, uploadsUncheckedCreateWithoutUserInput> | uploadsCreateWithoutUserInput[] | uploadsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutUserInput | uploadsCreateOrConnectWithoutUserInput[]
    createMany?: uploadsCreateManyUserInputEnvelope
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
  }

  export type scrapesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<scrapesCreateWithoutUsersInput, scrapesUncheckedCreateWithoutUsersInput> | scrapesCreateWithoutUsersInput[] | scrapesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutUsersInput | scrapesCreateOrConnectWithoutUsersInput[]
    createMany?: scrapesCreateManyUsersInputEnvelope
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
  }

  export type user_permissionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_permissionsCreateWithoutUsersInput, user_permissionsUncheckedCreateWithoutUsersInput> | user_permissionsCreateWithoutUsersInput[] | user_permissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_permissionsCreateOrConnectWithoutUsersInput | user_permissionsCreateOrConnectWithoutUsersInput[]
    createMany?: user_permissionsCreateManyUsersInputEnvelope
    connect?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
  }

  export type tasksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
  }

  export type emailsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<emailsCreateWithoutUsersInput, emailsUncheckedCreateWithoutUsersInput> | emailsCreateWithoutUsersInput[] | emailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUsersInput | emailsCreateOrConnectWithoutUsersInput[]
    createMany?: emailsCreateManyUsersInputEnvelope
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
  }

  export type uploadsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<uploadsCreateWithoutUserInput, uploadsUncheckedCreateWithoutUserInput> | uploadsCreateWithoutUserInput[] | uploadsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutUserInput | uploadsCreateOrConnectWithoutUserInput[]
    createMany?: uploadsCreateManyUserInputEnvelope
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type scrapesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<scrapesCreateWithoutUsersInput, scrapesUncheckedCreateWithoutUsersInput> | scrapesCreateWithoutUsersInput[] | scrapesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutUsersInput | scrapesCreateOrConnectWithoutUsersInput[]
    upsert?: scrapesUpsertWithWhereUniqueWithoutUsersInput | scrapesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: scrapesCreateManyUsersInputEnvelope
    set?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    disconnect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    delete?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    update?: scrapesUpdateWithWhereUniqueWithoutUsersInput | scrapesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: scrapesUpdateManyWithWhereWithoutUsersInput | scrapesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: scrapesScalarWhereInput | scrapesScalarWhereInput[]
  }

  export type user_permissionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_permissionsCreateWithoutUsersInput, user_permissionsUncheckedCreateWithoutUsersInput> | user_permissionsCreateWithoutUsersInput[] | user_permissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_permissionsCreateOrConnectWithoutUsersInput | user_permissionsCreateOrConnectWithoutUsersInput[]
    upsert?: user_permissionsUpsertWithWhereUniqueWithoutUsersInput | user_permissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_permissionsCreateManyUsersInputEnvelope
    set?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    disconnect?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    delete?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    connect?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    update?: user_permissionsUpdateWithWhereUniqueWithoutUsersInput | user_permissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_permissionsUpdateManyWithWhereWithoutUsersInput | user_permissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_permissionsScalarWhereInput | user_permissionsScalarWhereInput[]
  }

  export type tasksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsersInput | tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsersInput | tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsersInput | tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type emailsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<emailsCreateWithoutUsersInput, emailsUncheckedCreateWithoutUsersInput> | emailsCreateWithoutUsersInput[] | emailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUsersInput | emailsCreateOrConnectWithoutUsersInput[]
    upsert?: emailsUpsertWithWhereUniqueWithoutUsersInput | emailsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: emailsCreateManyUsersInputEnvelope
    set?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    disconnect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    delete?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    update?: emailsUpdateWithWhereUniqueWithoutUsersInput | emailsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: emailsUpdateManyWithWhereWithoutUsersInput | emailsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: emailsScalarWhereInput | emailsScalarWhereInput[]
  }

  export type uploadsUpdateManyWithoutUserNestedInput = {
    create?: XOR<uploadsCreateWithoutUserInput, uploadsUncheckedCreateWithoutUserInput> | uploadsCreateWithoutUserInput[] | uploadsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutUserInput | uploadsCreateOrConnectWithoutUserInput[]
    upsert?: uploadsUpsertWithWhereUniqueWithoutUserInput | uploadsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: uploadsCreateManyUserInputEnvelope
    set?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    disconnect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    delete?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    update?: uploadsUpdateWithWhereUniqueWithoutUserInput | uploadsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: uploadsUpdateManyWithWhereWithoutUserInput | uploadsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
  }

  export type scrapesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<scrapesCreateWithoutUsersInput, scrapesUncheckedCreateWithoutUsersInput> | scrapesCreateWithoutUsersInput[] | scrapesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutUsersInput | scrapesCreateOrConnectWithoutUsersInput[]
    upsert?: scrapesUpsertWithWhereUniqueWithoutUsersInput | scrapesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: scrapesCreateManyUsersInputEnvelope
    set?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    disconnect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    delete?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    update?: scrapesUpdateWithWhereUniqueWithoutUsersInput | scrapesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: scrapesUpdateManyWithWhereWithoutUsersInput | scrapesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: scrapesScalarWhereInput | scrapesScalarWhereInput[]
  }

  export type user_permissionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_permissionsCreateWithoutUsersInput, user_permissionsUncheckedCreateWithoutUsersInput> | user_permissionsCreateWithoutUsersInput[] | user_permissionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_permissionsCreateOrConnectWithoutUsersInput | user_permissionsCreateOrConnectWithoutUsersInput[]
    upsert?: user_permissionsUpsertWithWhereUniqueWithoutUsersInput | user_permissionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_permissionsCreateManyUsersInputEnvelope
    set?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    disconnect?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    delete?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    connect?: user_permissionsWhereUniqueInput | user_permissionsWhereUniqueInput[]
    update?: user_permissionsUpdateWithWhereUniqueWithoutUsersInput | user_permissionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_permissionsUpdateManyWithWhereWithoutUsersInput | user_permissionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_permissionsScalarWhereInput | user_permissionsScalarWhereInput[]
  }

  export type tasksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput> | tasksCreateWithoutUsersInput[] | tasksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: tasksCreateOrConnectWithoutUsersInput | tasksCreateOrConnectWithoutUsersInput[]
    upsert?: tasksUpsertWithWhereUniqueWithoutUsersInput | tasksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: tasksCreateManyUsersInputEnvelope
    set?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    disconnect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    delete?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    connect?: tasksWhereUniqueInput | tasksWhereUniqueInput[]
    update?: tasksUpdateWithWhereUniqueWithoutUsersInput | tasksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: tasksUpdateManyWithWhereWithoutUsersInput | tasksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: tasksScalarWhereInput | tasksScalarWhereInput[]
  }

  export type emailsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<emailsCreateWithoutUsersInput, emailsUncheckedCreateWithoutUsersInput> | emailsCreateWithoutUsersInput[] | emailsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutUsersInput | emailsCreateOrConnectWithoutUsersInput[]
    upsert?: emailsUpsertWithWhereUniqueWithoutUsersInput | emailsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: emailsCreateManyUsersInputEnvelope
    set?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    disconnect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    delete?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    update?: emailsUpdateWithWhereUniqueWithoutUsersInput | emailsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: emailsUpdateManyWithWhereWithoutUsersInput | emailsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: emailsScalarWhereInput | emailsScalarWhereInput[]
  }

  export type uploadsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<uploadsCreateWithoutUserInput, uploadsUncheckedCreateWithoutUserInput> | uploadsCreateWithoutUserInput[] | uploadsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: uploadsCreateOrConnectWithoutUserInput | uploadsCreateOrConnectWithoutUserInput[]
    upsert?: uploadsUpsertWithWhereUniqueWithoutUserInput | uploadsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: uploadsCreateManyUserInputEnvelope
    set?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    disconnect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    delete?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    connect?: uploadsWhereUniqueInput | uploadsWhereUniqueInput[]
    update?: uploadsUpdateWithWhereUniqueWithoutUserInput | uploadsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: uploadsUpdateManyWithWhereWithoutUserInput | uploadsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
  }

  export type tasksCreateNestedOneWithoutScrapesInput = {
    create?: XOR<tasksCreateWithoutScrapesInput, tasksUncheckedCreateWithoutScrapesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutScrapesInput
    connect?: tasksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutScrapesInput = {
    create?: XOR<usersCreateWithoutScrapesInput, usersUncheckedCreateWithoutScrapesInput>
    connectOrCreate?: usersCreateOrConnectWithoutScrapesInput
    connect?: usersWhereUniqueInput
  }

  export type tasksUpdateOneRequiredWithoutScrapesNestedInput = {
    create?: XOR<tasksCreateWithoutScrapesInput, tasksUncheckedCreateWithoutScrapesInput>
    connectOrCreate?: tasksCreateOrConnectWithoutScrapesInput
    upsert?: tasksUpsertWithoutScrapesInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutScrapesInput, tasksUpdateWithoutScrapesInput>, tasksUncheckedUpdateWithoutScrapesInput>
  }

  export type usersUpdateOneWithoutScrapesNestedInput = {
    create?: XOR<usersCreateWithoutScrapesInput, usersUncheckedCreateWithoutScrapesInput>
    connectOrCreate?: usersCreateOrConnectWithoutScrapesInput
    upsert?: usersUpsertWithoutScrapesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutScrapesInput, usersUpdateWithoutScrapesInput>, usersUncheckedUpdateWithoutScrapesInput>
  }

  export type tasksCreateNestedOneWithoutEmailsInput = {
    create?: XOR<tasksCreateWithoutEmailsInput, tasksUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutEmailsInput
    connect?: tasksWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutEmailsInput = {
    create?: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmailsInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tasksUpdateOneRequiredWithoutEmailsNestedInput = {
    create?: XOR<tasksCreateWithoutEmailsInput, tasksUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: tasksCreateOrConnectWithoutEmailsInput
    upsert?: tasksUpsertWithoutEmailsInput
    connect?: tasksWhereUniqueInput
    update?: XOR<XOR<tasksUpdateToOneWithWhereWithoutEmailsInput, tasksUpdateWithoutEmailsInput>, tasksUncheckedUpdateWithoutEmailsInput>
  }

  export type usersUpdateOneWithoutEmailsNestedInput = {
    create?: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
    connectOrCreate?: usersCreateOrConnectWithoutEmailsInput
    upsert?: usersUpsertWithoutEmailsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutEmailsInput, usersUpdateWithoutEmailsInput>, usersUncheckedUpdateWithoutEmailsInput>
  }

  export type scrapesCreateNestedManyWithoutTaskInput = {
    create?: XOR<scrapesCreateWithoutTaskInput, scrapesUncheckedCreateWithoutTaskInput> | scrapesCreateWithoutTaskInput[] | scrapesUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutTaskInput | scrapesCreateOrConnectWithoutTaskInput[]
    createMany?: scrapesCreateManyTaskInputEnvelope
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
  }

  export type emailsCreateNestedManyWithoutTaskInput = {
    create?: XOR<emailsCreateWithoutTaskInput, emailsUncheckedCreateWithoutTaskInput> | emailsCreateWithoutTaskInput[] | emailsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutTaskInput | emailsCreateOrConnectWithoutTaskInput[]
    createMany?: emailsCreateManyTaskInputEnvelope
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTasksInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    connect?: usersWhereUniqueInput
  }

  export type scrapesUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<scrapesCreateWithoutTaskInput, scrapesUncheckedCreateWithoutTaskInput> | scrapesCreateWithoutTaskInput[] | scrapesUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutTaskInput | scrapesCreateOrConnectWithoutTaskInput[]
    createMany?: scrapesCreateManyTaskInputEnvelope
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
  }

  export type emailsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<emailsCreateWithoutTaskInput, emailsUncheckedCreateWithoutTaskInput> | emailsCreateWithoutTaskInput[] | emailsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutTaskInput | emailsCreateOrConnectWithoutTaskInput[]
    createMany?: emailsCreateManyTaskInputEnvelope
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
  }

  export type scrapesUpdateManyWithoutTaskNestedInput = {
    create?: XOR<scrapesCreateWithoutTaskInput, scrapesUncheckedCreateWithoutTaskInput> | scrapesCreateWithoutTaskInput[] | scrapesUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutTaskInput | scrapesCreateOrConnectWithoutTaskInput[]
    upsert?: scrapesUpsertWithWhereUniqueWithoutTaskInput | scrapesUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: scrapesCreateManyTaskInputEnvelope
    set?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    disconnect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    delete?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    update?: scrapesUpdateWithWhereUniqueWithoutTaskInput | scrapesUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: scrapesUpdateManyWithWhereWithoutTaskInput | scrapesUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: scrapesScalarWhereInput | scrapesScalarWhereInput[]
  }

  export type emailsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<emailsCreateWithoutTaskInput, emailsUncheckedCreateWithoutTaskInput> | emailsCreateWithoutTaskInput[] | emailsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutTaskInput | emailsCreateOrConnectWithoutTaskInput[]
    upsert?: emailsUpsertWithWhereUniqueWithoutTaskInput | emailsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: emailsCreateManyTaskInputEnvelope
    set?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    disconnect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    delete?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    update?: emailsUpdateWithWhereUniqueWithoutTaskInput | emailsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: emailsUpdateManyWithWhereWithoutTaskInput | emailsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: emailsScalarWhereInput | emailsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutTasksNestedInput = {
    create?: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    connectOrCreate?: usersCreateOrConnectWithoutTasksInput
    upsert?: usersUpsertWithoutTasksInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTasksInput, usersUpdateWithoutTasksInput>, usersUncheckedUpdateWithoutTasksInput>
  }

  export type scrapesUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<scrapesCreateWithoutTaskInput, scrapesUncheckedCreateWithoutTaskInput> | scrapesCreateWithoutTaskInput[] | scrapesUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: scrapesCreateOrConnectWithoutTaskInput | scrapesCreateOrConnectWithoutTaskInput[]
    upsert?: scrapesUpsertWithWhereUniqueWithoutTaskInput | scrapesUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: scrapesCreateManyTaskInputEnvelope
    set?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    disconnect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    delete?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    connect?: scrapesWhereUniqueInput | scrapesWhereUniqueInput[]
    update?: scrapesUpdateWithWhereUniqueWithoutTaskInput | scrapesUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: scrapesUpdateManyWithWhereWithoutTaskInput | scrapesUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: scrapesScalarWhereInput | scrapesScalarWhereInput[]
  }

  export type emailsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<emailsCreateWithoutTaskInput, emailsUncheckedCreateWithoutTaskInput> | emailsCreateWithoutTaskInput[] | emailsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: emailsCreateOrConnectWithoutTaskInput | emailsCreateOrConnectWithoutTaskInput[]
    upsert?: emailsUpsertWithWhereUniqueWithoutTaskInput | emailsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: emailsCreateManyTaskInputEnvelope
    set?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    disconnect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    delete?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    connect?: emailsWhereUniqueInput | emailsWhereUniqueInput[]
    update?: emailsUpdateWithWhereUniqueWithoutTaskInput | emailsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: emailsUpdateManyWithWhereWithoutTaskInput | emailsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: emailsScalarWhereInput | emailsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutUploadsInput = {
    create?: XOR<usersCreateWithoutUploadsInput, usersUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUploadsInput
    connect?: usersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usersUpdateOneWithoutUploadsNestedInput = {
    create?: XOR<usersCreateWithoutUploadsInput, usersUncheckedCreateWithoutUploadsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUploadsInput
    upsert?: usersUpsertWithoutUploadsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUploadsInput, usersUpdateWithoutUploadsInput>, usersUncheckedUpdateWithoutUploadsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateWithoutUser_permissionsInput = {
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    emails?: emailsCreateNestedManyWithoutUsersInput
    uploads?: uploadsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutUser_permissionsInput = {
    id?: number
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    emails?: emailsUncheckedCreateNestedManyWithoutUsersInput
    uploads?: uploadsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutUser_permissionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_permissionsInput, usersUncheckedCreateWithoutUser_permissionsInput>
  }

  export type usersUpsertWithoutUser_permissionsInput = {
    update: XOR<usersUpdateWithoutUser_permissionsInput, usersUncheckedUpdateWithoutUser_permissionsInput>
    create: XOR<usersCreateWithoutUser_permissionsInput, usersUncheckedCreateWithoutUser_permissionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_permissionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_permissionsInput, usersUncheckedUpdateWithoutUser_permissionsInput>
  }

  export type usersUpdateWithoutUser_permissionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    emails?: emailsUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_permissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type scrapesCreateWithoutUsersInput = {
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task: tasksCreateNestedOneWithoutScrapesInput
  }

  export type scrapesUncheckedCreateWithoutUsersInput = {
    id?: number
    task_uid: string
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type scrapesCreateOrConnectWithoutUsersInput = {
    where: scrapesWhereUniqueInput
    create: XOR<scrapesCreateWithoutUsersInput, scrapesUncheckedCreateWithoutUsersInput>
  }

  export type scrapesCreateManyUsersInputEnvelope = {
    data: scrapesCreateManyUsersInput | scrapesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_permissionsCreateWithoutUsersInput = {
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_permissionsUncheckedCreateWithoutUsersInput = {
    id?: number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_permissionsCreateOrConnectWithoutUsersInput = {
    where: user_permissionsWhereUniqueInput
    create: XOR<user_permissionsCreateWithoutUsersInput, user_permissionsUncheckedCreateWithoutUsersInput>
  }

  export type user_permissionsCreateManyUsersInputEnvelope = {
    data: user_permissionsCreateManyUsersInput | user_permissionsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type tasksCreateWithoutUsersInput = {
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutTaskInput
    emails?: emailsCreateNestedManyWithoutTaskInput
  }

  export type tasksUncheckedCreateWithoutUsersInput = {
    id?: number
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutTaskInput
    emails?: emailsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksCreateOrConnectWithoutUsersInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksCreateManyUsersInputEnvelope = {
    data: tasksCreateManyUsersInput | tasksCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type emailsCreateWithoutUsersInput = {
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    task: tasksCreateNestedOneWithoutEmailsInput
  }

  export type emailsUncheckedCreateWithoutUsersInput = {
    id?: number
    task_uid: string
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emailsCreateOrConnectWithoutUsersInput = {
    where: emailsWhereUniqueInput
    create: XOR<emailsCreateWithoutUsersInput, emailsUncheckedCreateWithoutUsersInput>
  }

  export type emailsCreateManyUsersInputEnvelope = {
    data: emailsCreateManyUsersInput | emailsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type uploadsCreateWithoutUserInput = {
    uid: string
    type: string
    filename: string
    filepath: string
    publicpath: string
    mimetype?: string | null
    size?: number | null
    created_at?: Date | string
  }

  export type uploadsUncheckedCreateWithoutUserInput = {
    id?: number
    uid: string
    type: string
    filename: string
    filepath: string
    publicpath: string
    mimetype?: string | null
    size?: number | null
    created_at?: Date | string
  }

  export type uploadsCreateOrConnectWithoutUserInput = {
    where: uploadsWhereUniqueInput
    create: XOR<uploadsCreateWithoutUserInput, uploadsUncheckedCreateWithoutUserInput>
  }

  export type uploadsCreateManyUserInputEnvelope = {
    data: uploadsCreateManyUserInput | uploadsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type scrapesUpsertWithWhereUniqueWithoutUsersInput = {
    where: scrapesWhereUniqueInput
    update: XOR<scrapesUpdateWithoutUsersInput, scrapesUncheckedUpdateWithoutUsersInput>
    create: XOR<scrapesCreateWithoutUsersInput, scrapesUncheckedCreateWithoutUsersInput>
  }

  export type scrapesUpdateWithWhereUniqueWithoutUsersInput = {
    where: scrapesWhereUniqueInput
    data: XOR<scrapesUpdateWithoutUsersInput, scrapesUncheckedUpdateWithoutUsersInput>
  }

  export type scrapesUpdateManyWithWhereWithoutUsersInput = {
    where: scrapesScalarWhereInput
    data: XOR<scrapesUpdateManyMutationInput, scrapesUncheckedUpdateManyWithoutUsersInput>
  }

  export type scrapesScalarWhereInput = {
    AND?: scrapesScalarWhereInput | scrapesScalarWhereInput[]
    OR?: scrapesScalarWhereInput[]
    NOT?: scrapesScalarWhereInput | scrapesScalarWhereInput[]
    id?: IntFilter<"scrapes"> | number
    task_uid?: StringFilter<"scrapes"> | string
    user_id?: IntNullableFilter<"scrapes"> | number | null
    url?: StringFilter<"scrapes"> | string
    result?: JsonNullableFilter<"scrapes">
    created_at?: DateTimeNullableFilter<"scrapes"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"scrapes"> | Date | string | null
  }

  export type user_permissionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_permissionsWhereUniqueInput
    update: XOR<user_permissionsUpdateWithoutUsersInput, user_permissionsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_permissionsCreateWithoutUsersInput, user_permissionsUncheckedCreateWithoutUsersInput>
  }

  export type user_permissionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_permissionsWhereUniqueInput
    data: XOR<user_permissionsUpdateWithoutUsersInput, user_permissionsUncheckedUpdateWithoutUsersInput>
  }

  export type user_permissionsUpdateManyWithWhereWithoutUsersInput = {
    where: user_permissionsScalarWhereInput
    data: XOR<user_permissionsUpdateManyMutationInput, user_permissionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type user_permissionsScalarWhereInput = {
    AND?: user_permissionsScalarWhereInput | user_permissionsScalarWhereInput[]
    OR?: user_permissionsScalarWhereInput[]
    NOT?: user_permissionsScalarWhereInput | user_permissionsScalarWhereInput[]
    id?: IntFilter<"user_permissions"> | number
    user_id?: IntNullableFilter<"user_permissions"> | number | null
    permissions?: JsonNullableFilter<"user_permissions">
    created_at?: DateTimeNullableFilter<"user_permissions"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"user_permissions"> | Date | string | null
  }

  export type tasksUpsertWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    update: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
    create: XOR<tasksCreateWithoutUsersInput, tasksUncheckedCreateWithoutUsersInput>
  }

  export type tasksUpdateWithWhereUniqueWithoutUsersInput = {
    where: tasksWhereUniqueInput
    data: XOR<tasksUpdateWithoutUsersInput, tasksUncheckedUpdateWithoutUsersInput>
  }

  export type tasksUpdateManyWithWhereWithoutUsersInput = {
    where: tasksScalarWhereInput
    data: XOR<tasksUpdateManyMutationInput, tasksUncheckedUpdateManyWithoutUsersInput>
  }

  export type tasksScalarWhereInput = {
    AND?: tasksScalarWhereInput | tasksScalarWhereInput[]
    OR?: tasksScalarWhereInput[]
    NOT?: tasksScalarWhereInput | tasksScalarWhereInput[]
    id?: IntFilter<"tasks"> | number
    uid?: StringFilter<"tasks"> | string
    type?: StringFilter<"tasks"> | string
    status?: StringFilter<"tasks"> | string
    data?: JsonNullableFilter<"tasks">
    error?: StringNullableFilter<"tasks"> | string | null
    started_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    finished_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    usersId?: IntNullableFilter<"tasks"> | number | null
    created_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"tasks"> | Date | string | null
  }

  export type emailsUpsertWithWhereUniqueWithoutUsersInput = {
    where: emailsWhereUniqueInput
    update: XOR<emailsUpdateWithoutUsersInput, emailsUncheckedUpdateWithoutUsersInput>
    create: XOR<emailsCreateWithoutUsersInput, emailsUncheckedCreateWithoutUsersInput>
  }

  export type emailsUpdateWithWhereUniqueWithoutUsersInput = {
    where: emailsWhereUniqueInput
    data: XOR<emailsUpdateWithoutUsersInput, emailsUncheckedUpdateWithoutUsersInput>
  }

  export type emailsUpdateManyWithWhereWithoutUsersInput = {
    where: emailsScalarWhereInput
    data: XOR<emailsUpdateManyMutationInput, emailsUncheckedUpdateManyWithoutUsersInput>
  }

  export type emailsScalarWhereInput = {
    AND?: emailsScalarWhereInput | emailsScalarWhereInput[]
    OR?: emailsScalarWhereInput[]
    NOT?: emailsScalarWhereInput | emailsScalarWhereInput[]
    id?: IntFilter<"emails"> | number
    task_uid?: StringFilter<"emails"> | string
    user_id?: IntNullableFilter<"emails"> | number | null
    to?: StringFilter<"emails"> | string
    from?: StringFilter<"emails"> | string
    subject?: StringFilter<"emails"> | string
    body?: StringNullableFilter<"emails"> | string | null
    sent_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    created_at?: DateTimeNullableFilter<"emails"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"emails"> | Date | string | null
  }

  export type uploadsUpsertWithWhereUniqueWithoutUserInput = {
    where: uploadsWhereUniqueInput
    update: XOR<uploadsUpdateWithoutUserInput, uploadsUncheckedUpdateWithoutUserInput>
    create: XOR<uploadsCreateWithoutUserInput, uploadsUncheckedCreateWithoutUserInput>
  }

  export type uploadsUpdateWithWhereUniqueWithoutUserInput = {
    where: uploadsWhereUniqueInput
    data: XOR<uploadsUpdateWithoutUserInput, uploadsUncheckedUpdateWithoutUserInput>
  }

  export type uploadsUpdateManyWithWhereWithoutUserInput = {
    where: uploadsScalarWhereInput
    data: XOR<uploadsUpdateManyMutationInput, uploadsUncheckedUpdateManyWithoutUserInput>
  }

  export type uploadsScalarWhereInput = {
    AND?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
    OR?: uploadsScalarWhereInput[]
    NOT?: uploadsScalarWhereInput | uploadsScalarWhereInput[]
    id?: IntFilter<"uploads"> | number
    uid?: StringFilter<"uploads"> | string
    user_id?: IntNullableFilter<"uploads"> | number | null
    type?: StringFilter<"uploads"> | string
    filename?: StringFilter<"uploads"> | string
    filepath?: StringFilter<"uploads"> | string
    publicpath?: StringFilter<"uploads"> | string
    mimetype?: StringNullableFilter<"uploads"> | string | null
    size?: IntNullableFilter<"uploads"> | number | null
    created_at?: DateTimeFilter<"uploads"> | Date | string
  }

  export type tasksCreateWithoutScrapesInput = {
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    emails?: emailsCreateNestedManyWithoutTaskInput
    users?: usersCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutScrapesInput = {
    id?: number
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    usersId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    emails?: emailsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksCreateOrConnectWithoutScrapesInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutScrapesInput, tasksUncheckedCreateWithoutScrapesInput>
  }

  export type usersCreateWithoutScrapesInput = {
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_permissions?: user_permissionsCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    emails?: emailsCreateNestedManyWithoutUsersInput
    uploads?: uploadsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutScrapesInput = {
    id?: number
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    user_permissions?: user_permissionsUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    emails?: emailsUncheckedCreateNestedManyWithoutUsersInput
    uploads?: uploadsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutScrapesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutScrapesInput, usersUncheckedCreateWithoutScrapesInput>
  }

  export type tasksUpsertWithoutScrapesInput = {
    update: XOR<tasksUpdateWithoutScrapesInput, tasksUncheckedUpdateWithoutScrapesInput>
    create: XOR<tasksCreateWithoutScrapesInput, tasksUncheckedCreateWithoutScrapesInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutScrapesInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutScrapesInput, tasksUncheckedUpdateWithoutScrapesInput>
  }

  export type tasksUpdateWithoutScrapesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emails?: emailsUpdateManyWithoutTaskNestedInput
    users?: usersUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutScrapesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    emails?: emailsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type usersUpsertWithoutScrapesInput = {
    update: XOR<usersUpdateWithoutScrapesInput, usersUncheckedUpdateWithoutScrapesInput>
    create: XOR<usersCreateWithoutScrapesInput, usersUncheckedCreateWithoutScrapesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutScrapesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutScrapesInput, usersUncheckedUpdateWithoutScrapesInput>
  }

  export type usersUpdateWithoutScrapesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_permissions?: user_permissionsUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    emails?: emailsUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutScrapesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_permissions?: user_permissionsUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tasksCreateWithoutEmailsInput = {
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutTaskInput
    users?: usersCreateNestedOneWithoutTasksInput
  }

  export type tasksUncheckedCreateWithoutEmailsInput = {
    id?: number
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    usersId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutTaskInput
  }

  export type tasksCreateOrConnectWithoutEmailsInput = {
    where: tasksWhereUniqueInput
    create: XOR<tasksCreateWithoutEmailsInput, tasksUncheckedCreateWithoutEmailsInput>
  }

  export type usersCreateWithoutEmailsInput = {
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    uploads?: uploadsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutEmailsInput = {
    id?: number
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    uploads?: uploadsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutEmailsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
  }

  export type tasksUpsertWithoutEmailsInput = {
    update: XOR<tasksUpdateWithoutEmailsInput, tasksUncheckedUpdateWithoutEmailsInput>
    create: XOR<tasksCreateWithoutEmailsInput, tasksUncheckedCreateWithoutEmailsInput>
    where?: tasksWhereInput
  }

  export type tasksUpdateToOneWithWhereWithoutEmailsInput = {
    where?: tasksWhereInput
    data: XOR<tasksUpdateWithoutEmailsInput, tasksUncheckedUpdateWithoutEmailsInput>
  }

  export type tasksUpdateWithoutEmailsInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutTaskNestedInput
    users?: usersUpdateOneWithoutTasksNestedInput
  }

  export type tasksUncheckedUpdateWithoutEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usersId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type usersUpsertWithoutEmailsInput = {
    update: XOR<usersUpdateWithoutEmailsInput, usersUncheckedUpdateWithoutEmailsInput>
    create: XOR<usersCreateWithoutEmailsInput, usersUncheckedCreateWithoutEmailsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutEmailsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutEmailsInput, usersUncheckedUpdateWithoutEmailsInput>
  }

  export type usersUpdateWithoutEmailsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutEmailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type scrapesCreateWithoutTaskInput = {
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutScrapesInput
  }

  export type scrapesUncheckedCreateWithoutTaskInput = {
    id?: number
    user_id?: number | null
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type scrapesCreateOrConnectWithoutTaskInput = {
    where: scrapesWhereUniqueInput
    create: XOR<scrapesCreateWithoutTaskInput, scrapesUncheckedCreateWithoutTaskInput>
  }

  export type scrapesCreateManyTaskInputEnvelope = {
    data: scrapesCreateManyTaskInput | scrapesCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type emailsCreateWithoutTaskInput = {
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutEmailsInput
  }

  export type emailsUncheckedCreateWithoutTaskInput = {
    id?: number
    user_id?: number | null
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emailsCreateOrConnectWithoutTaskInput = {
    where: emailsWhereUniqueInput
    create: XOR<emailsCreateWithoutTaskInput, emailsUncheckedCreateWithoutTaskInput>
  }

  export type emailsCreateManyTaskInputEnvelope = {
    data: emailsCreateManyTaskInput | emailsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTasksInput = {
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsCreateNestedManyWithoutUsersInput
    emails?: emailsCreateNestedManyWithoutUsersInput
    uploads?: uploadsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutTasksInput = {
    id?: number
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsUncheckedCreateNestedManyWithoutUsersInput
    emails?: emailsUncheckedCreateNestedManyWithoutUsersInput
    uploads?: uploadsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutTasksInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
  }

  export type scrapesUpsertWithWhereUniqueWithoutTaskInput = {
    where: scrapesWhereUniqueInput
    update: XOR<scrapesUpdateWithoutTaskInput, scrapesUncheckedUpdateWithoutTaskInput>
    create: XOR<scrapesCreateWithoutTaskInput, scrapesUncheckedCreateWithoutTaskInput>
  }

  export type scrapesUpdateWithWhereUniqueWithoutTaskInput = {
    where: scrapesWhereUniqueInput
    data: XOR<scrapesUpdateWithoutTaskInput, scrapesUncheckedUpdateWithoutTaskInput>
  }

  export type scrapesUpdateManyWithWhereWithoutTaskInput = {
    where: scrapesScalarWhereInput
    data: XOR<scrapesUpdateManyMutationInput, scrapesUncheckedUpdateManyWithoutTaskInput>
  }

  export type emailsUpsertWithWhereUniqueWithoutTaskInput = {
    where: emailsWhereUniqueInput
    update: XOR<emailsUpdateWithoutTaskInput, emailsUncheckedUpdateWithoutTaskInput>
    create: XOR<emailsCreateWithoutTaskInput, emailsUncheckedCreateWithoutTaskInput>
  }

  export type emailsUpdateWithWhereUniqueWithoutTaskInput = {
    where: emailsWhereUniqueInput
    data: XOR<emailsUpdateWithoutTaskInput, emailsUncheckedUpdateWithoutTaskInput>
  }

  export type emailsUpdateManyWithWhereWithoutTaskInput = {
    where: emailsScalarWhereInput
    data: XOR<emailsUpdateManyMutationInput, emailsUncheckedUpdateManyWithoutTaskInput>
  }

  export type usersUpsertWithoutTasksInput = {
    update: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
    create: XOR<usersCreateWithoutTasksInput, usersUncheckedCreateWithoutTasksInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTasksInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTasksInput, usersUncheckedUpdateWithoutTasksInput>
  }

  export type usersUpdateWithoutTasksInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUpdateManyWithoutUsersNestedInput
    emails?: emailsUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUncheckedUpdateManyWithoutUsersNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUsersNestedInput
    uploads?: uploadsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutUploadsInput = {
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsCreateNestedManyWithoutUsersInput
    tasks?: tasksCreateNestedManyWithoutUsersInput
    emails?: emailsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUploadsInput = {
    id?: number
    username: string
    email: string
    password: string
    avatarId?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    scrapes?: scrapesUncheckedCreateNestedManyWithoutUsersInput
    user_permissions?: user_permissionsUncheckedCreateNestedManyWithoutUsersInput
    tasks?: tasksUncheckedCreateNestedManyWithoutUsersInput
    emails?: emailsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUploadsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUploadsInput, usersUncheckedCreateWithoutUploadsInput>
  }

  export type usersUpsertWithoutUploadsInput = {
    update: XOR<usersUpdateWithoutUploadsInput, usersUncheckedUpdateWithoutUploadsInput>
    create: XOR<usersCreateWithoutUploadsInput, usersUncheckedCreateWithoutUploadsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUploadsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUploadsInput, usersUncheckedUpdateWithoutUploadsInput>
  }

  export type usersUpdateWithoutUploadsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUpdateManyWithoutUsersNestedInput
    tasks?: tasksUpdateManyWithoutUsersNestedInput
    emails?: emailsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUploadsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatarId?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutUsersNestedInput
    user_permissions?: user_permissionsUncheckedUpdateManyWithoutUsersNestedInput
    tasks?: tasksUncheckedUpdateManyWithoutUsersNestedInput
    emails?: emailsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type scrapesCreateManyUsersInput = {
    id?: number
    task_uid: string
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type user_permissionsCreateManyUsersInput = {
    id?: number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type tasksCreateManyUsersInput = {
    id?: number
    uid: string
    type: string
    status?: string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: string | null
    started_at?: Date | string | null
    finished_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emailsCreateManyUsersInput = {
    id?: number
    task_uid: string
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type uploadsCreateManyUserInput = {
    id?: number
    uid: string
    type: string
    filename: string
    filepath: string
    publicpath: string
    mimetype?: string | null
    size?: number | null
    created_at?: Date | string
  }

  export type scrapesUpdateWithoutUsersInput = {
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: tasksUpdateOneRequiredWithoutScrapesNestedInput
  }

  export type scrapesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrapesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionsUpdateWithoutUsersInput = {
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type user_permissionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissions?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tasksUpdateWithoutUsersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUpdateManyWithoutTaskNestedInput
    emails?: emailsUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scrapes?: scrapesUncheckedUpdateManyWithoutTaskNestedInput
    emails?: emailsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type tasksUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    data?: NullableJsonNullValueInput | InputJsonValue
    error?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emailsUpdateWithoutUsersInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: tasksUpdateOneRequiredWithoutEmailsNestedInput
  }

  export type emailsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emailsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_uid?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type uploadsUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    publicpath?: StringFieldUpdateOperationsInput | string
    mimetype?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    publicpath?: StringFieldUpdateOperationsInput | string
    mimetype?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type uploadsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    filepath?: StringFieldUpdateOperationsInput | string
    publicpath?: StringFieldUpdateOperationsInput | string
    mimetype?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type scrapesCreateManyTaskInput = {
    id?: number
    user_id?: number | null
    url: string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type emailsCreateManyTaskInput = {
    id?: number
    user_id?: number | null
    to: string
    from: string
    subject: string
    body?: string | null
    sent_at?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type scrapesUpdateWithoutTaskInput = {
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutScrapesNestedInput
  }

  export type scrapesUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type scrapesUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    result?: NullableJsonNullValueInput | InputJsonValue
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emailsUpdateWithoutTaskInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutEmailsNestedInput
  }

  export type emailsUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type emailsUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    sent_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}