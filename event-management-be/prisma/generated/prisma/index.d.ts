
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ReferralPoint
 * 
 */
export type ReferralPoint = $Result.DefaultSelection<Prisma.$ReferralPointPayload>
/**
 * Model UserDiscount
 * 
 */
export type UserDiscount = $Result.DefaultSelection<Prisma.$UserDiscountPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model TicketPurchase
 * 
 */
export type TicketPurchase = $Result.DefaultSelection<Prisma.$TicketPurchasePayload>
/**
 * Model EventStatistic
 * 
 */
export type EventStatistic = $Result.DefaultSelection<Prisma.$EventStatisticPayload>
/**
 * Model EmailVerification
 * 
 */
export type EmailVerification = $Result.DefaultSelection<Prisma.$EmailVerificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  customer: 'customer',
  organizer: 'organizer'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralPoint`: Exposes CRUD operations for the **ReferralPoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralPoints
    * const referralPoints = await prisma.referralPoint.findMany()
    * ```
    */
  get referralPoint(): Prisma.ReferralPointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDiscount`: Exposes CRUD operations for the **UserDiscount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDiscounts
    * const userDiscounts = await prisma.userDiscount.findMany()
    * ```
    */
  get userDiscount(): Prisma.UserDiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketPurchase`: Exposes CRUD operations for the **TicketPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketPurchases
    * const ticketPurchases = await prisma.ticketPurchase.findMany()
    * ```
    */
  get ticketPurchase(): Prisma.TicketPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventStatistic`: Exposes CRUD operations for the **EventStatistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventStatistics
    * const eventStatistics = await prisma.eventStatistic.findMany()
    * ```
    */
  get eventStatistic(): Prisma.EventStatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerification`: Exposes CRUD operations for the **EmailVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerifications
    * const emailVerifications = await prisma.emailVerification.findMany()
    * ```
    */
  get emailVerification(): Prisma.EmailVerificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    ReferralPoint: 'ReferralPoint',
    UserDiscount: 'UserDiscount',
    Event: 'Event',
    TicketPurchase: 'TicketPurchase',
    EventStatistic: 'EventStatistic',
    EmailVerification: 'EmailVerification'
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
      modelProps: "user" | "referralPoint" | "userDiscount" | "event" | "ticketPurchase" | "eventStatistic" | "emailVerification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ReferralPoint: {
        payload: Prisma.$ReferralPointPayload<ExtArgs>
        fields: Prisma.ReferralPointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralPointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralPointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>
          }
          findFirst: {
            args: Prisma.ReferralPointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralPointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>
          }
          findMany: {
            args: Prisma.ReferralPointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>[]
          }
          create: {
            args: Prisma.ReferralPointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>
          }
          createMany: {
            args: Prisma.ReferralPointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralPointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>[]
          }
          delete: {
            args: Prisma.ReferralPointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>
          }
          update: {
            args: Prisma.ReferralPointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>
          }
          deleteMany: {
            args: Prisma.ReferralPointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralPointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralPointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>[]
          }
          upsert: {
            args: Prisma.ReferralPointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralPointPayload>
          }
          aggregate: {
            args: Prisma.ReferralPointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralPoint>
          }
          groupBy: {
            args: Prisma.ReferralPointGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralPointGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralPointCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralPointCountAggregateOutputType> | number
          }
        }
      }
      UserDiscount: {
        payload: Prisma.$UserDiscountPayload<ExtArgs>
        fields: Prisma.UserDiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>
          }
          findFirst: {
            args: Prisma.UserDiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>
          }
          findMany: {
            args: Prisma.UserDiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>[]
          }
          create: {
            args: Prisma.UserDiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>
          }
          createMany: {
            args: Prisma.UserDiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDiscountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>[]
          }
          delete: {
            args: Prisma.UserDiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>
          }
          update: {
            args: Prisma.UserDiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>
          }
          deleteMany: {
            args: Prisma.UserDiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDiscountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>[]
          }
          upsert: {
            args: Prisma.UserDiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDiscountPayload>
          }
          aggregate: {
            args: Prisma.UserDiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDiscount>
          }
          groupBy: {
            args: Prisma.UserDiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDiscountCountArgs<ExtArgs>
            result: $Utils.Optional<UserDiscountCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      TicketPurchase: {
        payload: Prisma.$TicketPurchasePayload<ExtArgs>
        fields: Prisma.TicketPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          findFirst: {
            args: Prisma.TicketPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          findMany: {
            args: Prisma.TicketPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>[]
          }
          create: {
            args: Prisma.TicketPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          createMany: {
            args: Prisma.TicketPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>[]
          }
          delete: {
            args: Prisma.TicketPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          update: {
            args: Prisma.TicketPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          deleteMany: {
            args: Prisma.TicketPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>[]
          }
          upsert: {
            args: Prisma.TicketPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPurchasePayload>
          }
          aggregate: {
            args: Prisma.TicketPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketPurchase>
          }
          groupBy: {
            args: Prisma.TicketPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<TicketPurchaseCountAggregateOutputType> | number
          }
        }
      }
      EventStatistic: {
        payload: Prisma.$EventStatisticPayload<ExtArgs>
        fields: Prisma.EventStatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventStatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventStatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>
          }
          findFirst: {
            args: Prisma.EventStatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventStatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>
          }
          findMany: {
            args: Prisma.EventStatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>[]
          }
          create: {
            args: Prisma.EventStatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>
          }
          createMany: {
            args: Prisma.EventStatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventStatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>[]
          }
          delete: {
            args: Prisma.EventStatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>
          }
          update: {
            args: Prisma.EventStatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>
          }
          deleteMany: {
            args: Prisma.EventStatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventStatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventStatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>[]
          }
          upsert: {
            args: Prisma.EventStatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventStatisticPayload>
          }
          aggregate: {
            args: Prisma.EventStatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventStatistic>
          }
          groupBy: {
            args: Prisma.EventStatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventStatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventStatisticCountArgs<ExtArgs>
            result: $Utils.Optional<EventStatisticCountAggregateOutputType> | number
          }
        }
      }
      EmailVerification: {
        payload: Prisma.$EmailVerificationPayload<ExtArgs>
        fields: Prisma.EmailVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          update: {
            args: Prisma.EmailVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerification>
          }
          groupBy: {
            args: Prisma.EmailVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationCountAggregateOutputType> | number
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
    user?: UserOmit
    referralPoint?: ReferralPointOmit
    userDiscount?: UserDiscountOmit
    event?: EventOmit
    ticketPurchase?: TicketPurchaseOmit
    eventStatistic?: EventStatisticOmit
    emailVerification?: EmailVerificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    referredUsers: number
    referralPoints: number
    givenReferrals: number
    userDiscounts: number
    events: number
    purchases: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredUsers?: boolean | UserCountOutputTypeCountReferredUsersArgs
    referralPoints?: boolean | UserCountOutputTypeCountReferralPointsArgs
    givenReferrals?: boolean | UserCountOutputTypeCountGivenReferralsArgs
    userDiscounts?: boolean | UserCountOutputTypeCountUserDiscountsArgs
    events?: boolean | UserCountOutputTypeCountEventsArgs
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferralPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralPointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGivenReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralPointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiscountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPurchaseWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    purchases: number
    statistics: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | EventCountOutputTypeCountPurchasesArgs
    statistics?: boolean | EventCountOutputTypeCountStatisticsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPurchaseWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventStatisticWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    referralCode: string | null
    referredBy: string | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    avatar: string | null
    referralCode: string | null
    referredBy: string | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    avatar: number
    referralCode: number
    referredBy: number
    isVerified: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    referralCode?: true
    referredBy?: true
    isVerified?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    referralCode?: true
    referredBy?: true
    isVerified?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    referralCode?: true
    referredBy?: true
    isVerified?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    avatar: string | null
    referralCode: string
    referredBy: string | null
    isVerified: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    referralCode?: boolean
    referredBy?: boolean
    isVerified?: boolean
    createdAt?: boolean
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
    referredUsers?: boolean | User$referredUsersArgs<ExtArgs>
    referralPoints?: boolean | User$referralPointsArgs<ExtArgs>
    givenReferrals?: boolean | User$givenReferralsArgs<ExtArgs>
    userDiscounts?: boolean | User$userDiscountsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    referralCode?: boolean
    referredBy?: boolean
    isVerified?: boolean
    createdAt?: boolean
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    referralCode?: boolean
    referredBy?: boolean
    isVerified?: boolean
    createdAt?: boolean
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    referralCode?: boolean
    referredBy?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "avatar" | "referralCode" | "referredBy" | "isVerified" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
    referredUsers?: boolean | User$referredUsersArgs<ExtArgs>
    referralPoints?: boolean | User$referralPointsArgs<ExtArgs>
    givenReferrals?: boolean | User$givenReferralsArgs<ExtArgs>
    userDiscounts?: boolean | User$userDiscountsArgs<ExtArgs>
    events?: boolean | User$eventsArgs<ExtArgs>
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredByUser?: boolean | User$referredByUserArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      referredByUser: Prisma.$UserPayload<ExtArgs> | null
      referredUsers: Prisma.$UserPayload<ExtArgs>[]
      referralPoints: Prisma.$ReferralPointPayload<ExtArgs>[]
      givenReferrals: Prisma.$ReferralPointPayload<ExtArgs>[]
      userDiscounts: Prisma.$UserDiscountPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
      purchases: Prisma.$TicketPurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      avatar: string | null
      referralCode: string
      referredBy: string | null
      isVerified: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referredByUser<T extends User$referredByUserArgs<ExtArgs> = {}>(args?: Subset<T, User$referredByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referredUsers<T extends User$referredUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$referredUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referralPoints<T extends User$referralPointsArgs<ExtArgs> = {}>(args?: Subset<T, User$referralPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    givenReferrals<T extends User$givenReferralsArgs<ExtArgs> = {}>(args?: Subset<T, User$givenReferralsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userDiscounts<T extends User$userDiscountsArgs<ExtArgs> = {}>(args?: Subset<T, User$userDiscountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly referredBy: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.referredByUser
   */
  export type User$referredByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.referredUsers
   */
  export type User$referredUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.referralPoints
   */
  export type User$referralPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    where?: ReferralPointWhereInput
    orderBy?: ReferralPointOrderByWithRelationInput | ReferralPointOrderByWithRelationInput[]
    cursor?: ReferralPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralPointScalarFieldEnum | ReferralPointScalarFieldEnum[]
  }

  /**
   * User.givenReferrals
   */
  export type User$givenReferralsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    where?: ReferralPointWhereInput
    orderBy?: ReferralPointOrderByWithRelationInput | ReferralPointOrderByWithRelationInput[]
    cursor?: ReferralPointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralPointScalarFieldEnum | ReferralPointScalarFieldEnum[]
  }

  /**
   * User.userDiscounts
   */
  export type User$userDiscountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    where?: UserDiscountWhereInput
    orderBy?: UserDiscountOrderByWithRelationInput | UserDiscountOrderByWithRelationInput[]
    cursor?: UserDiscountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDiscountScalarFieldEnum | UserDiscountScalarFieldEnum[]
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    where?: TicketPurchaseWhereInput
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    cursor?: TicketPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ReferralPoint
   */

  export type AggregateReferralPoint = {
    _count: ReferralPointCountAggregateOutputType | null
    _avg: ReferralPointAvgAggregateOutputType | null
    _sum: ReferralPointSumAggregateOutputType | null
    _min: ReferralPointMinAggregateOutputType | null
    _max: ReferralPointMaxAggregateOutputType | null
  }

  export type ReferralPointAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    sourceUserId: number | null
    points: number | null
  }

  export type ReferralPointSumAggregateOutputType = {
    id: number | null
    userId: number | null
    sourceUserId: number | null
    points: number | null
  }

  export type ReferralPointMinAggregateOutputType = {
    id: number | null
    userId: number | null
    sourceUserId: number | null
    points: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ReferralPointMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    sourceUserId: number | null
    points: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ReferralPointCountAggregateOutputType = {
    id: number
    userId: number
    sourceUserId: number
    points: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type ReferralPointAvgAggregateInputType = {
    id?: true
    userId?: true
    sourceUserId?: true
    points?: true
  }

  export type ReferralPointSumAggregateInputType = {
    id?: true
    userId?: true
    sourceUserId?: true
    points?: true
  }

  export type ReferralPointMinAggregateInputType = {
    id?: true
    userId?: true
    sourceUserId?: true
    points?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ReferralPointMaxAggregateInputType = {
    id?: true
    userId?: true
    sourceUserId?: true
    points?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ReferralPointCountAggregateInputType = {
    id?: true
    userId?: true
    sourceUserId?: true
    points?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralPointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralPoint to aggregate.
     */
    where?: ReferralPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralPoints to fetch.
     */
    orderBy?: ReferralPointOrderByWithRelationInput | ReferralPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralPoints
    **/
    _count?: true | ReferralPointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferralPointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralPointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralPointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralPointMaxAggregateInputType
  }

  export type GetReferralPointAggregateType<T extends ReferralPointAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralPoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralPoint[P]>
      : GetScalarType<T[P], AggregateReferralPoint[P]>
  }




  export type ReferralPointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralPointWhereInput
    orderBy?: ReferralPointOrderByWithAggregationInput | ReferralPointOrderByWithAggregationInput[]
    by: ReferralPointScalarFieldEnum[] | ReferralPointScalarFieldEnum
    having?: ReferralPointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralPointCountAggregateInputType | true
    _avg?: ReferralPointAvgAggregateInputType
    _sum?: ReferralPointSumAggregateInputType
    _min?: ReferralPointMinAggregateInputType
    _max?: ReferralPointMaxAggregateInputType
  }

  export type ReferralPointGroupByOutputType = {
    id: number
    userId: number
    sourceUserId: number
    points: number
    expiresAt: Date
    createdAt: Date
    _count: ReferralPointCountAggregateOutputType | null
    _avg: ReferralPointAvgAggregateOutputType | null
    _sum: ReferralPointSumAggregateOutputType | null
    _min: ReferralPointMinAggregateOutputType | null
    _max: ReferralPointMaxAggregateOutputType | null
  }

  type GetReferralPointGroupByPayload<T extends ReferralPointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralPointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralPointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralPointGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralPointGroupByOutputType[P]>
        }
      >
    >


  export type ReferralPointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sourceUserId?: boolean
    points?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralPoint"]>

  export type ReferralPointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sourceUserId?: boolean
    points?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralPoint"]>

  export type ReferralPointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    sourceUserId?: boolean
    points?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralPoint"]>

  export type ReferralPointSelectScalar = {
    id?: boolean
    userId?: boolean
    sourceUserId?: boolean
    points?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type ReferralPointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "sourceUserId" | "points" | "expiresAt" | "createdAt", ExtArgs["result"]["referralPoint"]>
  export type ReferralPointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralPointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralPointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sourceUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralPointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralPoint"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sourceUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      sourceUserId: number
      points: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["referralPoint"]>
    composites: {}
  }

  type ReferralPointGetPayload<S extends boolean | null | undefined | ReferralPointDefaultArgs> = $Result.GetResult<Prisma.$ReferralPointPayload, S>

  type ReferralPointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralPointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralPointCountAggregateInputType | true
    }

  export interface ReferralPointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralPoint'], meta: { name: 'ReferralPoint' } }
    /**
     * Find zero or one ReferralPoint that matches the filter.
     * @param {ReferralPointFindUniqueArgs} args - Arguments to find a ReferralPoint
     * @example
     * // Get one ReferralPoint
     * const referralPoint = await prisma.referralPoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralPointFindUniqueArgs>(args: SelectSubset<T, ReferralPointFindUniqueArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralPoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralPointFindUniqueOrThrowArgs} args - Arguments to find a ReferralPoint
     * @example
     * // Get one ReferralPoint
     * const referralPoint = await prisma.referralPoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralPointFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralPointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralPoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralPointFindFirstArgs} args - Arguments to find a ReferralPoint
     * @example
     * // Get one ReferralPoint
     * const referralPoint = await prisma.referralPoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralPointFindFirstArgs>(args?: SelectSubset<T, ReferralPointFindFirstArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralPoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralPointFindFirstOrThrowArgs} args - Arguments to find a ReferralPoint
     * @example
     * // Get one ReferralPoint
     * const referralPoint = await prisma.referralPoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralPointFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralPointFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralPointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralPoints
     * const referralPoints = await prisma.referralPoint.findMany()
     * 
     * // Get first 10 ReferralPoints
     * const referralPoints = await prisma.referralPoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralPointWithIdOnly = await prisma.referralPoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralPointFindManyArgs>(args?: SelectSubset<T, ReferralPointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralPoint.
     * @param {ReferralPointCreateArgs} args - Arguments to create a ReferralPoint.
     * @example
     * // Create one ReferralPoint
     * const ReferralPoint = await prisma.referralPoint.create({
     *   data: {
     *     // ... data to create a ReferralPoint
     *   }
     * })
     * 
     */
    create<T extends ReferralPointCreateArgs>(args: SelectSubset<T, ReferralPointCreateArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralPoints.
     * @param {ReferralPointCreateManyArgs} args - Arguments to create many ReferralPoints.
     * @example
     * // Create many ReferralPoints
     * const referralPoint = await prisma.referralPoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralPointCreateManyArgs>(args?: SelectSubset<T, ReferralPointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralPoints and returns the data saved in the database.
     * @param {ReferralPointCreateManyAndReturnArgs} args - Arguments to create many ReferralPoints.
     * @example
     * // Create many ReferralPoints
     * const referralPoint = await prisma.referralPoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralPoints and only return the `id`
     * const referralPointWithIdOnly = await prisma.referralPoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralPointCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralPointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferralPoint.
     * @param {ReferralPointDeleteArgs} args - Arguments to delete one ReferralPoint.
     * @example
     * // Delete one ReferralPoint
     * const ReferralPoint = await prisma.referralPoint.delete({
     *   where: {
     *     // ... filter to delete one ReferralPoint
     *   }
     * })
     * 
     */
    delete<T extends ReferralPointDeleteArgs>(args: SelectSubset<T, ReferralPointDeleteArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralPoint.
     * @param {ReferralPointUpdateArgs} args - Arguments to update one ReferralPoint.
     * @example
     * // Update one ReferralPoint
     * const referralPoint = await prisma.referralPoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralPointUpdateArgs>(args: SelectSubset<T, ReferralPointUpdateArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralPoints.
     * @param {ReferralPointDeleteManyArgs} args - Arguments to filter ReferralPoints to delete.
     * @example
     * // Delete a few ReferralPoints
     * const { count } = await prisma.referralPoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralPointDeleteManyArgs>(args?: SelectSubset<T, ReferralPointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralPointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralPoints
     * const referralPoint = await prisma.referralPoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralPointUpdateManyArgs>(args: SelectSubset<T, ReferralPointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralPoints and returns the data updated in the database.
     * @param {ReferralPointUpdateManyAndReturnArgs} args - Arguments to update many ReferralPoints.
     * @example
     * // Update many ReferralPoints
     * const referralPoint = await prisma.referralPoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferralPoints and only return the `id`
     * const referralPointWithIdOnly = await prisma.referralPoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferralPointUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralPointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferralPoint.
     * @param {ReferralPointUpsertArgs} args - Arguments to update or create a ReferralPoint.
     * @example
     * // Update or create a ReferralPoint
     * const referralPoint = await prisma.referralPoint.upsert({
     *   create: {
     *     // ... data to create a ReferralPoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralPoint we want to update
     *   }
     * })
     */
    upsert<T extends ReferralPointUpsertArgs>(args: SelectSubset<T, ReferralPointUpsertArgs<ExtArgs>>): Prisma__ReferralPointClient<$Result.GetResult<Prisma.$ReferralPointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralPointCountArgs} args - Arguments to filter ReferralPoints to count.
     * @example
     * // Count the number of ReferralPoints
     * const count = await prisma.referralPoint.count({
     *   where: {
     *     // ... the filter for the ReferralPoints we want to count
     *   }
     * })
    **/
    count<T extends ReferralPointCountArgs>(
      args?: Subset<T, ReferralPointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralPointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralPointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralPointAggregateArgs>(args: Subset<T, ReferralPointAggregateArgs>): Prisma.PrismaPromise<GetReferralPointAggregateType<T>>

    /**
     * Group by ReferralPoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralPointGroupByArgs} args - Group by arguments.
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
      T extends ReferralPointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralPointGroupByArgs['orderBy'] }
        : { orderBy?: ReferralPointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralPointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralPoint model
   */
  readonly fields: ReferralPointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralPoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralPointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sourceUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReferralPoint model
   */
  interface ReferralPointFieldRefs {
    readonly id: FieldRef<"ReferralPoint", 'Int'>
    readonly userId: FieldRef<"ReferralPoint", 'Int'>
    readonly sourceUserId: FieldRef<"ReferralPoint", 'Int'>
    readonly points: FieldRef<"ReferralPoint", 'Int'>
    readonly expiresAt: FieldRef<"ReferralPoint", 'DateTime'>
    readonly createdAt: FieldRef<"ReferralPoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralPoint findUnique
   */
  export type ReferralPointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * Filter, which ReferralPoint to fetch.
     */
    where: ReferralPointWhereUniqueInput
  }

  /**
   * ReferralPoint findUniqueOrThrow
   */
  export type ReferralPointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * Filter, which ReferralPoint to fetch.
     */
    where: ReferralPointWhereUniqueInput
  }

  /**
   * ReferralPoint findFirst
   */
  export type ReferralPointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * Filter, which ReferralPoint to fetch.
     */
    where?: ReferralPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralPoints to fetch.
     */
    orderBy?: ReferralPointOrderByWithRelationInput | ReferralPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralPoints.
     */
    cursor?: ReferralPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralPoints.
     */
    distinct?: ReferralPointScalarFieldEnum | ReferralPointScalarFieldEnum[]
  }

  /**
   * ReferralPoint findFirstOrThrow
   */
  export type ReferralPointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * Filter, which ReferralPoint to fetch.
     */
    where?: ReferralPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralPoints to fetch.
     */
    orderBy?: ReferralPointOrderByWithRelationInput | ReferralPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralPoints.
     */
    cursor?: ReferralPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralPoints.
     */
    distinct?: ReferralPointScalarFieldEnum | ReferralPointScalarFieldEnum[]
  }

  /**
   * ReferralPoint findMany
   */
  export type ReferralPointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * Filter, which ReferralPoints to fetch.
     */
    where?: ReferralPointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralPoints to fetch.
     */
    orderBy?: ReferralPointOrderByWithRelationInput | ReferralPointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralPoints.
     */
    cursor?: ReferralPointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralPoints.
     */
    skip?: number
    distinct?: ReferralPointScalarFieldEnum | ReferralPointScalarFieldEnum[]
  }

  /**
   * ReferralPoint create
   */
  export type ReferralPointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralPoint.
     */
    data: XOR<ReferralPointCreateInput, ReferralPointUncheckedCreateInput>
  }

  /**
   * ReferralPoint createMany
   */
  export type ReferralPointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralPoints.
     */
    data: ReferralPointCreateManyInput | ReferralPointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralPoint createManyAndReturn
   */
  export type ReferralPointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * The data used to create many ReferralPoints.
     */
    data: ReferralPointCreateManyInput | ReferralPointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralPoint update
   */
  export type ReferralPointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralPoint.
     */
    data: XOR<ReferralPointUpdateInput, ReferralPointUncheckedUpdateInput>
    /**
     * Choose, which ReferralPoint to update.
     */
    where: ReferralPointWhereUniqueInput
  }

  /**
   * ReferralPoint updateMany
   */
  export type ReferralPointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralPoints.
     */
    data: XOR<ReferralPointUpdateManyMutationInput, ReferralPointUncheckedUpdateManyInput>
    /**
     * Filter which ReferralPoints to update
     */
    where?: ReferralPointWhereInput
    /**
     * Limit how many ReferralPoints to update.
     */
    limit?: number
  }

  /**
   * ReferralPoint updateManyAndReturn
   */
  export type ReferralPointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * The data used to update ReferralPoints.
     */
    data: XOR<ReferralPointUpdateManyMutationInput, ReferralPointUncheckedUpdateManyInput>
    /**
     * Filter which ReferralPoints to update
     */
    where?: ReferralPointWhereInput
    /**
     * Limit how many ReferralPoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralPoint upsert
   */
  export type ReferralPointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralPoint to update in case it exists.
     */
    where: ReferralPointWhereUniqueInput
    /**
     * In case the ReferralPoint found by the `where` argument doesn't exist, create a new ReferralPoint with this data.
     */
    create: XOR<ReferralPointCreateInput, ReferralPointUncheckedCreateInput>
    /**
     * In case the ReferralPoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralPointUpdateInput, ReferralPointUncheckedUpdateInput>
  }

  /**
   * ReferralPoint delete
   */
  export type ReferralPointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
    /**
     * Filter which ReferralPoint to delete.
     */
    where: ReferralPointWhereUniqueInput
  }

  /**
   * ReferralPoint deleteMany
   */
  export type ReferralPointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralPoints to delete
     */
    where?: ReferralPointWhereInput
    /**
     * Limit how many ReferralPoints to delete.
     */
    limit?: number
  }

  /**
   * ReferralPoint without action
   */
  export type ReferralPointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralPoint
     */
    select?: ReferralPointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralPoint
     */
    omit?: ReferralPointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralPointInclude<ExtArgs> | null
  }


  /**
   * Model UserDiscount
   */

  export type AggregateUserDiscount = {
    _count: UserDiscountCountAggregateOutputType | null
    _avg: UserDiscountAvgAggregateOutputType | null
    _sum: UserDiscountSumAggregateOutputType | null
    _min: UserDiscountMinAggregateOutputType | null
    _max: UserDiscountMaxAggregateOutputType | null
  }

  export type UserDiscountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    discount: number | null
  }

  export type UserDiscountSumAggregateOutputType = {
    id: number | null
    userId: number | null
    discount: number | null
  }

  export type UserDiscountMinAggregateOutputType = {
    id: number | null
    userId: number | null
    referralCode: string | null
    discount: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserDiscountMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    referralCode: string | null
    discount: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type UserDiscountCountAggregateOutputType = {
    id: number
    userId: number
    referralCode: number
    discount: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type UserDiscountAvgAggregateInputType = {
    id?: true
    userId?: true
    discount?: true
  }

  export type UserDiscountSumAggregateInputType = {
    id?: true
    userId?: true
    discount?: true
  }

  export type UserDiscountMinAggregateInputType = {
    id?: true
    userId?: true
    referralCode?: true
    discount?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserDiscountMaxAggregateInputType = {
    id?: true
    userId?: true
    referralCode?: true
    discount?: true
    expiresAt?: true
    createdAt?: true
  }

  export type UserDiscountCountAggregateInputType = {
    id?: true
    userId?: true
    referralCode?: true
    discount?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserDiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDiscount to aggregate.
     */
    where?: UserDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscounts to fetch.
     */
    orderBy?: UserDiscountOrderByWithRelationInput | UserDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDiscounts
    **/
    _count?: true | UserDiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserDiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserDiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDiscountMaxAggregateInputType
  }

  export type GetUserDiscountAggregateType<T extends UserDiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDiscount[P]>
      : GetScalarType<T[P], AggregateUserDiscount[P]>
  }




  export type UserDiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDiscountWhereInput
    orderBy?: UserDiscountOrderByWithAggregationInput | UserDiscountOrderByWithAggregationInput[]
    by: UserDiscountScalarFieldEnum[] | UserDiscountScalarFieldEnum
    having?: UserDiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDiscountCountAggregateInputType | true
    _avg?: UserDiscountAvgAggregateInputType
    _sum?: UserDiscountSumAggregateInputType
    _min?: UserDiscountMinAggregateInputType
    _max?: UserDiscountMaxAggregateInputType
  }

  export type UserDiscountGroupByOutputType = {
    id: number
    userId: number
    referralCode: string
    discount: number
    expiresAt: Date
    createdAt: Date
    _count: UserDiscountCountAggregateOutputType | null
    _avg: UserDiscountAvgAggregateOutputType | null
    _sum: UserDiscountSumAggregateOutputType | null
    _min: UserDiscountMinAggregateOutputType | null
    _max: UserDiscountMaxAggregateOutputType | null
  }

  type GetUserDiscountGroupByPayload<T extends UserDiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDiscountGroupByOutputType[P]>
            : GetScalarType<T[P], UserDiscountGroupByOutputType[P]>
        }
      >
    >


  export type UserDiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referralCode?: boolean
    discount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDiscount"]>

  export type UserDiscountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referralCode?: boolean
    discount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDiscount"]>

  export type UserDiscountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    referralCode?: boolean
    discount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDiscount"]>

  export type UserDiscountSelectScalar = {
    id?: boolean
    userId?: boolean
    referralCode?: boolean
    discount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type UserDiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "referralCode" | "discount" | "expiresAt" | "createdAt", ExtArgs["result"]["userDiscount"]>
  export type UserDiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDiscountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDiscountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDiscount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      referralCode: string
      discount: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["userDiscount"]>
    composites: {}
  }

  type UserDiscountGetPayload<S extends boolean | null | undefined | UserDiscountDefaultArgs> = $Result.GetResult<Prisma.$UserDiscountPayload, S>

  type UserDiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDiscountCountAggregateInputType | true
    }

  export interface UserDiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDiscount'], meta: { name: 'UserDiscount' } }
    /**
     * Find zero or one UserDiscount that matches the filter.
     * @param {UserDiscountFindUniqueArgs} args - Arguments to find a UserDiscount
     * @example
     * // Get one UserDiscount
     * const userDiscount = await prisma.userDiscount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDiscountFindUniqueArgs>(args: SelectSubset<T, UserDiscountFindUniqueArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDiscount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDiscountFindUniqueOrThrowArgs} args - Arguments to find a UserDiscount
     * @example
     * // Get one UserDiscount
     * const userDiscount = await prisma.userDiscount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDiscount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscountFindFirstArgs} args - Arguments to find a UserDiscount
     * @example
     * // Get one UserDiscount
     * const userDiscount = await prisma.userDiscount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDiscountFindFirstArgs>(args?: SelectSubset<T, UserDiscountFindFirstArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDiscount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscountFindFirstOrThrowArgs} args - Arguments to find a UserDiscount
     * @example
     * // Get one UserDiscount
     * const userDiscount = await prisma.userDiscount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDiscounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDiscounts
     * const userDiscounts = await prisma.userDiscount.findMany()
     * 
     * // Get first 10 UserDiscounts
     * const userDiscounts = await prisma.userDiscount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userDiscountWithIdOnly = await prisma.userDiscount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserDiscountFindManyArgs>(args?: SelectSubset<T, UserDiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDiscount.
     * @param {UserDiscountCreateArgs} args - Arguments to create a UserDiscount.
     * @example
     * // Create one UserDiscount
     * const UserDiscount = await prisma.userDiscount.create({
     *   data: {
     *     // ... data to create a UserDiscount
     *   }
     * })
     * 
     */
    create<T extends UserDiscountCreateArgs>(args: SelectSubset<T, UserDiscountCreateArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDiscounts.
     * @param {UserDiscountCreateManyArgs} args - Arguments to create many UserDiscounts.
     * @example
     * // Create many UserDiscounts
     * const userDiscount = await prisma.userDiscount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDiscountCreateManyArgs>(args?: SelectSubset<T, UserDiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDiscounts and returns the data saved in the database.
     * @param {UserDiscountCreateManyAndReturnArgs} args - Arguments to create many UserDiscounts.
     * @example
     * // Create many UserDiscounts
     * const userDiscount = await prisma.userDiscount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDiscounts and only return the `id`
     * const userDiscountWithIdOnly = await prisma.userDiscount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDiscountCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDiscount.
     * @param {UserDiscountDeleteArgs} args - Arguments to delete one UserDiscount.
     * @example
     * // Delete one UserDiscount
     * const UserDiscount = await prisma.userDiscount.delete({
     *   where: {
     *     // ... filter to delete one UserDiscount
     *   }
     * })
     * 
     */
    delete<T extends UserDiscountDeleteArgs>(args: SelectSubset<T, UserDiscountDeleteArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDiscount.
     * @param {UserDiscountUpdateArgs} args - Arguments to update one UserDiscount.
     * @example
     * // Update one UserDiscount
     * const userDiscount = await prisma.userDiscount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDiscountUpdateArgs>(args: SelectSubset<T, UserDiscountUpdateArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDiscounts.
     * @param {UserDiscountDeleteManyArgs} args - Arguments to filter UserDiscounts to delete.
     * @example
     * // Delete a few UserDiscounts
     * const { count } = await prisma.userDiscount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDiscountDeleteManyArgs>(args?: SelectSubset<T, UserDiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDiscounts
     * const userDiscount = await prisma.userDiscount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDiscountUpdateManyArgs>(args: SelectSubset<T, UserDiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDiscounts and returns the data updated in the database.
     * @param {UserDiscountUpdateManyAndReturnArgs} args - Arguments to update many UserDiscounts.
     * @example
     * // Update many UserDiscounts
     * const userDiscount = await prisma.userDiscount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDiscounts and only return the `id`
     * const userDiscountWithIdOnly = await prisma.userDiscount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDiscountUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDiscount.
     * @param {UserDiscountUpsertArgs} args - Arguments to update or create a UserDiscount.
     * @example
     * // Update or create a UserDiscount
     * const userDiscount = await prisma.userDiscount.upsert({
     *   create: {
     *     // ... data to create a UserDiscount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDiscount we want to update
     *   }
     * })
     */
    upsert<T extends UserDiscountUpsertArgs>(args: SelectSubset<T, UserDiscountUpsertArgs<ExtArgs>>): Prisma__UserDiscountClient<$Result.GetResult<Prisma.$UserDiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscountCountArgs} args - Arguments to filter UserDiscounts to count.
     * @example
     * // Count the number of UserDiscounts
     * const count = await prisma.userDiscount.count({
     *   where: {
     *     // ... the filter for the UserDiscounts we want to count
     *   }
     * })
    **/
    count<T extends UserDiscountCountArgs>(
      args?: Subset<T, UserDiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserDiscountAggregateArgs>(args: Subset<T, UserDiscountAggregateArgs>): Prisma.PrismaPromise<GetUserDiscountAggregateType<T>>

    /**
     * Group by UserDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDiscountGroupByArgs} args - Group by arguments.
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
      T extends UserDiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDiscountGroupByArgs['orderBy'] }
        : { orderBy?: UserDiscountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserDiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDiscount model
   */
  readonly fields: UserDiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDiscount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserDiscount model
   */
  interface UserDiscountFieldRefs {
    readonly id: FieldRef<"UserDiscount", 'Int'>
    readonly userId: FieldRef<"UserDiscount", 'Int'>
    readonly referralCode: FieldRef<"UserDiscount", 'String'>
    readonly discount: FieldRef<"UserDiscount", 'Float'>
    readonly expiresAt: FieldRef<"UserDiscount", 'DateTime'>
    readonly createdAt: FieldRef<"UserDiscount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDiscount findUnique
   */
  export type UserDiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscount to fetch.
     */
    where: UserDiscountWhereUniqueInput
  }

  /**
   * UserDiscount findUniqueOrThrow
   */
  export type UserDiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscount to fetch.
     */
    where: UserDiscountWhereUniqueInput
  }

  /**
   * UserDiscount findFirst
   */
  export type UserDiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscount to fetch.
     */
    where?: UserDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscounts to fetch.
     */
    orderBy?: UserDiscountOrderByWithRelationInput | UserDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiscounts.
     */
    cursor?: UserDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiscounts.
     */
    distinct?: UserDiscountScalarFieldEnum | UserDiscountScalarFieldEnum[]
  }

  /**
   * UserDiscount findFirstOrThrow
   */
  export type UserDiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscount to fetch.
     */
    where?: UserDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscounts to fetch.
     */
    orderBy?: UserDiscountOrderByWithRelationInput | UserDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDiscounts.
     */
    cursor?: UserDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDiscounts.
     */
    distinct?: UserDiscountScalarFieldEnum | UserDiscountScalarFieldEnum[]
  }

  /**
   * UserDiscount findMany
   */
  export type UserDiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * Filter, which UserDiscounts to fetch.
     */
    where?: UserDiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDiscounts to fetch.
     */
    orderBy?: UserDiscountOrderByWithRelationInput | UserDiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDiscounts.
     */
    cursor?: UserDiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDiscounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDiscounts.
     */
    skip?: number
    distinct?: UserDiscountScalarFieldEnum | UserDiscountScalarFieldEnum[]
  }

  /**
   * UserDiscount create
   */
  export type UserDiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDiscount.
     */
    data: XOR<UserDiscountCreateInput, UserDiscountUncheckedCreateInput>
  }

  /**
   * UserDiscount createMany
   */
  export type UserDiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDiscounts.
     */
    data: UserDiscountCreateManyInput | UserDiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDiscount createManyAndReturn
   */
  export type UserDiscountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * The data used to create many UserDiscounts.
     */
    data: UserDiscountCreateManyInput | UserDiscountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDiscount update
   */
  export type UserDiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDiscount.
     */
    data: XOR<UserDiscountUpdateInput, UserDiscountUncheckedUpdateInput>
    /**
     * Choose, which UserDiscount to update.
     */
    where: UserDiscountWhereUniqueInput
  }

  /**
   * UserDiscount updateMany
   */
  export type UserDiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDiscounts.
     */
    data: XOR<UserDiscountUpdateManyMutationInput, UserDiscountUncheckedUpdateManyInput>
    /**
     * Filter which UserDiscounts to update
     */
    where?: UserDiscountWhereInput
    /**
     * Limit how many UserDiscounts to update.
     */
    limit?: number
  }

  /**
   * UserDiscount updateManyAndReturn
   */
  export type UserDiscountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * The data used to update UserDiscounts.
     */
    data: XOR<UserDiscountUpdateManyMutationInput, UserDiscountUncheckedUpdateManyInput>
    /**
     * Filter which UserDiscounts to update
     */
    where?: UserDiscountWhereInput
    /**
     * Limit how many UserDiscounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDiscount upsert
   */
  export type UserDiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDiscount to update in case it exists.
     */
    where: UserDiscountWhereUniqueInput
    /**
     * In case the UserDiscount found by the `where` argument doesn't exist, create a new UserDiscount with this data.
     */
    create: XOR<UserDiscountCreateInput, UserDiscountUncheckedCreateInput>
    /**
     * In case the UserDiscount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDiscountUpdateInput, UserDiscountUncheckedUpdateInput>
  }

  /**
   * UserDiscount delete
   */
  export type UserDiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
    /**
     * Filter which UserDiscount to delete.
     */
    where: UserDiscountWhereUniqueInput
  }

  /**
   * UserDiscount deleteMany
   */
  export type UserDiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDiscounts to delete
     */
    where?: UserDiscountWhereInput
    /**
     * Limit how many UserDiscounts to delete.
     */
    limit?: number
  }

  /**
   * UserDiscount without action
   */
  export type UserDiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDiscount
     */
    select?: UserDiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDiscount
     */
    omit?: UserDiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDiscountInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    organizerId: number | null
    ticketPrice: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    organizerId: number | null
    ticketPrice: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    organizerId: number | null
    title: string | null
    description: string | null
    location: string | null
    eventDate: Date | null
    ticketPrice: number | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    organizerId: number | null
    title: string | null
    description: string | null
    location: string | null
    eventDate: Date | null
    ticketPrice: number | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    organizerId: number
    title: number
    description: number
    location: number
    eventDate: number
    ticketPrice: number
    createdAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    organizerId?: true
    ticketPrice?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    organizerId?: true
    ticketPrice?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    description?: true
    location?: true
    eventDate?: true
    ticketPrice?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    description?: true
    location?: true
    eventDate?: true
    ticketPrice?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    description?: true
    location?: true
    eventDate?: true
    ticketPrice?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    organizerId: number
    title: string
    description: string
    location: string
    eventDate: Date
    ticketPrice: number
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    ticketPrice?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    purchases?: boolean | Event$purchasesArgs<ExtArgs>
    statistics?: boolean | Event$statisticsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    ticketPrice?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    ticketPrice?: boolean
    createdAt?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    organizerId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    eventDate?: boolean
    ticketPrice?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerId" | "title" | "description" | "location" | "eventDate" | "ticketPrice" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    purchases?: boolean | Event$purchasesArgs<ExtArgs>
    statistics?: boolean | Event$statisticsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      purchases: Prisma.$TicketPurchasePayload<ExtArgs>[]
      statistics: Prisma.$EventStatisticPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      organizerId: number
      title: string
      description: string
      location: string
      eventDate: Date
      ticketPrice: number
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchases<T extends Event$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, Event$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statistics<T extends Event$statisticsArgs<ExtArgs> = {}>(args?: Subset<T, Event$statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly organizerId: FieldRef<"Event", 'Int'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly ticketPrice: FieldRef<"Event", 'Float'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.purchases
   */
  export type Event$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    where?: TicketPurchaseWhereInput
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    cursor?: TicketPurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * Event.statistics
   */
  export type Event$statisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    where?: EventStatisticWhereInput
    orderBy?: EventStatisticOrderByWithRelationInput | EventStatisticOrderByWithRelationInput[]
    cursor?: EventStatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventStatisticScalarFieldEnum | EventStatisticScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model TicketPurchase
   */

  export type AggregateTicketPurchase = {
    _count: TicketPurchaseCountAggregateOutputType | null
    _avg: TicketPurchaseAvgAggregateOutputType | null
    _sum: TicketPurchaseSumAggregateOutputType | null
    _min: TicketPurchaseMinAggregateOutputType | null
    _max: TicketPurchaseMaxAggregateOutputType | null
  }

  export type TicketPurchaseAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    quantity: number | null
    totalPrice: number | null
    pointsRedeemed: number | null
    discountApplied: number | null
  }

  export type TicketPurchaseSumAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    quantity: number | null
    totalPrice: number | null
    pointsRedeemed: number | null
    discountApplied: number | null
  }

  export type TicketPurchaseMinAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    quantity: number | null
    totalPrice: number | null
    pointsRedeemed: number | null
    discountApplied: number | null
    purchaseDate: Date | null
  }

  export type TicketPurchaseMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    eventId: number | null
    quantity: number | null
    totalPrice: number | null
    pointsRedeemed: number | null
    discountApplied: number | null
    purchaseDate: Date | null
  }

  export type TicketPurchaseCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    quantity: number
    totalPrice: number
    pointsRedeemed: number
    discountApplied: number
    purchaseDate: number
    _all: number
  }


  export type TicketPurchaseAvgAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    quantity?: true
    totalPrice?: true
    pointsRedeemed?: true
    discountApplied?: true
  }

  export type TicketPurchaseSumAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    quantity?: true
    totalPrice?: true
    pointsRedeemed?: true
    discountApplied?: true
  }

  export type TicketPurchaseMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    quantity?: true
    totalPrice?: true
    pointsRedeemed?: true
    discountApplied?: true
    purchaseDate?: true
  }

  export type TicketPurchaseMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    quantity?: true
    totalPrice?: true
    pointsRedeemed?: true
    discountApplied?: true
    purchaseDate?: true
  }

  export type TicketPurchaseCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    quantity?: true
    totalPrice?: true
    pointsRedeemed?: true
    discountApplied?: true
    purchaseDate?: true
    _all?: true
  }

  export type TicketPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPurchase to aggregate.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketPurchases
    **/
    _count?: true | TicketPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketPurchaseMaxAggregateInputType
  }

  export type GetTicketPurchaseAggregateType<T extends TicketPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketPurchase[P]>
      : GetScalarType<T[P], AggregateTicketPurchase[P]>
  }




  export type TicketPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketPurchaseWhereInput
    orderBy?: TicketPurchaseOrderByWithAggregationInput | TicketPurchaseOrderByWithAggregationInput[]
    by: TicketPurchaseScalarFieldEnum[] | TicketPurchaseScalarFieldEnum
    having?: TicketPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketPurchaseCountAggregateInputType | true
    _avg?: TicketPurchaseAvgAggregateInputType
    _sum?: TicketPurchaseSumAggregateInputType
    _min?: TicketPurchaseMinAggregateInputType
    _max?: TicketPurchaseMaxAggregateInputType
  }

  export type TicketPurchaseGroupByOutputType = {
    id: number
    userId: number
    eventId: number
    quantity: number
    totalPrice: number
    pointsRedeemed: number | null
    discountApplied: number | null
    purchaseDate: Date
    _count: TicketPurchaseCountAggregateOutputType | null
    _avg: TicketPurchaseAvgAggregateOutputType | null
    _sum: TicketPurchaseSumAggregateOutputType | null
    _min: TicketPurchaseMinAggregateOutputType | null
    _max: TicketPurchaseMaxAggregateOutputType | null
  }

  type GetTicketPurchaseGroupByPayload<T extends TicketPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], TicketPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type TicketPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    pointsRedeemed?: boolean
    discountApplied?: boolean
    purchaseDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPurchase"]>

  export type TicketPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    pointsRedeemed?: boolean
    discountApplied?: boolean
    purchaseDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPurchase"]>

  export type TicketPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    pointsRedeemed?: boolean
    discountApplied?: boolean
    purchaseDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketPurchase"]>

  export type TicketPurchaseSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    pointsRedeemed?: boolean
    discountApplied?: boolean
    purchaseDate?: boolean
  }

  export type TicketPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "quantity" | "totalPrice" | "pointsRedeemed" | "discountApplied" | "purchaseDate", ExtArgs["result"]["ticketPurchase"]>
  export type TicketPurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TicketPurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type TicketPurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $TicketPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketPurchase"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      eventId: number
      quantity: number
      totalPrice: number
      pointsRedeemed: number | null
      discountApplied: number | null
      purchaseDate: Date
    }, ExtArgs["result"]["ticketPurchase"]>
    composites: {}
  }

  type TicketPurchaseGetPayload<S extends boolean | null | undefined | TicketPurchaseDefaultArgs> = $Result.GetResult<Prisma.$TicketPurchasePayload, S>

  type TicketPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketPurchaseCountAggregateInputType | true
    }

  export interface TicketPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketPurchase'], meta: { name: 'TicketPurchase' } }
    /**
     * Find zero or one TicketPurchase that matches the filter.
     * @param {TicketPurchaseFindUniqueArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketPurchaseFindUniqueArgs>(args: SelectSubset<T, TicketPurchaseFindUniqueArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketPurchaseFindUniqueOrThrowArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseFindFirstArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketPurchaseFindFirstArgs>(args?: SelectSubset<T, TicketPurchaseFindFirstArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseFindFirstOrThrowArgs} args - Arguments to find a TicketPurchase
     * @example
     * // Get one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketPurchases
     * const ticketPurchases = await prisma.ticketPurchase.findMany()
     * 
     * // Get first 10 TicketPurchases
     * const ticketPurchases = await prisma.ticketPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketPurchaseWithIdOnly = await prisma.ticketPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketPurchaseFindManyArgs>(args?: SelectSubset<T, TicketPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketPurchase.
     * @param {TicketPurchaseCreateArgs} args - Arguments to create a TicketPurchase.
     * @example
     * // Create one TicketPurchase
     * const TicketPurchase = await prisma.ticketPurchase.create({
     *   data: {
     *     // ... data to create a TicketPurchase
     *   }
     * })
     * 
     */
    create<T extends TicketPurchaseCreateArgs>(args: SelectSubset<T, TicketPurchaseCreateArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketPurchases.
     * @param {TicketPurchaseCreateManyArgs} args - Arguments to create many TicketPurchases.
     * @example
     * // Create many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketPurchaseCreateManyArgs>(args?: SelectSubset<T, TicketPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TicketPurchases and returns the data saved in the database.
     * @param {TicketPurchaseCreateManyAndReturnArgs} args - Arguments to create many TicketPurchases.
     * @example
     * // Create many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TicketPurchases and only return the `id`
     * const ticketPurchaseWithIdOnly = await prisma.ticketPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TicketPurchase.
     * @param {TicketPurchaseDeleteArgs} args - Arguments to delete one TicketPurchase.
     * @example
     * // Delete one TicketPurchase
     * const TicketPurchase = await prisma.ticketPurchase.delete({
     *   where: {
     *     // ... filter to delete one TicketPurchase
     *   }
     * })
     * 
     */
    delete<T extends TicketPurchaseDeleteArgs>(args: SelectSubset<T, TicketPurchaseDeleteArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketPurchase.
     * @param {TicketPurchaseUpdateArgs} args - Arguments to update one TicketPurchase.
     * @example
     * // Update one TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketPurchaseUpdateArgs>(args: SelectSubset<T, TicketPurchaseUpdateArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketPurchases.
     * @param {TicketPurchaseDeleteManyArgs} args - Arguments to filter TicketPurchases to delete.
     * @example
     * // Delete a few TicketPurchases
     * const { count } = await prisma.ticketPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketPurchaseDeleteManyArgs>(args?: SelectSubset<T, TicketPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketPurchaseUpdateManyArgs>(args: SelectSubset<T, TicketPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketPurchases and returns the data updated in the database.
     * @param {TicketPurchaseUpdateManyAndReturnArgs} args - Arguments to update many TicketPurchases.
     * @example
     * // Update many TicketPurchases
     * const ticketPurchase = await prisma.ticketPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TicketPurchases and only return the `id`
     * const ticketPurchaseWithIdOnly = await prisma.ticketPurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TicketPurchase.
     * @param {TicketPurchaseUpsertArgs} args - Arguments to update or create a TicketPurchase.
     * @example
     * // Update or create a TicketPurchase
     * const ticketPurchase = await prisma.ticketPurchase.upsert({
     *   create: {
     *     // ... data to create a TicketPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketPurchase we want to update
     *   }
     * })
     */
    upsert<T extends TicketPurchaseUpsertArgs>(args: SelectSubset<T, TicketPurchaseUpsertArgs<ExtArgs>>): Prisma__TicketPurchaseClient<$Result.GetResult<Prisma.$TicketPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseCountArgs} args - Arguments to filter TicketPurchases to count.
     * @example
     * // Count the number of TicketPurchases
     * const count = await prisma.ticketPurchase.count({
     *   where: {
     *     // ... the filter for the TicketPurchases we want to count
     *   }
     * })
    **/
    count<T extends TicketPurchaseCountArgs>(
      args?: Subset<T, TicketPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketPurchaseAggregateArgs>(args: Subset<T, TicketPurchaseAggregateArgs>): Prisma.PrismaPromise<GetTicketPurchaseAggregateType<T>>

    /**
     * Group by TicketPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketPurchaseGroupByArgs} args - Group by arguments.
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
      T extends TicketPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: TicketPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketPurchase model
   */
  readonly fields: TicketPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketPurchase model
   */
  interface TicketPurchaseFieldRefs {
    readonly id: FieldRef<"TicketPurchase", 'Int'>
    readonly userId: FieldRef<"TicketPurchase", 'Int'>
    readonly eventId: FieldRef<"TicketPurchase", 'Int'>
    readonly quantity: FieldRef<"TicketPurchase", 'Int'>
    readonly totalPrice: FieldRef<"TicketPurchase", 'Float'>
    readonly pointsRedeemed: FieldRef<"TicketPurchase", 'Int'>
    readonly discountApplied: FieldRef<"TicketPurchase", 'Float'>
    readonly purchaseDate: FieldRef<"TicketPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketPurchase findUnique
   */
  export type TicketPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase findUniqueOrThrow
   */
  export type TicketPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase findFirst
   */
  export type TicketPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPurchases.
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPurchases.
     */
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * TicketPurchase findFirstOrThrow
   */
  export type TicketPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchase to fetch.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketPurchases.
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketPurchases.
     */
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * TicketPurchase findMany
   */
  export type TicketPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter, which TicketPurchases to fetch.
     */
    where?: TicketPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketPurchases to fetch.
     */
    orderBy?: TicketPurchaseOrderByWithRelationInput | TicketPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketPurchases.
     */
    cursor?: TicketPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketPurchases.
     */
    skip?: number
    distinct?: TicketPurchaseScalarFieldEnum | TicketPurchaseScalarFieldEnum[]
  }

  /**
   * TicketPurchase create
   */
  export type TicketPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketPurchase.
     */
    data: XOR<TicketPurchaseCreateInput, TicketPurchaseUncheckedCreateInput>
  }

  /**
   * TicketPurchase createMany
   */
  export type TicketPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketPurchases.
     */
    data: TicketPurchaseCreateManyInput | TicketPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketPurchase createManyAndReturn
   */
  export type TicketPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many TicketPurchases.
     */
    data: TicketPurchaseCreateManyInput | TicketPurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketPurchase update
   */
  export type TicketPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketPurchase.
     */
    data: XOR<TicketPurchaseUpdateInput, TicketPurchaseUncheckedUpdateInput>
    /**
     * Choose, which TicketPurchase to update.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase updateMany
   */
  export type TicketPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketPurchases.
     */
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which TicketPurchases to update
     */
    where?: TicketPurchaseWhereInput
    /**
     * Limit how many TicketPurchases to update.
     */
    limit?: number
  }

  /**
   * TicketPurchase updateManyAndReturn
   */
  export type TicketPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update TicketPurchases.
     */
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which TicketPurchases to update
     */
    where?: TicketPurchaseWhereInput
    /**
     * Limit how many TicketPurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TicketPurchase upsert
   */
  export type TicketPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketPurchase to update in case it exists.
     */
    where: TicketPurchaseWhereUniqueInput
    /**
     * In case the TicketPurchase found by the `where` argument doesn't exist, create a new TicketPurchase with this data.
     */
    create: XOR<TicketPurchaseCreateInput, TicketPurchaseUncheckedCreateInput>
    /**
     * In case the TicketPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketPurchaseUpdateInput, TicketPurchaseUncheckedUpdateInput>
  }

  /**
   * TicketPurchase delete
   */
  export type TicketPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
    /**
     * Filter which TicketPurchase to delete.
     */
    where: TicketPurchaseWhereUniqueInput
  }

  /**
   * TicketPurchase deleteMany
   */
  export type TicketPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketPurchases to delete
     */
    where?: TicketPurchaseWhereInput
    /**
     * Limit how many TicketPurchases to delete.
     */
    limit?: number
  }

  /**
   * TicketPurchase without action
   */
  export type TicketPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketPurchase
     */
    select?: TicketPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketPurchase
     */
    omit?: TicketPurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketPurchaseInclude<ExtArgs> | null
  }


  /**
   * Model EventStatistic
   */

  export type AggregateEventStatistic = {
    _count: EventStatisticCountAggregateOutputType | null
    _avg: EventStatisticAvgAggregateOutputType | null
    _sum: EventStatisticSumAggregateOutputType | null
    _min: EventStatisticMinAggregateOutputType | null
    _max: EventStatisticMaxAggregateOutputType | null
  }

  export type EventStatisticAvgAggregateOutputType = {
    id: number | null
    eventId: number | null
    totalSales: number | null
    totalTickets: number | null
  }

  export type EventStatisticSumAggregateOutputType = {
    id: number | null
    eventId: number | null
    totalSales: number | null
    totalTickets: number | null
  }

  export type EventStatisticMinAggregateOutputType = {
    id: number | null
    eventId: number | null
    statDate: Date | null
    totalSales: number | null
    totalTickets: number | null
    createdAt: Date | null
  }

  export type EventStatisticMaxAggregateOutputType = {
    id: number | null
    eventId: number | null
    statDate: Date | null
    totalSales: number | null
    totalTickets: number | null
    createdAt: Date | null
  }

  export type EventStatisticCountAggregateOutputType = {
    id: number
    eventId: number
    statDate: number
    totalSales: number
    totalTickets: number
    createdAt: number
    _all: number
  }


  export type EventStatisticAvgAggregateInputType = {
    id?: true
    eventId?: true
    totalSales?: true
    totalTickets?: true
  }

  export type EventStatisticSumAggregateInputType = {
    id?: true
    eventId?: true
    totalSales?: true
    totalTickets?: true
  }

  export type EventStatisticMinAggregateInputType = {
    id?: true
    eventId?: true
    statDate?: true
    totalSales?: true
    totalTickets?: true
    createdAt?: true
  }

  export type EventStatisticMaxAggregateInputType = {
    id?: true
    eventId?: true
    statDate?: true
    totalSales?: true
    totalTickets?: true
    createdAt?: true
  }

  export type EventStatisticCountAggregateInputType = {
    id?: true
    eventId?: true
    statDate?: true
    totalSales?: true
    totalTickets?: true
    createdAt?: true
    _all?: true
  }

  export type EventStatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventStatistic to aggregate.
     */
    where?: EventStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStatistics to fetch.
     */
    orderBy?: EventStatisticOrderByWithRelationInput | EventStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventStatistics
    **/
    _count?: true | EventStatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventStatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventStatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventStatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventStatisticMaxAggregateInputType
  }

  export type GetEventStatisticAggregateType<T extends EventStatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateEventStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventStatistic[P]>
      : GetScalarType<T[P], AggregateEventStatistic[P]>
  }




  export type EventStatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventStatisticWhereInput
    orderBy?: EventStatisticOrderByWithAggregationInput | EventStatisticOrderByWithAggregationInput[]
    by: EventStatisticScalarFieldEnum[] | EventStatisticScalarFieldEnum
    having?: EventStatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventStatisticCountAggregateInputType | true
    _avg?: EventStatisticAvgAggregateInputType
    _sum?: EventStatisticSumAggregateInputType
    _min?: EventStatisticMinAggregateInputType
    _max?: EventStatisticMaxAggregateInputType
  }

  export type EventStatisticGroupByOutputType = {
    id: number
    eventId: number
    statDate: Date
    totalSales: number
    totalTickets: number
    createdAt: Date
    _count: EventStatisticCountAggregateOutputType | null
    _avg: EventStatisticAvgAggregateOutputType | null
    _sum: EventStatisticSumAggregateOutputType | null
    _min: EventStatisticMinAggregateOutputType | null
    _max: EventStatisticMaxAggregateOutputType | null
  }

  type GetEventStatisticGroupByPayload<T extends EventStatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventStatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventStatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventStatisticGroupByOutputType[P]>
            : GetScalarType<T[P], EventStatisticGroupByOutputType[P]>
        }
      >
    >


  export type EventStatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    statDate?: boolean
    totalSales?: boolean
    totalTickets?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventStatistic"]>

  export type EventStatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    statDate?: boolean
    totalSales?: boolean
    totalTickets?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventStatistic"]>

  export type EventStatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    statDate?: boolean
    totalSales?: boolean
    totalTickets?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventStatistic"]>

  export type EventStatisticSelectScalar = {
    id?: boolean
    eventId?: boolean
    statDate?: boolean
    totalSales?: boolean
    totalTickets?: boolean
    createdAt?: boolean
  }

  export type EventStatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "statDate" | "totalSales" | "totalTickets" | "createdAt", ExtArgs["result"]["eventStatistic"]>
  export type EventStatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventStatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventStatisticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventStatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventStatistic"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      eventId: number
      statDate: Date
      totalSales: number
      totalTickets: number
      createdAt: Date
    }, ExtArgs["result"]["eventStatistic"]>
    composites: {}
  }

  type EventStatisticGetPayload<S extends boolean | null | undefined | EventStatisticDefaultArgs> = $Result.GetResult<Prisma.$EventStatisticPayload, S>

  type EventStatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventStatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventStatisticCountAggregateInputType | true
    }

  export interface EventStatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventStatistic'], meta: { name: 'EventStatistic' } }
    /**
     * Find zero or one EventStatistic that matches the filter.
     * @param {EventStatisticFindUniqueArgs} args - Arguments to find a EventStatistic
     * @example
     * // Get one EventStatistic
     * const eventStatistic = await prisma.eventStatistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventStatisticFindUniqueArgs>(args: SelectSubset<T, EventStatisticFindUniqueArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventStatistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventStatisticFindUniqueOrThrowArgs} args - Arguments to find a EventStatistic
     * @example
     * // Get one EventStatistic
     * const eventStatistic = await prisma.eventStatistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventStatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, EventStatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventStatistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatisticFindFirstArgs} args - Arguments to find a EventStatistic
     * @example
     * // Get one EventStatistic
     * const eventStatistic = await prisma.eventStatistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventStatisticFindFirstArgs>(args?: SelectSubset<T, EventStatisticFindFirstArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventStatistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatisticFindFirstOrThrowArgs} args - Arguments to find a EventStatistic
     * @example
     * // Get one EventStatistic
     * const eventStatistic = await prisma.eventStatistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventStatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, EventStatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventStatistics
     * const eventStatistics = await prisma.eventStatistic.findMany()
     * 
     * // Get first 10 EventStatistics
     * const eventStatistics = await prisma.eventStatistic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventStatisticWithIdOnly = await prisma.eventStatistic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventStatisticFindManyArgs>(args?: SelectSubset<T, EventStatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventStatistic.
     * @param {EventStatisticCreateArgs} args - Arguments to create a EventStatistic.
     * @example
     * // Create one EventStatistic
     * const EventStatistic = await prisma.eventStatistic.create({
     *   data: {
     *     // ... data to create a EventStatistic
     *   }
     * })
     * 
     */
    create<T extends EventStatisticCreateArgs>(args: SelectSubset<T, EventStatisticCreateArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventStatistics.
     * @param {EventStatisticCreateManyArgs} args - Arguments to create many EventStatistics.
     * @example
     * // Create many EventStatistics
     * const eventStatistic = await prisma.eventStatistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventStatisticCreateManyArgs>(args?: SelectSubset<T, EventStatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventStatistics and returns the data saved in the database.
     * @param {EventStatisticCreateManyAndReturnArgs} args - Arguments to create many EventStatistics.
     * @example
     * // Create many EventStatistics
     * const eventStatistic = await prisma.eventStatistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventStatistics and only return the `id`
     * const eventStatisticWithIdOnly = await prisma.eventStatistic.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventStatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, EventStatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventStatistic.
     * @param {EventStatisticDeleteArgs} args - Arguments to delete one EventStatistic.
     * @example
     * // Delete one EventStatistic
     * const EventStatistic = await prisma.eventStatistic.delete({
     *   where: {
     *     // ... filter to delete one EventStatistic
     *   }
     * })
     * 
     */
    delete<T extends EventStatisticDeleteArgs>(args: SelectSubset<T, EventStatisticDeleteArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventStatistic.
     * @param {EventStatisticUpdateArgs} args - Arguments to update one EventStatistic.
     * @example
     * // Update one EventStatistic
     * const eventStatistic = await prisma.eventStatistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventStatisticUpdateArgs>(args: SelectSubset<T, EventStatisticUpdateArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventStatistics.
     * @param {EventStatisticDeleteManyArgs} args - Arguments to filter EventStatistics to delete.
     * @example
     * // Delete a few EventStatistics
     * const { count } = await prisma.eventStatistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventStatisticDeleteManyArgs>(args?: SelectSubset<T, EventStatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventStatistics
     * const eventStatistic = await prisma.eventStatistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventStatisticUpdateManyArgs>(args: SelectSubset<T, EventStatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventStatistics and returns the data updated in the database.
     * @param {EventStatisticUpdateManyAndReturnArgs} args - Arguments to update many EventStatistics.
     * @example
     * // Update many EventStatistics
     * const eventStatistic = await prisma.eventStatistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventStatistics and only return the `id`
     * const eventStatisticWithIdOnly = await prisma.eventStatistic.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventStatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, EventStatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventStatistic.
     * @param {EventStatisticUpsertArgs} args - Arguments to update or create a EventStatistic.
     * @example
     * // Update or create a EventStatistic
     * const eventStatistic = await prisma.eventStatistic.upsert({
     *   create: {
     *     // ... data to create a EventStatistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventStatistic we want to update
     *   }
     * })
     */
    upsert<T extends EventStatisticUpsertArgs>(args: SelectSubset<T, EventStatisticUpsertArgs<ExtArgs>>): Prisma__EventStatisticClient<$Result.GetResult<Prisma.$EventStatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatisticCountArgs} args - Arguments to filter EventStatistics to count.
     * @example
     * // Count the number of EventStatistics
     * const count = await prisma.eventStatistic.count({
     *   where: {
     *     // ... the filter for the EventStatistics we want to count
     *   }
     * })
    **/
    count<T extends EventStatisticCountArgs>(
      args?: Subset<T, EventStatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventStatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventStatisticAggregateArgs>(args: Subset<T, EventStatisticAggregateArgs>): Prisma.PrismaPromise<GetEventStatisticAggregateType<T>>

    /**
     * Group by EventStatistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventStatisticGroupByArgs} args - Group by arguments.
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
      T extends EventStatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventStatisticGroupByArgs['orderBy'] }
        : { orderBy?: EventStatisticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventStatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventStatistic model
   */
  readonly fields: EventStatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventStatistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventStatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EventStatistic model
   */
  interface EventStatisticFieldRefs {
    readonly id: FieldRef<"EventStatistic", 'Int'>
    readonly eventId: FieldRef<"EventStatistic", 'Int'>
    readonly statDate: FieldRef<"EventStatistic", 'DateTime'>
    readonly totalSales: FieldRef<"EventStatistic", 'Float'>
    readonly totalTickets: FieldRef<"EventStatistic", 'Int'>
    readonly createdAt: FieldRef<"EventStatistic", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventStatistic findUnique
   */
  export type EventStatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * Filter, which EventStatistic to fetch.
     */
    where: EventStatisticWhereUniqueInput
  }

  /**
   * EventStatistic findUniqueOrThrow
   */
  export type EventStatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * Filter, which EventStatistic to fetch.
     */
    where: EventStatisticWhereUniqueInput
  }

  /**
   * EventStatistic findFirst
   */
  export type EventStatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * Filter, which EventStatistic to fetch.
     */
    where?: EventStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStatistics to fetch.
     */
    orderBy?: EventStatisticOrderByWithRelationInput | EventStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventStatistics.
     */
    cursor?: EventStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventStatistics.
     */
    distinct?: EventStatisticScalarFieldEnum | EventStatisticScalarFieldEnum[]
  }

  /**
   * EventStatistic findFirstOrThrow
   */
  export type EventStatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * Filter, which EventStatistic to fetch.
     */
    where?: EventStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStatistics to fetch.
     */
    orderBy?: EventStatisticOrderByWithRelationInput | EventStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventStatistics.
     */
    cursor?: EventStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventStatistics.
     */
    distinct?: EventStatisticScalarFieldEnum | EventStatisticScalarFieldEnum[]
  }

  /**
   * EventStatistic findMany
   */
  export type EventStatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * Filter, which EventStatistics to fetch.
     */
    where?: EventStatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventStatistics to fetch.
     */
    orderBy?: EventStatisticOrderByWithRelationInput | EventStatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventStatistics.
     */
    cursor?: EventStatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventStatistics.
     */
    skip?: number
    distinct?: EventStatisticScalarFieldEnum | EventStatisticScalarFieldEnum[]
  }

  /**
   * EventStatistic create
   */
  export type EventStatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a EventStatistic.
     */
    data: XOR<EventStatisticCreateInput, EventStatisticUncheckedCreateInput>
  }

  /**
   * EventStatistic createMany
   */
  export type EventStatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventStatistics.
     */
    data: EventStatisticCreateManyInput | EventStatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventStatistic createManyAndReturn
   */
  export type EventStatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * The data used to create many EventStatistics.
     */
    data: EventStatisticCreateManyInput | EventStatisticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventStatistic update
   */
  export type EventStatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a EventStatistic.
     */
    data: XOR<EventStatisticUpdateInput, EventStatisticUncheckedUpdateInput>
    /**
     * Choose, which EventStatistic to update.
     */
    where: EventStatisticWhereUniqueInput
  }

  /**
   * EventStatistic updateMany
   */
  export type EventStatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventStatistics.
     */
    data: XOR<EventStatisticUpdateManyMutationInput, EventStatisticUncheckedUpdateManyInput>
    /**
     * Filter which EventStatistics to update
     */
    where?: EventStatisticWhereInput
    /**
     * Limit how many EventStatistics to update.
     */
    limit?: number
  }

  /**
   * EventStatistic updateManyAndReturn
   */
  export type EventStatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * The data used to update EventStatistics.
     */
    data: XOR<EventStatisticUpdateManyMutationInput, EventStatisticUncheckedUpdateManyInput>
    /**
     * Filter which EventStatistics to update
     */
    where?: EventStatisticWhereInput
    /**
     * Limit how many EventStatistics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventStatistic upsert
   */
  export type EventStatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the EventStatistic to update in case it exists.
     */
    where: EventStatisticWhereUniqueInput
    /**
     * In case the EventStatistic found by the `where` argument doesn't exist, create a new EventStatistic with this data.
     */
    create: XOR<EventStatisticCreateInput, EventStatisticUncheckedCreateInput>
    /**
     * In case the EventStatistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventStatisticUpdateInput, EventStatisticUncheckedUpdateInput>
  }

  /**
   * EventStatistic delete
   */
  export type EventStatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
    /**
     * Filter which EventStatistic to delete.
     */
    where: EventStatisticWhereUniqueInput
  }

  /**
   * EventStatistic deleteMany
   */
  export type EventStatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventStatistics to delete
     */
    where?: EventStatisticWhereInput
    /**
     * Limit how many EventStatistics to delete.
     */
    limit?: number
  }

  /**
   * EventStatistic without action
   */
  export type EventStatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventStatistic
     */
    select?: EventStatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventStatistic
     */
    omit?: EventStatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventStatisticInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerification
   */

  export type AggregateEmailVerification = {
    _count: EmailVerificationCountAggregateOutputType | null
    _avg: EmailVerificationAvgAggregateOutputType | null
    _sum: EmailVerificationSumAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  export type EmailVerificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailVerificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type EmailVerificationCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailVerificationMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailVerificationMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
  }

  export type EmailVerificationCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type EmailVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerification to aggregate.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerifications
    **/
    _count?: true | EmailVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailVerificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailVerificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type GetEmailVerificationAggregateType<T extends EmailVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerification[P]>
      : GetScalarType<T[P], AggregateEmailVerification[P]>
  }




  export type EmailVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationWhereInput
    orderBy?: EmailVerificationOrderByWithAggregationInput | EmailVerificationOrderByWithAggregationInput[]
    by: EmailVerificationScalarFieldEnum[] | EmailVerificationScalarFieldEnum
    having?: EmailVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationCountAggregateInputType | true
    _avg?: EmailVerificationAvgAggregateInputType
    _sum?: EmailVerificationSumAggregateInputType
    _min?: EmailVerificationMinAggregateInputType
    _max?: EmailVerificationMaxAggregateInputType
  }

  export type EmailVerificationGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date
    createdAt: Date
    _count: EmailVerificationCountAggregateOutputType | null
    _avg: EmailVerificationAvgAggregateOutputType | null
    _sum: EmailVerificationSumAggregateOutputType | null
    _min: EmailVerificationMinAggregateOutputType | null
    _max: EmailVerificationMaxAggregateOutputType | null
  }

  type GetEmailVerificationGroupByPayload<T extends EmailVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["emailVerification"]>

  export type EmailVerificationSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt", ExtArgs["result"]["emailVerification"]>

  export type $EmailVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["emailVerification"]>
    composites: {}
  }

  type EmailVerificationGetPayload<S extends boolean | null | undefined | EmailVerificationDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationPayload, S>

  type EmailVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationCountAggregateInputType | true
    }

  export interface EmailVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerification'], meta: { name: 'EmailVerification' } }
    /**
     * Find zero or one EmailVerification that matches the filter.
     * @param {EmailVerificationFindUniqueArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationFindUniqueArgs>(args: SelectSubset<T, EmailVerificationFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationFindUniqueOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationFindFirstArgs>(args?: SelectSubset<T, EmailVerificationFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindFirstOrThrowArgs} args - Arguments to find a EmailVerification
     * @example
     * // Get one EmailVerification
     * const emailVerification = await prisma.emailVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany()
     * 
     * // Get first 10 EmailVerifications
     * const emailVerifications = await prisma.emailVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationFindManyArgs>(args?: SelectSubset<T, EmailVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerification.
     * @param {EmailVerificationCreateArgs} args - Arguments to create a EmailVerification.
     * @example
     * // Create one EmailVerification
     * const EmailVerification = await prisma.emailVerification.create({
     *   data: {
     *     // ... data to create a EmailVerification
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationCreateArgs>(args: SelectSubset<T, EmailVerificationCreateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerifications.
     * @param {EmailVerificationCreateManyArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationCreateManyArgs>(args?: SelectSubset<T, EmailVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerifications and returns the data saved in the database.
     * @param {EmailVerificationCreateManyAndReturnArgs} args - Arguments to create many EmailVerifications.
     * @example
     * // Create many EmailVerifications
     * const emailVerification = await prisma.emailVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerification.
     * @param {EmailVerificationDeleteArgs} args - Arguments to delete one EmailVerification.
     * @example
     * // Delete one EmailVerification
     * const EmailVerification = await prisma.emailVerification.delete({
     *   where: {
     *     // ... filter to delete one EmailVerification
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationDeleteArgs>(args: SelectSubset<T, EmailVerificationDeleteArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerification.
     * @param {EmailVerificationUpdateArgs} args - Arguments to update one EmailVerification.
     * @example
     * // Update one EmailVerification
     * const emailVerification = await prisma.emailVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationUpdateArgs>(args: SelectSubset<T, EmailVerificationUpdateArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerifications.
     * @param {EmailVerificationDeleteManyArgs} args - Arguments to filter EmailVerifications to delete.
     * @example
     * // Delete a few EmailVerifications
     * const { count } = await prisma.emailVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationUpdateManyArgs>(args: SelectSubset<T, EmailVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerifications and returns the data updated in the database.
     * @param {EmailVerificationUpdateManyAndReturnArgs} args - Arguments to update many EmailVerifications.
     * @example
     * // Update many EmailVerifications
     * const emailVerification = await prisma.emailVerification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerifications and only return the `id`
     * const emailVerificationWithIdOnly = await prisma.emailVerification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailVerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerification.
     * @param {EmailVerificationUpsertArgs} args - Arguments to update or create a EmailVerification.
     * @example
     * // Update or create a EmailVerification
     * const emailVerification = await prisma.emailVerification.upsert({
     *   create: {
     *     // ... data to create a EmailVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerification we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationUpsertArgs>(args: SelectSubset<T, EmailVerificationUpsertArgs<ExtArgs>>): Prisma__EmailVerificationClient<$Result.GetResult<Prisma.$EmailVerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationCountArgs} args - Arguments to filter EmailVerifications to count.
     * @example
     * // Count the number of EmailVerifications
     * const count = await prisma.emailVerification.count({
     *   where: {
     *     // ... the filter for the EmailVerifications we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationCountArgs>(
      args?: Subset<T, EmailVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationAggregateArgs>(args: Subset<T, EmailVerificationAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationAggregateType<T>>

    /**
     * Group by EmailVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerification model
   */
  readonly fields: EmailVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EmailVerification model
   */
  interface EmailVerificationFieldRefs {
    readonly id: FieldRef<"EmailVerification", 'Int'>
    readonly userId: FieldRef<"EmailVerification", 'Int'>
    readonly token: FieldRef<"EmailVerification", 'String'>
    readonly expiresAt: FieldRef<"EmailVerification", 'DateTime'>
    readonly createdAt: FieldRef<"EmailVerification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerification findUnique
   */
  export type EmailVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findUniqueOrThrow
   */
  export type EmailVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification findFirst
   */
  export type EmailVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findFirstOrThrow
   */
  export type EmailVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerification to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerifications.
     */
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification findMany
   */
  export type EmailVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Filter, which EmailVerifications to fetch.
     */
    where?: EmailVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerifications to fetch.
     */
    orderBy?: EmailVerificationOrderByWithRelationInput | EmailVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerifications.
     */
    cursor?: EmailVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerifications.
     */
    skip?: number
    distinct?: EmailVerificationScalarFieldEnum | EmailVerificationScalarFieldEnum[]
  }

  /**
   * EmailVerification create
   */
  export type EmailVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a EmailVerification.
     */
    data: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
  }

  /**
   * EmailVerification createMany
   */
  export type EmailVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerification createManyAndReturn
   */
  export type EmailVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerifications.
     */
    data: EmailVerificationCreateManyInput | EmailVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerification update
   */
  export type EmailVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a EmailVerification.
     */
    data: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
    /**
     * Choose, which EmailVerification to update.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification updateMany
   */
  export type EmailVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
  }

  /**
   * EmailVerification updateManyAndReturn
   */
  export type EmailVerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerifications.
     */
    data: XOR<EmailVerificationUpdateManyMutationInput, EmailVerificationUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerifications to update
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to update.
     */
    limit?: number
  }

  /**
   * EmailVerification upsert
   */
  export type EmailVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the EmailVerification to update in case it exists.
     */
    where: EmailVerificationWhereUniqueInput
    /**
     * In case the EmailVerification found by the `where` argument doesn't exist, create a new EmailVerification with this data.
     */
    create: XOR<EmailVerificationCreateInput, EmailVerificationUncheckedCreateInput>
    /**
     * In case the EmailVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationUpdateInput, EmailVerificationUncheckedUpdateInput>
  }

  /**
   * EmailVerification delete
   */
  export type EmailVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
    /**
     * Filter which EmailVerification to delete.
     */
    where: EmailVerificationWhereUniqueInput
  }

  /**
   * EmailVerification deleteMany
   */
  export type EmailVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerifications to delete
     */
    where?: EmailVerificationWhereInput
    /**
     * Limit how many EmailVerifications to delete.
     */
    limit?: number
  }

  /**
   * EmailVerification without action
   */
  export type EmailVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerification
     */
    select?: EmailVerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerification
     */
    omit?: EmailVerificationOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    referralCode: 'referralCode',
    referredBy: 'referredBy',
    isVerified: 'isVerified',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReferralPointScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    sourceUserId: 'sourceUserId',
    points: 'points',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type ReferralPointScalarFieldEnum = (typeof ReferralPointScalarFieldEnum)[keyof typeof ReferralPointScalarFieldEnum]


  export const UserDiscountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    referralCode: 'referralCode',
    discount: 'discount',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type UserDiscountScalarFieldEnum = (typeof UserDiscountScalarFieldEnum)[keyof typeof UserDiscountScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    organizerId: 'organizerId',
    title: 'title',
    description: 'description',
    location: 'location',
    eventDate: 'eventDate',
    ticketPrice: 'ticketPrice',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TicketPurchaseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    pointsRedeemed: 'pointsRedeemed',
    discountApplied: 'discountApplied',
    purchaseDate: 'purchaseDate'
  };

  export type TicketPurchaseScalarFieldEnum = (typeof TicketPurchaseScalarFieldEnum)[keyof typeof TicketPurchaseScalarFieldEnum]


  export const EventStatisticScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    statDate: 'statDate',
    totalSales: 'totalSales',
    totalTickets: 'totalTickets',
    createdAt: 'createdAt'
  };

  export type EventStatisticScalarFieldEnum = (typeof EventStatisticScalarFieldEnum)[keyof typeof EventStatisticScalarFieldEnum]


  export const EmailVerificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type EmailVerificationScalarFieldEnum = (typeof EmailVerificationScalarFieldEnum)[keyof typeof EmailVerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    referralCode?: StringFilter<"User"> | string
    referredBy?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    referredByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referredUsers?: UserListRelationFilter
    referralPoints?: ReferralPointListRelationFilter
    givenReferrals?: ReferralPointListRelationFilter
    userDiscounts?: UserDiscountListRelationFilter
    events?: EventListRelationFilter
    purchases?: TicketPurchaseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    referredByUser?: UserOrderByWithRelationInput
    referredUsers?: UserOrderByRelationAggregateInput
    referralPoints?: ReferralPointOrderByRelationAggregateInput
    givenReferrals?: ReferralPointOrderByRelationAggregateInput
    userDiscounts?: UserDiscountOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
    purchases?: TicketPurchaseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    referredBy?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    referredByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referredUsers?: UserListRelationFilter
    referralPoints?: ReferralPointListRelationFilter
    givenReferrals?: ReferralPointListRelationFilter
    userDiscounts?: UserDiscountListRelationFilter
    events?: EventListRelationFilter
    purchases?: TicketPurchaseListRelationFilter
  }, "id" | "email" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    referralCode?: StringWithAggregatesFilter<"User"> | string
    referredBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReferralPointWhereInput = {
    AND?: ReferralPointWhereInput | ReferralPointWhereInput[]
    OR?: ReferralPointWhereInput[]
    NOT?: ReferralPointWhereInput | ReferralPointWhereInput[]
    id?: IntFilter<"ReferralPoint"> | number
    userId?: IntFilter<"ReferralPoint"> | number
    sourceUserId?: IntFilter<"ReferralPoint"> | number
    points?: IntFilter<"ReferralPoint"> | number
    expiresAt?: DateTimeFilter<"ReferralPoint"> | Date | string
    createdAt?: DateTimeFilter<"ReferralPoint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralPointOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceUserId?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    sourceUser?: UserOrderByWithRelationInput
  }

  export type ReferralPointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReferralPointWhereInput | ReferralPointWhereInput[]
    OR?: ReferralPointWhereInput[]
    NOT?: ReferralPointWhereInput | ReferralPointWhereInput[]
    userId?: IntFilter<"ReferralPoint"> | number
    sourceUserId?: IntFilter<"ReferralPoint"> | number
    points?: IntFilter<"ReferralPoint"> | number
    expiresAt?: DateTimeFilter<"ReferralPoint"> | Date | string
    createdAt?: DateTimeFilter<"ReferralPoint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sourceUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReferralPointOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceUserId?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralPointCountOrderByAggregateInput
    _avg?: ReferralPointAvgOrderByAggregateInput
    _max?: ReferralPointMaxOrderByAggregateInput
    _min?: ReferralPointMinOrderByAggregateInput
    _sum?: ReferralPointSumOrderByAggregateInput
  }

  export type ReferralPointScalarWhereWithAggregatesInput = {
    AND?: ReferralPointScalarWhereWithAggregatesInput | ReferralPointScalarWhereWithAggregatesInput[]
    OR?: ReferralPointScalarWhereWithAggregatesInput[]
    NOT?: ReferralPointScalarWhereWithAggregatesInput | ReferralPointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ReferralPoint"> | number
    userId?: IntWithAggregatesFilter<"ReferralPoint"> | number
    sourceUserId?: IntWithAggregatesFilter<"ReferralPoint"> | number
    points?: IntWithAggregatesFilter<"ReferralPoint"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"ReferralPoint"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ReferralPoint"> | Date | string
  }

  export type UserDiscountWhereInput = {
    AND?: UserDiscountWhereInput | UserDiscountWhereInput[]
    OR?: UserDiscountWhereInput[]
    NOT?: UserDiscountWhereInput | UserDiscountWhereInput[]
    id?: IntFilter<"UserDiscount"> | number
    userId?: IntFilter<"UserDiscount"> | number
    referralCode?: StringFilter<"UserDiscount"> | string
    discount?: FloatFilter<"UserDiscount"> | number
    expiresAt?: DateTimeFilter<"UserDiscount"> | Date | string
    createdAt?: DateTimeFilter<"UserDiscount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserDiscountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    referralCode?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserDiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserDiscountWhereInput | UserDiscountWhereInput[]
    OR?: UserDiscountWhereInput[]
    NOT?: UserDiscountWhereInput | UserDiscountWhereInput[]
    userId?: IntFilter<"UserDiscount"> | number
    referralCode?: StringFilter<"UserDiscount"> | string
    discount?: FloatFilter<"UserDiscount"> | number
    expiresAt?: DateTimeFilter<"UserDiscount"> | Date | string
    createdAt?: DateTimeFilter<"UserDiscount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserDiscountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    referralCode?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: UserDiscountCountOrderByAggregateInput
    _avg?: UserDiscountAvgOrderByAggregateInput
    _max?: UserDiscountMaxOrderByAggregateInput
    _min?: UserDiscountMinOrderByAggregateInput
    _sum?: UserDiscountSumOrderByAggregateInput
  }

  export type UserDiscountScalarWhereWithAggregatesInput = {
    AND?: UserDiscountScalarWhereWithAggregatesInput | UserDiscountScalarWhereWithAggregatesInput[]
    OR?: UserDiscountScalarWhereWithAggregatesInput[]
    NOT?: UserDiscountScalarWhereWithAggregatesInput | UserDiscountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserDiscount"> | number
    userId?: IntWithAggregatesFilter<"UserDiscount"> | number
    referralCode?: StringWithAggregatesFilter<"UserDiscount"> | string
    discount?: FloatWithAggregatesFilter<"UserDiscount"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"UserDiscount"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"UserDiscount"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    organizerId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    ticketPrice?: FloatFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchases?: TicketPurchaseListRelationFilter
    statistics?: EventStatisticListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    ticketPrice?: SortOrder
    createdAt?: SortOrder
    organizer?: UserOrderByWithRelationInput
    purchases?: TicketPurchaseOrderByRelationAggregateInput
    statistics?: EventStatisticOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    organizerId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    ticketPrice?: FloatFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchases?: TicketPurchaseListRelationFilter
    statistics?: EventStatisticListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    ticketPrice?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    organizerId?: IntWithAggregatesFilter<"Event"> | number
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    eventDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    ticketPrice?: FloatWithAggregatesFilter<"Event"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type TicketPurchaseWhereInput = {
    AND?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    OR?: TicketPurchaseWhereInput[]
    NOT?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    id?: IntFilter<"TicketPurchase"> | number
    userId?: IntFilter<"TicketPurchase"> | number
    eventId?: IntFilter<"TicketPurchase"> | number
    quantity?: IntFilter<"TicketPurchase"> | number
    totalPrice?: FloatFilter<"TicketPurchase"> | number
    pointsRedeemed?: IntNullableFilter<"TicketPurchase"> | number | null
    discountApplied?: FloatNullableFilter<"TicketPurchase"> | number | null
    purchaseDate?: DateTimeFilter<"TicketPurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type TicketPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    pointsRedeemed?: SortOrderInput | SortOrder
    discountApplied?: SortOrderInput | SortOrder
    purchaseDate?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
  }

  export type TicketPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    OR?: TicketPurchaseWhereInput[]
    NOT?: TicketPurchaseWhereInput | TicketPurchaseWhereInput[]
    userId?: IntFilter<"TicketPurchase"> | number
    eventId?: IntFilter<"TicketPurchase"> | number
    quantity?: IntFilter<"TicketPurchase"> | number
    totalPrice?: FloatFilter<"TicketPurchase"> | number
    pointsRedeemed?: IntNullableFilter<"TicketPurchase"> | number | null
    discountApplied?: FloatNullableFilter<"TicketPurchase"> | number | null
    purchaseDate?: DateTimeFilter<"TicketPurchase"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type TicketPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    pointsRedeemed?: SortOrderInput | SortOrder
    discountApplied?: SortOrderInput | SortOrder
    purchaseDate?: SortOrder
    _count?: TicketPurchaseCountOrderByAggregateInput
    _avg?: TicketPurchaseAvgOrderByAggregateInput
    _max?: TicketPurchaseMaxOrderByAggregateInput
    _min?: TicketPurchaseMinOrderByAggregateInput
    _sum?: TicketPurchaseSumOrderByAggregateInput
  }

  export type TicketPurchaseScalarWhereWithAggregatesInput = {
    AND?: TicketPurchaseScalarWhereWithAggregatesInput | TicketPurchaseScalarWhereWithAggregatesInput[]
    OR?: TicketPurchaseScalarWhereWithAggregatesInput[]
    NOT?: TicketPurchaseScalarWhereWithAggregatesInput | TicketPurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketPurchase"> | number
    userId?: IntWithAggregatesFilter<"TicketPurchase"> | number
    eventId?: IntWithAggregatesFilter<"TicketPurchase"> | number
    quantity?: IntWithAggregatesFilter<"TicketPurchase"> | number
    totalPrice?: FloatWithAggregatesFilter<"TicketPurchase"> | number
    pointsRedeemed?: IntNullableWithAggregatesFilter<"TicketPurchase"> | number | null
    discountApplied?: FloatNullableWithAggregatesFilter<"TicketPurchase"> | number | null
    purchaseDate?: DateTimeWithAggregatesFilter<"TicketPurchase"> | Date | string
  }

  export type EventStatisticWhereInput = {
    AND?: EventStatisticWhereInput | EventStatisticWhereInput[]
    OR?: EventStatisticWhereInput[]
    NOT?: EventStatisticWhereInput | EventStatisticWhereInput[]
    id?: IntFilter<"EventStatistic"> | number
    eventId?: IntFilter<"EventStatistic"> | number
    statDate?: DateTimeFilter<"EventStatistic"> | Date | string
    totalSales?: FloatFilter<"EventStatistic"> | number
    totalTickets?: IntFilter<"EventStatistic"> | number
    createdAt?: DateTimeFilter<"EventStatistic"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventStatisticOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    statDate?: SortOrder
    totalSales?: SortOrder
    totalTickets?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type EventStatisticWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventStatisticWhereInput | EventStatisticWhereInput[]
    OR?: EventStatisticWhereInput[]
    NOT?: EventStatisticWhereInput | EventStatisticWhereInput[]
    eventId?: IntFilter<"EventStatistic"> | number
    statDate?: DateTimeFilter<"EventStatistic"> | Date | string
    totalSales?: FloatFilter<"EventStatistic"> | number
    totalTickets?: IntFilter<"EventStatistic"> | number
    createdAt?: DateTimeFilter<"EventStatistic"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type EventStatisticOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    statDate?: SortOrder
    totalSales?: SortOrder
    totalTickets?: SortOrder
    createdAt?: SortOrder
    _count?: EventStatisticCountOrderByAggregateInput
    _avg?: EventStatisticAvgOrderByAggregateInput
    _max?: EventStatisticMaxOrderByAggregateInput
    _min?: EventStatisticMinOrderByAggregateInput
    _sum?: EventStatisticSumOrderByAggregateInput
  }

  export type EventStatisticScalarWhereWithAggregatesInput = {
    AND?: EventStatisticScalarWhereWithAggregatesInput | EventStatisticScalarWhereWithAggregatesInput[]
    OR?: EventStatisticScalarWhereWithAggregatesInput[]
    NOT?: EventStatisticScalarWhereWithAggregatesInput | EventStatisticScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EventStatistic"> | number
    eventId?: IntWithAggregatesFilter<"EventStatistic"> | number
    statDate?: DateTimeWithAggregatesFilter<"EventStatistic"> | Date | string
    totalSales?: FloatWithAggregatesFilter<"EventStatistic"> | number
    totalTickets?: IntWithAggregatesFilter<"EventStatistic"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EventStatistic"> | Date | string
  }

  export type EmailVerificationWhereInput = {
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    id?: IntFilter<"EmailVerification"> | number
    userId?: IntFilter<"EmailVerification"> | number
    token?: StringFilter<"EmailVerification"> | string
    expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
  }

  export type EmailVerificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    OR?: EmailVerificationWhereInput[]
    NOT?: EmailVerificationWhereInput | EmailVerificationWhereInput[]
    userId?: IntFilter<"EmailVerification"> | number
    token?: StringFilter<"EmailVerification"> | string
    expiresAt?: DateTimeFilter<"EmailVerification"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerification"> | Date | string
  }, "id">

  export type EmailVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationCountOrderByAggregateInput
    _avg?: EmailVerificationAvgOrderByAggregateInput
    _max?: EmailVerificationMaxOrderByAggregateInput
    _min?: EmailVerificationMinOrderByAggregateInput
    _sum?: EmailVerificationSumOrderByAggregateInput
  }

  export type EmailVerificationScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationScalarWhereWithAggregatesInput | EmailVerificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailVerification"> | number
    userId?: IntWithAggregatesFilter<"EmailVerification"> | number
    token?: StringWithAggregatesFilter<"EmailVerification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerification"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferredUsersInput
    referredUsers?: UserCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointUncheckedCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferredUsersNestedInput
    referredUsers?: UserUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUncheckedUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralPointCreateInput = {
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReferralPointsInput
    sourceUser: UserCreateNestedOneWithoutGivenReferralsInput
  }

  export type ReferralPointUncheckedCreateInput = {
    id?: number
    userId: number
    sourceUserId: number
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReferralPointUpdateInput = {
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReferralPointsNestedInput
    sourceUser?: UserUpdateOneRequiredWithoutGivenReferralsNestedInput
  }

  export type ReferralPointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sourceUserId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralPointCreateManyInput = {
    id?: number
    userId: number
    sourceUserId: number
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReferralPointUpdateManyMutationInput = {
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralPointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    sourceUserId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscountCreateInput = {
    referralCode: string
    discount: number
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserDiscountsInput
  }

  export type UserDiscountUncheckedCreateInput = {
    id?: number
    userId: number
    referralCode: string
    discount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserDiscountUpdateInput = {
    referralCode?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserDiscountsNestedInput
  }

  export type UserDiscountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    referralCode?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscountCreateManyInput = {
    id?: number
    userId: number
    referralCode: string
    discount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserDiscountUpdateManyMutationInput = {
    referralCode?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    referralCode?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutEventsInput
    purchases?: TicketPurchaseCreateNestedManyWithoutEventInput
    statistics?: EventStatisticCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    organizerId: number
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutEventInput
    statistics?: EventStatisticUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutEventNestedInput
    statistics?: EventStatisticUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutEventNestedInput
    statistics?: EventStatisticUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    organizerId: number
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseCreateInput = {
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
    event: EventCreateNestedOneWithoutPurchasesInput
  }

  export type TicketPurchaseUncheckedCreateInput = {
    id?: number
    userId: number
    eventId: number
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
  }

  export type TicketPurchaseUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
    event?: EventUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TicketPurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseCreateManyInput = {
    id?: number
    userId: number
    eventId: number
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
  }

  export type TicketPurchaseUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatisticCreateInput = {
    statDate: Date | string
    totalSales: number
    totalTickets: number
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutStatisticsInput
  }

  export type EventStatisticUncheckedCreateInput = {
    id?: number
    eventId: number
    statDate: Date | string
    totalSales: number
    totalTickets: number
    createdAt?: Date | string
  }

  export type EventStatisticUpdateInput = {
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: FloatFieldUpdateOperationsInput | number
    totalTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type EventStatisticUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: FloatFieldUpdateOperationsInput | number
    totalTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatisticCreateManyInput = {
    id?: number
    eventId: number
    statDate: Date | string
    totalSales: number
    totalTickets: number
    createdAt?: Date | string
  }

  export type EventStatisticUpdateManyMutationInput = {
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: FloatFieldUpdateOperationsInput | number
    totalTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatisticUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: FloatFieldUpdateOperationsInput | number
    totalTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateInput = {
    userId: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationUpdateManyMutationInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ReferralPointListRelationFilter = {
    every?: ReferralPointWhereInput
    some?: ReferralPointWhereInput
    none?: ReferralPointWhereInput
  }

  export type UserDiscountListRelationFilter = {
    every?: UserDiscountWhereInput
    some?: UserDiscountWhereInput
    none?: UserDiscountWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TicketPurchaseListRelationFilter = {
    every?: TicketPurchaseWhereInput
    some?: TicketPurchaseWhereInput
    none?: TicketPurchaseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralPointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDiscountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketPurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ReferralPointCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceUserId?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralPointAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceUserId?: SortOrder
    points?: SortOrder
  }

  export type ReferralPointMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceUserId?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralPointMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceUserId?: SortOrder
    points?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralPointSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    sourceUserId?: SortOrder
    points?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserDiscountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referralCode?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDiscountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discount?: SortOrder
  }

  export type UserDiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referralCode?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDiscountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    referralCode?: SortOrder
    discount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserDiscountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    discount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EventStatisticListRelationFilter = {
    every?: EventStatisticWhereInput
    some?: EventStatisticWhereInput
    none?: EventStatisticWhereInput
  }

  export type EventStatisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    ticketPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    ticketPrice?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    ticketPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    eventDate?: SortOrder
    ticketPrice?: SortOrder
    createdAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    ticketPrice?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TicketPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    pointsRedeemed?: SortOrder
    discountApplied?: SortOrder
    purchaseDate?: SortOrder
  }

  export type TicketPurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    pointsRedeemed?: SortOrder
    discountApplied?: SortOrder
  }

  export type TicketPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    pointsRedeemed?: SortOrder
    discountApplied?: SortOrder
    purchaseDate?: SortOrder
  }

  export type TicketPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    pointsRedeemed?: SortOrder
    discountApplied?: SortOrder
    purchaseDate?: SortOrder
  }

  export type TicketPurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    pointsRedeemed?: SortOrder
    discountApplied?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EventStatisticCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    statDate?: SortOrder
    totalSales?: SortOrder
    totalTickets?: SortOrder
    createdAt?: SortOrder
  }

  export type EventStatisticAvgOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    totalSales?: SortOrder
    totalTickets?: SortOrder
  }

  export type EventStatisticMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    statDate?: SortOrder
    totalSales?: SortOrder
    totalTickets?: SortOrder
    createdAt?: SortOrder
  }

  export type EventStatisticMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    statDate?: SortOrder
    totalSales?: SortOrder
    totalTickets?: SortOrder
    createdAt?: SortOrder
  }

  export type EventStatisticSumOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    totalSales?: SortOrder
    totalTickets?: SortOrder
  }

  export type EmailVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedOneWithoutReferredUsersInput = {
    create?: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutReferredByUserInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReferralPointCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferralPointCreateWithoutUserInput, ReferralPointUncheckedCreateWithoutUserInput> | ReferralPointCreateWithoutUserInput[] | ReferralPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutUserInput | ReferralPointCreateOrConnectWithoutUserInput[]
    createMany?: ReferralPointCreateManyUserInputEnvelope
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
  }

  export type ReferralPointCreateNestedManyWithoutSourceUserInput = {
    create?: XOR<ReferralPointCreateWithoutSourceUserInput, ReferralPointUncheckedCreateWithoutSourceUserInput> | ReferralPointCreateWithoutSourceUserInput[] | ReferralPointUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutSourceUserInput | ReferralPointCreateOrConnectWithoutSourceUserInput[]
    createMany?: ReferralPointCreateManySourceUserInputEnvelope
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
  }

  export type UserDiscountCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDiscountCreateWithoutUserInput, UserDiscountUncheckedCreateWithoutUserInput> | UserDiscountCreateWithoutUserInput[] | UserDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiscountCreateOrConnectWithoutUserInput | UserDiscountCreateOrConnectWithoutUserInput[]
    createMany?: UserDiscountCreateManyUserInputEnvelope
    connect?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketPurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutReferredByUserInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ReferralPointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferralPointCreateWithoutUserInput, ReferralPointUncheckedCreateWithoutUserInput> | ReferralPointCreateWithoutUserInput[] | ReferralPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutUserInput | ReferralPointCreateOrConnectWithoutUserInput[]
    createMany?: ReferralPointCreateManyUserInputEnvelope
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
  }

  export type ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput = {
    create?: XOR<ReferralPointCreateWithoutSourceUserInput, ReferralPointUncheckedCreateWithoutSourceUserInput> | ReferralPointCreateWithoutSourceUserInput[] | ReferralPointUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutSourceUserInput | ReferralPointCreateOrConnectWithoutSourceUserInput[]
    createMany?: ReferralPointCreateManySourceUserInputEnvelope
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
  }

  export type UserDiscountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDiscountCreateWithoutUserInput, UserDiscountUncheckedCreateWithoutUserInput> | UserDiscountCreateWithoutUserInput[] | UserDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiscountCreateOrConnectWithoutUserInput | UserDiscountCreateOrConnectWithoutUserInput[]
    createMany?: UserDiscountCreateManyUserInputEnvelope
    connect?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketPurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutReferredUsersNestedInput = {
    create?: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredUsersInput
    upsert?: UserUpsertWithoutReferredUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferredUsersInput, UserUpdateWithoutReferredUsersInput>, UserUncheckedUpdateWithoutReferredUsersInput>
  }

  export type UserUpdateManyWithoutReferredByUserNestedInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByUserInput | UserUpsertWithWhereUniqueWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByUserInput | UserUpdateWithWhereUniqueWithoutReferredByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByUserInput | UserUpdateManyWithWhereWithoutReferredByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReferralPointUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferralPointCreateWithoutUserInput, ReferralPointUncheckedCreateWithoutUserInput> | ReferralPointCreateWithoutUserInput[] | ReferralPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutUserInput | ReferralPointCreateOrConnectWithoutUserInput[]
    upsert?: ReferralPointUpsertWithWhereUniqueWithoutUserInput | ReferralPointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferralPointCreateManyUserInputEnvelope
    set?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    disconnect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    delete?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    update?: ReferralPointUpdateWithWhereUniqueWithoutUserInput | ReferralPointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferralPointUpdateManyWithWhereWithoutUserInput | ReferralPointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferralPointScalarWhereInput | ReferralPointScalarWhereInput[]
  }

  export type ReferralPointUpdateManyWithoutSourceUserNestedInput = {
    create?: XOR<ReferralPointCreateWithoutSourceUserInput, ReferralPointUncheckedCreateWithoutSourceUserInput> | ReferralPointCreateWithoutSourceUserInput[] | ReferralPointUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutSourceUserInput | ReferralPointCreateOrConnectWithoutSourceUserInput[]
    upsert?: ReferralPointUpsertWithWhereUniqueWithoutSourceUserInput | ReferralPointUpsertWithWhereUniqueWithoutSourceUserInput[]
    createMany?: ReferralPointCreateManySourceUserInputEnvelope
    set?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    disconnect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    delete?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    update?: ReferralPointUpdateWithWhereUniqueWithoutSourceUserInput | ReferralPointUpdateWithWhereUniqueWithoutSourceUserInput[]
    updateMany?: ReferralPointUpdateManyWithWhereWithoutSourceUserInput | ReferralPointUpdateManyWithWhereWithoutSourceUserInput[]
    deleteMany?: ReferralPointScalarWhereInput | ReferralPointScalarWhereInput[]
  }

  export type UserDiscountUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDiscountCreateWithoutUserInput, UserDiscountUncheckedCreateWithoutUserInput> | UserDiscountCreateWithoutUserInput[] | UserDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiscountCreateOrConnectWithoutUserInput | UserDiscountCreateOrConnectWithoutUserInput[]
    upsert?: UserDiscountUpsertWithWhereUniqueWithoutUserInput | UserDiscountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDiscountCreateManyUserInputEnvelope
    set?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    disconnect?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    delete?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    connect?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    update?: UserDiscountUpdateWithWhereUniqueWithoutUserInput | UserDiscountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDiscountUpdateManyWithWhereWithoutUserInput | UserDiscountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDiscountScalarWhereInput | UserDiscountScalarWhereInput[]
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketPurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutUserInput | TicketPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutUserInput | TicketPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutUserInput | TicketPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutReferredByUserNestedInput = {
    create?: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput> | UserCreateWithoutReferredByUserInput[] | UserUncheckedCreateWithoutReferredByUserInput[]
    connectOrCreate?: UserCreateOrConnectWithoutReferredByUserInput | UserCreateOrConnectWithoutReferredByUserInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutReferredByUserInput | UserUpsertWithWhereUniqueWithoutReferredByUserInput[]
    createMany?: UserCreateManyReferredByUserInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutReferredByUserInput | UserUpdateWithWhereUniqueWithoutReferredByUserInput[]
    updateMany?: UserUpdateManyWithWhereWithoutReferredByUserInput | UserUpdateManyWithWhereWithoutReferredByUserInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ReferralPointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferralPointCreateWithoutUserInput, ReferralPointUncheckedCreateWithoutUserInput> | ReferralPointCreateWithoutUserInput[] | ReferralPointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutUserInput | ReferralPointCreateOrConnectWithoutUserInput[]
    upsert?: ReferralPointUpsertWithWhereUniqueWithoutUserInput | ReferralPointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferralPointCreateManyUserInputEnvelope
    set?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    disconnect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    delete?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    update?: ReferralPointUpdateWithWhereUniqueWithoutUserInput | ReferralPointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferralPointUpdateManyWithWhereWithoutUserInput | ReferralPointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferralPointScalarWhereInput | ReferralPointScalarWhereInput[]
  }

  export type ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput = {
    create?: XOR<ReferralPointCreateWithoutSourceUserInput, ReferralPointUncheckedCreateWithoutSourceUserInput> | ReferralPointCreateWithoutSourceUserInput[] | ReferralPointUncheckedCreateWithoutSourceUserInput[]
    connectOrCreate?: ReferralPointCreateOrConnectWithoutSourceUserInput | ReferralPointCreateOrConnectWithoutSourceUserInput[]
    upsert?: ReferralPointUpsertWithWhereUniqueWithoutSourceUserInput | ReferralPointUpsertWithWhereUniqueWithoutSourceUserInput[]
    createMany?: ReferralPointCreateManySourceUserInputEnvelope
    set?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    disconnect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    delete?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    connect?: ReferralPointWhereUniqueInput | ReferralPointWhereUniqueInput[]
    update?: ReferralPointUpdateWithWhereUniqueWithoutSourceUserInput | ReferralPointUpdateWithWhereUniqueWithoutSourceUserInput[]
    updateMany?: ReferralPointUpdateManyWithWhereWithoutSourceUserInput | ReferralPointUpdateManyWithWhereWithoutSourceUserInput[]
    deleteMany?: ReferralPointScalarWhereInput | ReferralPointScalarWhereInput[]
  }

  export type UserDiscountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDiscountCreateWithoutUserInput, UserDiscountUncheckedCreateWithoutUserInput> | UserDiscountCreateWithoutUserInput[] | UserDiscountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDiscountCreateOrConnectWithoutUserInput | UserDiscountCreateOrConnectWithoutUserInput[]
    upsert?: UserDiscountUpsertWithWhereUniqueWithoutUserInput | UserDiscountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDiscountCreateManyUserInputEnvelope
    set?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    disconnect?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    delete?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    connect?: UserDiscountWhereUniqueInput | UserDiscountWhereUniqueInput[]
    update?: UserDiscountUpdateWithWhereUniqueWithoutUserInput | UserDiscountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDiscountUpdateManyWithWhereWithoutUserInput | UserDiscountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDiscountScalarWhereInput | UserDiscountScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput> | TicketPurchaseCreateWithoutUserInput[] | TicketPurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutUserInput | TicketPurchaseCreateOrConnectWithoutUserInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutUserInput | TicketPurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketPurchaseCreateManyUserInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutUserInput | TicketPurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutUserInput | TicketPurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReferralPointsInput = {
    create?: XOR<UserCreateWithoutReferralPointsInput, UserUncheckedCreateWithoutReferralPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralPointsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGivenReferralsInput = {
    create?: XOR<UserCreateWithoutGivenReferralsInput, UserUncheckedCreateWithoutGivenReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGivenReferralsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralPointsNestedInput = {
    create?: XOR<UserCreateWithoutReferralPointsInput, UserUncheckedCreateWithoutReferralPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralPointsInput
    upsert?: UserUpsertWithoutReferralPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralPointsInput, UserUpdateWithoutReferralPointsInput>, UserUncheckedUpdateWithoutReferralPointsInput>
  }

  export type UserUpdateOneRequiredWithoutGivenReferralsNestedInput = {
    create?: XOR<UserCreateWithoutGivenReferralsInput, UserUncheckedCreateWithoutGivenReferralsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGivenReferralsInput
    upsert?: UserUpsertWithoutGivenReferralsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGivenReferralsInput, UserUpdateWithoutGivenReferralsInput>, UserUncheckedUpdateWithoutGivenReferralsInput>
  }

  export type UserCreateNestedOneWithoutUserDiscountsInput = {
    create?: XOR<UserCreateWithoutUserDiscountsInput, UserUncheckedCreateWithoutUserDiscountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDiscountsInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserDiscountsNestedInput = {
    create?: XOR<UserCreateWithoutUserDiscountsInput, UserUncheckedCreateWithoutUserDiscountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDiscountsInput
    upsert?: UserUpsertWithoutUserDiscountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDiscountsInput, UserUpdateWithoutUserDiscountsInput>, UserUncheckedUpdateWithoutUserDiscountsInput>
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketPurchaseCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketPurchaseCreateWithoutEventInput, TicketPurchaseUncheckedCreateWithoutEventInput> | TicketPurchaseCreateWithoutEventInput[] | TicketPurchaseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutEventInput | TicketPurchaseCreateOrConnectWithoutEventInput[]
    createMany?: TicketPurchaseCreateManyEventInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type EventStatisticCreateNestedManyWithoutEventInput = {
    create?: XOR<EventStatisticCreateWithoutEventInput, EventStatisticUncheckedCreateWithoutEventInput> | EventStatisticCreateWithoutEventInput[] | EventStatisticUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventStatisticCreateOrConnectWithoutEventInput | EventStatisticCreateOrConnectWithoutEventInput[]
    createMany?: EventStatisticCreateManyEventInputEnvelope
    connect?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
  }

  export type TicketPurchaseUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketPurchaseCreateWithoutEventInput, TicketPurchaseUncheckedCreateWithoutEventInput> | TicketPurchaseCreateWithoutEventInput[] | TicketPurchaseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutEventInput | TicketPurchaseCreateOrConnectWithoutEventInput[]
    createMany?: TicketPurchaseCreateManyEventInputEnvelope
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
  }

  export type EventStatisticUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventStatisticCreateWithoutEventInput, EventStatisticUncheckedCreateWithoutEventInput> | EventStatisticCreateWithoutEventInput[] | EventStatisticUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventStatisticCreateOrConnectWithoutEventInput | EventStatisticCreateOrConnectWithoutEventInput[]
    createMany?: EventStatisticCreateManyEventInputEnvelope
    connect?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type TicketPurchaseUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutEventInput, TicketPurchaseUncheckedCreateWithoutEventInput> | TicketPurchaseCreateWithoutEventInput[] | TicketPurchaseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutEventInput | TicketPurchaseCreateOrConnectWithoutEventInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutEventInput | TicketPurchaseUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketPurchaseCreateManyEventInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutEventInput | TicketPurchaseUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutEventInput | TicketPurchaseUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type EventStatisticUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventStatisticCreateWithoutEventInput, EventStatisticUncheckedCreateWithoutEventInput> | EventStatisticCreateWithoutEventInput[] | EventStatisticUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventStatisticCreateOrConnectWithoutEventInput | EventStatisticCreateOrConnectWithoutEventInput[]
    upsert?: EventStatisticUpsertWithWhereUniqueWithoutEventInput | EventStatisticUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventStatisticCreateManyEventInputEnvelope
    set?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    disconnect?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    delete?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    connect?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    update?: EventStatisticUpdateWithWhereUniqueWithoutEventInput | EventStatisticUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventStatisticUpdateManyWithWhereWithoutEventInput | EventStatisticUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventStatisticScalarWhereInput | EventStatisticScalarWhereInput[]
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketPurchaseCreateWithoutEventInput, TicketPurchaseUncheckedCreateWithoutEventInput> | TicketPurchaseCreateWithoutEventInput[] | TicketPurchaseUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketPurchaseCreateOrConnectWithoutEventInput | TicketPurchaseCreateOrConnectWithoutEventInput[]
    upsert?: TicketPurchaseUpsertWithWhereUniqueWithoutEventInput | TicketPurchaseUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketPurchaseCreateManyEventInputEnvelope
    set?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    disconnect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    delete?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    connect?: TicketPurchaseWhereUniqueInput | TicketPurchaseWhereUniqueInput[]
    update?: TicketPurchaseUpdateWithWhereUniqueWithoutEventInput | TicketPurchaseUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketPurchaseUpdateManyWithWhereWithoutEventInput | TicketPurchaseUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
  }

  export type EventStatisticUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventStatisticCreateWithoutEventInput, EventStatisticUncheckedCreateWithoutEventInput> | EventStatisticCreateWithoutEventInput[] | EventStatisticUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventStatisticCreateOrConnectWithoutEventInput | EventStatisticCreateOrConnectWithoutEventInput[]
    upsert?: EventStatisticUpsertWithWhereUniqueWithoutEventInput | EventStatisticUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventStatisticCreateManyEventInputEnvelope
    set?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    disconnect?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    delete?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    connect?: EventStatisticWhereUniqueInput | EventStatisticWhereUniqueInput[]
    update?: EventStatisticUpdateWithWhereUniqueWithoutEventInput | EventStatisticUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventStatisticUpdateManyWithWhereWithoutEventInput | EventStatisticUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventStatisticScalarWhereInput | EventStatisticScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<EventCreateWithoutPurchasesInput, EventUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EventCreateOrConnectWithoutPurchasesInput
    connect?: EventWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type EventUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<EventCreateWithoutPurchasesInput, EventUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: EventCreateOrConnectWithoutPurchasesInput
    upsert?: EventUpsertWithoutPurchasesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPurchasesInput, EventUpdateWithoutPurchasesInput>, EventUncheckedUpdateWithoutPurchasesInput>
  }

  export type EventCreateNestedOneWithoutStatisticsInput = {
    create?: XOR<EventCreateWithoutStatisticsInput, EventUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: EventCreateOrConnectWithoutStatisticsInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutStatisticsNestedInput = {
    create?: XOR<EventCreateWithoutStatisticsInput, EventUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: EventCreateOrConnectWithoutStatisticsInput
    upsert?: EventUpsertWithoutStatisticsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutStatisticsInput, EventUpdateWithoutStatisticsInput>, EventUncheckedUpdateWithoutStatisticsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutReferredUsersInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferredUsersInput
    referralPoints?: ReferralPointCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferredUsersInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    referralPoints?: ReferralPointUncheckedCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferredUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
  }

  export type UserCreateWithoutReferredByUserInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferredByUserInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointUncheckedCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferredByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput>
  }

  export type UserCreateManyReferredByUserInputEnvelope = {
    data: UserCreateManyReferredByUserInput | UserCreateManyReferredByUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralPointCreateWithoutUserInput = {
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
    sourceUser: UserCreateNestedOneWithoutGivenReferralsInput
  }

  export type ReferralPointUncheckedCreateWithoutUserInput = {
    id?: number
    sourceUserId: number
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReferralPointCreateOrConnectWithoutUserInput = {
    where: ReferralPointWhereUniqueInput
    create: XOR<ReferralPointCreateWithoutUserInput, ReferralPointUncheckedCreateWithoutUserInput>
  }

  export type ReferralPointCreateManyUserInputEnvelope = {
    data: ReferralPointCreateManyUserInput | ReferralPointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralPointCreateWithoutSourceUserInput = {
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReferralPointsInput
  }

  export type ReferralPointUncheckedCreateWithoutSourceUserInput = {
    id?: number
    userId: number
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReferralPointCreateOrConnectWithoutSourceUserInput = {
    where: ReferralPointWhereUniqueInput
    create: XOR<ReferralPointCreateWithoutSourceUserInput, ReferralPointUncheckedCreateWithoutSourceUserInput>
  }

  export type ReferralPointCreateManySourceUserInputEnvelope = {
    data: ReferralPointCreateManySourceUserInput | ReferralPointCreateManySourceUserInput[]
    skipDuplicates?: boolean
  }

  export type UserDiscountCreateWithoutUserInput = {
    referralCode: string
    discount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserDiscountUncheckedCreateWithoutUserInput = {
    id?: number
    referralCode: string
    discount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserDiscountCreateOrConnectWithoutUserInput = {
    where: UserDiscountWhereUniqueInput
    create: XOR<UserDiscountCreateWithoutUserInput, UserDiscountUncheckedCreateWithoutUserInput>
  }

  export type UserDiscountCreateManyUserInputEnvelope = {
    data: UserDiscountCreateManyUserInput | UserDiscountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutOrganizerInput = {
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    purchases?: TicketPurchaseCreateNestedManyWithoutEventInput
    statistics?: EventStatisticCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: number
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutEventInput
    statistics?: EventStatisticUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type TicketPurchaseCreateWithoutUserInput = {
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
    event: EventCreateNestedOneWithoutPurchasesInput
  }

  export type TicketPurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    eventId: number
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
  }

  export type TicketPurchaseCreateOrConnectWithoutUserInput = {
    where: TicketPurchaseWhereUniqueInput
    create: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput>
  }

  export type TicketPurchaseCreateManyUserInputEnvelope = {
    data: TicketPurchaseCreateManyUserInput | TicketPurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutReferredUsersInput = {
    update: XOR<UserUpdateWithoutReferredUsersInput, UserUncheckedUpdateWithoutReferredUsersInput>
    create: XOR<UserCreateWithoutReferredUsersInput, UserUncheckedCreateWithoutReferredUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferredUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferredUsersInput, UserUncheckedUpdateWithoutReferredUsersInput>
  }

  export type UserUpdateWithoutReferredUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferredUsersNestedInput
    referralPoints?: ReferralPointUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralPoints?: ReferralPointUncheckedUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutReferredByUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutReferredByUserInput, UserUncheckedUpdateWithoutReferredByUserInput>
    create: XOR<UserCreateWithoutReferredByUserInput, UserUncheckedCreateWithoutReferredByUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutReferredByUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutReferredByUserInput, UserUncheckedUpdateWithoutReferredByUserInput>
  }

  export type UserUpdateManyWithWhereWithoutReferredByUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutReferredByUserInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    avatar?: StringNullableFilter<"User"> | string | null
    referralCode?: StringFilter<"User"> | string
    referredBy?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ReferralPointUpsertWithWhereUniqueWithoutUserInput = {
    where: ReferralPointWhereUniqueInput
    update: XOR<ReferralPointUpdateWithoutUserInput, ReferralPointUncheckedUpdateWithoutUserInput>
    create: XOR<ReferralPointCreateWithoutUserInput, ReferralPointUncheckedCreateWithoutUserInput>
  }

  export type ReferralPointUpdateWithWhereUniqueWithoutUserInput = {
    where: ReferralPointWhereUniqueInput
    data: XOR<ReferralPointUpdateWithoutUserInput, ReferralPointUncheckedUpdateWithoutUserInput>
  }

  export type ReferralPointUpdateManyWithWhereWithoutUserInput = {
    where: ReferralPointScalarWhereInput
    data: XOR<ReferralPointUpdateManyMutationInput, ReferralPointUncheckedUpdateManyWithoutUserInput>
  }

  export type ReferralPointScalarWhereInput = {
    AND?: ReferralPointScalarWhereInput | ReferralPointScalarWhereInput[]
    OR?: ReferralPointScalarWhereInput[]
    NOT?: ReferralPointScalarWhereInput | ReferralPointScalarWhereInput[]
    id?: IntFilter<"ReferralPoint"> | number
    userId?: IntFilter<"ReferralPoint"> | number
    sourceUserId?: IntFilter<"ReferralPoint"> | number
    points?: IntFilter<"ReferralPoint"> | number
    expiresAt?: DateTimeFilter<"ReferralPoint"> | Date | string
    createdAt?: DateTimeFilter<"ReferralPoint"> | Date | string
  }

  export type ReferralPointUpsertWithWhereUniqueWithoutSourceUserInput = {
    where: ReferralPointWhereUniqueInput
    update: XOR<ReferralPointUpdateWithoutSourceUserInput, ReferralPointUncheckedUpdateWithoutSourceUserInput>
    create: XOR<ReferralPointCreateWithoutSourceUserInput, ReferralPointUncheckedCreateWithoutSourceUserInput>
  }

  export type ReferralPointUpdateWithWhereUniqueWithoutSourceUserInput = {
    where: ReferralPointWhereUniqueInput
    data: XOR<ReferralPointUpdateWithoutSourceUserInput, ReferralPointUncheckedUpdateWithoutSourceUserInput>
  }

  export type ReferralPointUpdateManyWithWhereWithoutSourceUserInput = {
    where: ReferralPointScalarWhereInput
    data: XOR<ReferralPointUpdateManyMutationInput, ReferralPointUncheckedUpdateManyWithoutSourceUserInput>
  }

  export type UserDiscountUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDiscountWhereUniqueInput
    update: XOR<UserDiscountUpdateWithoutUserInput, UserDiscountUncheckedUpdateWithoutUserInput>
    create: XOR<UserDiscountCreateWithoutUserInput, UserDiscountUncheckedCreateWithoutUserInput>
  }

  export type UserDiscountUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDiscountWhereUniqueInput
    data: XOR<UserDiscountUpdateWithoutUserInput, UserDiscountUncheckedUpdateWithoutUserInput>
  }

  export type UserDiscountUpdateManyWithWhereWithoutUserInput = {
    where: UserDiscountScalarWhereInput
    data: XOR<UserDiscountUpdateManyMutationInput, UserDiscountUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDiscountScalarWhereInput = {
    AND?: UserDiscountScalarWhereInput | UserDiscountScalarWhereInput[]
    OR?: UserDiscountScalarWhereInput[]
    NOT?: UserDiscountScalarWhereInput | UserDiscountScalarWhereInput[]
    id?: IntFilter<"UserDiscount"> | number
    userId?: IntFilter<"UserDiscount"> | number
    referralCode?: StringFilter<"UserDiscount"> | string
    discount?: FloatFilter<"UserDiscount"> | number
    expiresAt?: DateTimeFilter<"UserDiscount"> | Date | string
    createdAt?: DateTimeFilter<"UserDiscount"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: IntFilter<"Event"> | number
    organizerId?: IntFilter<"Event"> | number
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    ticketPrice?: FloatFilter<"Event"> | number
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type TicketPurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketPurchaseWhereUniqueInput
    update: XOR<TicketPurchaseUpdateWithoutUserInput, TicketPurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<TicketPurchaseCreateWithoutUserInput, TicketPurchaseUncheckedCreateWithoutUserInput>
  }

  export type TicketPurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketPurchaseWhereUniqueInput
    data: XOR<TicketPurchaseUpdateWithoutUserInput, TicketPurchaseUncheckedUpdateWithoutUserInput>
  }

  export type TicketPurchaseUpdateManyWithWhereWithoutUserInput = {
    where: TicketPurchaseScalarWhereInput
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketPurchaseScalarWhereInput = {
    AND?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
    OR?: TicketPurchaseScalarWhereInput[]
    NOT?: TicketPurchaseScalarWhereInput | TicketPurchaseScalarWhereInput[]
    id?: IntFilter<"TicketPurchase"> | number
    userId?: IntFilter<"TicketPurchase"> | number
    eventId?: IntFilter<"TicketPurchase"> | number
    quantity?: IntFilter<"TicketPurchase"> | number
    totalPrice?: FloatFilter<"TicketPurchase"> | number
    pointsRedeemed?: IntNullableFilter<"TicketPurchase"> | number | null
    discountApplied?: FloatNullableFilter<"TicketPurchase"> | number | null
    purchaseDate?: DateTimeFilter<"TicketPurchase"> | Date | string
  }

  export type UserCreateWithoutReferralPointsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferredUsersInput
    referredUsers?: UserCreateNestedManyWithoutReferredByUserInput
    givenReferrals?: ReferralPointCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralPointsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    givenReferrals?: ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralPointsInput, UserUncheckedCreateWithoutReferralPointsInput>
  }

  export type UserCreateWithoutGivenReferralsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferredUsersInput
    referredUsers?: UserCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointCreateNestedManyWithoutUserInput
    userDiscounts?: UserDiscountCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGivenReferralsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointUncheckedCreateNestedManyWithoutUserInput
    userDiscounts?: UserDiscountUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGivenReferralsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGivenReferralsInput, UserUncheckedCreateWithoutGivenReferralsInput>
  }

  export type UserUpsertWithoutReferralPointsInput = {
    update: XOR<UserUpdateWithoutReferralPointsInput, UserUncheckedUpdateWithoutReferralPointsInput>
    create: XOR<UserCreateWithoutReferralPointsInput, UserUncheckedCreateWithoutReferralPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralPointsInput, UserUncheckedUpdateWithoutReferralPointsInput>
  }

  export type UserUpdateWithoutReferralPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferredUsersNestedInput
    referredUsers?: UserUpdateManyWithoutReferredByUserNestedInput
    givenReferrals?: ReferralPointUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    givenReferrals?: ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutGivenReferralsInput = {
    update: XOR<UserUpdateWithoutGivenReferralsInput, UserUncheckedUpdateWithoutGivenReferralsInput>
    create: XOR<UserCreateWithoutGivenReferralsInput, UserUncheckedCreateWithoutGivenReferralsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGivenReferralsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGivenReferralsInput, UserUncheckedUpdateWithoutGivenReferralsInput>
  }

  export type UserUpdateWithoutGivenReferralsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferredUsersNestedInput
    referredUsers?: UserUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUpdateManyWithoutUserNestedInput
    userDiscounts?: UserDiscountUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGivenReferralsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUncheckedUpdateManyWithoutUserNestedInput
    userDiscounts?: UserDiscountUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserDiscountsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferredUsersInput
    referredUsers?: UserCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointCreateNestedManyWithoutSourceUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserDiscountsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointUncheckedCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserDiscountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDiscountsInput, UserUncheckedCreateWithoutUserDiscountsInput>
  }

  export type UserUpsertWithoutUserDiscountsInput = {
    update: XOR<UserUpdateWithoutUserDiscountsInput, UserUncheckedUpdateWithoutUserDiscountsInput>
    create: XOR<UserCreateWithoutUserDiscountsInput, UserUncheckedCreateWithoutUserDiscountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDiscountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDiscountsInput, UserUncheckedUpdateWithoutUserDiscountsInput>
  }

  export type UserUpdateWithoutUserDiscountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferredUsersNestedInput
    referredUsers?: UserUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUpdateManyWithoutSourceUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserDiscountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUncheckedUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEventsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferredUsersInput
    referredUsers?: UserCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountCreateNestedManyWithoutUserInput
    purchases?: TicketPurchaseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointUncheckedCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountUncheckedCreateNestedManyWithoutUserInput
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type TicketPurchaseCreateWithoutEventInput = {
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
    user: UserCreateNestedOneWithoutPurchasesInput
  }

  export type TicketPurchaseUncheckedCreateWithoutEventInput = {
    id?: number
    userId: number
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
  }

  export type TicketPurchaseCreateOrConnectWithoutEventInput = {
    where: TicketPurchaseWhereUniqueInput
    create: XOR<TicketPurchaseCreateWithoutEventInput, TicketPurchaseUncheckedCreateWithoutEventInput>
  }

  export type TicketPurchaseCreateManyEventInputEnvelope = {
    data: TicketPurchaseCreateManyEventInput | TicketPurchaseCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventStatisticCreateWithoutEventInput = {
    statDate: Date | string
    totalSales: number
    totalTickets: number
    createdAt?: Date | string
  }

  export type EventStatisticUncheckedCreateWithoutEventInput = {
    id?: number
    statDate: Date | string
    totalSales: number
    totalTickets: number
    createdAt?: Date | string
  }

  export type EventStatisticCreateOrConnectWithoutEventInput = {
    where: EventStatisticWhereUniqueInput
    create: XOR<EventStatisticCreateWithoutEventInput, EventStatisticUncheckedCreateWithoutEventInput>
  }

  export type EventStatisticCreateManyEventInputEnvelope = {
    data: EventStatisticCreateManyEventInput | EventStatisticCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferredUsersNestedInput
    referredUsers?: UserUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUpdateManyWithoutUserNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUncheckedUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUncheckedUpdateManyWithoutUserNestedInput
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketPurchaseUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketPurchaseWhereUniqueInput
    update: XOR<TicketPurchaseUpdateWithoutEventInput, TicketPurchaseUncheckedUpdateWithoutEventInput>
    create: XOR<TicketPurchaseCreateWithoutEventInput, TicketPurchaseUncheckedCreateWithoutEventInput>
  }

  export type TicketPurchaseUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketPurchaseWhereUniqueInput
    data: XOR<TicketPurchaseUpdateWithoutEventInput, TicketPurchaseUncheckedUpdateWithoutEventInput>
  }

  export type TicketPurchaseUpdateManyWithWhereWithoutEventInput = {
    where: TicketPurchaseScalarWhereInput
    data: XOR<TicketPurchaseUpdateManyMutationInput, TicketPurchaseUncheckedUpdateManyWithoutEventInput>
  }

  export type EventStatisticUpsertWithWhereUniqueWithoutEventInput = {
    where: EventStatisticWhereUniqueInput
    update: XOR<EventStatisticUpdateWithoutEventInput, EventStatisticUncheckedUpdateWithoutEventInput>
    create: XOR<EventStatisticCreateWithoutEventInput, EventStatisticUncheckedCreateWithoutEventInput>
  }

  export type EventStatisticUpdateWithWhereUniqueWithoutEventInput = {
    where: EventStatisticWhereUniqueInput
    data: XOR<EventStatisticUpdateWithoutEventInput, EventStatisticUncheckedUpdateWithoutEventInput>
  }

  export type EventStatisticUpdateManyWithWhereWithoutEventInput = {
    where: EventStatisticScalarWhereInput
    data: XOR<EventStatisticUpdateManyMutationInput, EventStatisticUncheckedUpdateManyWithoutEventInput>
  }

  export type EventStatisticScalarWhereInput = {
    AND?: EventStatisticScalarWhereInput | EventStatisticScalarWhereInput[]
    OR?: EventStatisticScalarWhereInput[]
    NOT?: EventStatisticScalarWhereInput | EventStatisticScalarWhereInput[]
    id?: IntFilter<"EventStatistic"> | number
    eventId?: IntFilter<"EventStatistic"> | number
    statDate?: DateTimeFilter<"EventStatistic"> | Date | string
    totalSales?: FloatFilter<"EventStatistic"> | number
    totalTickets?: IntFilter<"EventStatistic"> | number
    createdAt?: DateTimeFilter<"EventStatistic"> | Date | string
  }

  export type UserCreateWithoutPurchasesInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
    referredByUser?: UserCreateNestedOneWithoutReferredUsersInput
    referredUsers?: UserCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountCreateNestedManyWithoutUserInput
    events?: EventCreateNestedManyWithoutOrganizerInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    referredBy?: string | null
    isVerified?: boolean
    createdAt?: Date | string
    referredUsers?: UserUncheckedCreateNestedManyWithoutReferredByUserInput
    referralPoints?: ReferralPointUncheckedCreateNestedManyWithoutUserInput
    givenReferrals?: ReferralPointUncheckedCreateNestedManyWithoutSourceUserInput
    userDiscounts?: UserDiscountUncheckedCreateNestedManyWithoutUserInput
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type EventCreateWithoutPurchasesInput = {
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutEventsInput
    statistics?: EventStatisticCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPurchasesInput = {
    id?: number
    organizerId: number
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    statistics?: EventStatisticUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPurchasesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPurchasesInput, EventUncheckedCreateWithoutPurchasesInput>
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredByUser?: UserUpdateOneWithoutReferredUsersNestedInput
    referredUsers?: UserUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUncheckedUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
  }

  export type EventUpsertWithoutPurchasesInput = {
    update: XOR<EventUpdateWithoutPurchasesInput, EventUncheckedUpdateWithoutPurchasesInput>
    create: XOR<EventCreateWithoutPurchasesInput, EventUncheckedCreateWithoutPurchasesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPurchasesInput, EventUncheckedUpdateWithoutPurchasesInput>
  }

  export type EventUpdateWithoutPurchasesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    statistics?: EventStatisticUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statistics?: EventStatisticUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutStatisticsInput = {
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    organizer: UserCreateNestedOneWithoutEventsInput
    purchases?: TicketPurchaseCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutStatisticsInput = {
    id?: number
    organizerId: number
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
    purchases?: TicketPurchaseUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutStatisticsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutStatisticsInput, EventUncheckedCreateWithoutStatisticsInput>
  }

  export type EventUpsertWithoutStatisticsInput = {
    update: XOR<EventUpdateWithoutStatisticsInput, EventUncheckedUpdateWithoutStatisticsInput>
    create: XOR<EventCreateWithoutStatisticsInput, EventUncheckedCreateWithoutStatisticsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutStatisticsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutStatisticsInput, EventUncheckedUpdateWithoutStatisticsInput>
  }

  export type EventUpdateWithoutStatisticsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutStatisticsInput = {
    id?: IntFieldUpdateOperationsInput | number
    organizerId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateManyReferredByUserInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    avatar?: string | null
    referralCode: string
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type ReferralPointCreateManyUserInput = {
    id?: number
    sourceUserId: number
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReferralPointCreateManySourceUserInput = {
    id?: number
    userId: number
    points: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserDiscountCreateManyUserInput = {
    id?: number
    referralCode: string
    discount: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EventCreateManyOrganizerInput = {
    id?: number
    title: string
    description: string
    location: string
    eventDate: Date | string
    ticketPrice: number
    createdAt?: Date | string
  }

  export type TicketPurchaseCreateManyUserInput = {
    id?: number
    eventId: number
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
  }

  export type UserUpdateWithoutReferredByUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUpdateManyWithoutUserNestedInput
    events?: EventUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredUsers?: UserUncheckedUpdateManyWithoutReferredByUserNestedInput
    referralPoints?: ReferralPointUncheckedUpdateManyWithoutUserNestedInput
    givenReferrals?: ReferralPointUncheckedUpdateManyWithoutSourceUserNestedInput
    userDiscounts?: UserDiscountUncheckedUpdateManyWithoutUserNestedInput
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutReferredByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralPointUpdateWithoutUserInput = {
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceUser?: UserUpdateOneRequiredWithoutGivenReferralsNestedInput
  }

  export type ReferralPointUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceUserId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralPointUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    sourceUserId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralPointUpdateWithoutSourceUserInput = {
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReferralPointsNestedInput
  }

  export type ReferralPointUncheckedUpdateWithoutSourceUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralPointUncheckedUpdateManyWithoutSourceUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscountUpdateWithoutUserInput = {
    referralCode?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    referralCode?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDiscountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    referralCode?: StringFieldUpdateOperationsInput | string
    discount?: FloatFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TicketPurchaseUpdateManyWithoutEventNestedInput
    statistics?: EventStatisticUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchases?: TicketPurchaseUncheckedUpdateManyWithoutEventNestedInput
    statistics?: EventStatisticUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketPrice?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TicketPurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseCreateManyEventInput = {
    id?: number
    userId: number
    quantity: number
    totalPrice: number
    pointsRedeemed?: number | null
    discountApplied?: number | null
    purchaseDate?: Date | string
  }

  export type EventStatisticCreateManyEventInput = {
    id?: number
    statDate: Date | string
    totalSales: number
    totalTickets: number
    createdAt?: Date | string
  }

  export type TicketPurchaseUpdateWithoutEventInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type TicketPurchaseUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketPurchaseUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: FloatFieldUpdateOperationsInput | number
    pointsRedeemed?: NullableIntFieldUpdateOperationsInput | number | null
    discountApplied?: NullableFloatFieldUpdateOperationsInput | number | null
    purchaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatisticUpdateWithoutEventInput = {
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: FloatFieldUpdateOperationsInput | number
    totalTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatisticUncheckedUpdateWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: FloatFieldUpdateOperationsInput | number
    totalTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventStatisticUncheckedUpdateManyWithoutEventInput = {
    id?: IntFieldUpdateOperationsInput | number
    statDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalSales?: FloatFieldUpdateOperationsInput | number
    totalTickets?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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