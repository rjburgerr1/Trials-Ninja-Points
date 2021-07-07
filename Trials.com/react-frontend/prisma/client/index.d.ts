
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model runs
 */

export type runs = {
  rider: string
  rank: number | null
  faults: number
  time: string
  trackName: string
  ninjaPoints: Prisma.Decimal | null
  ninjaLevel: Prisma.Decimal
  length: runs_length
  faultSponginess: runs_fault_sponginess
  rating: Prisma.Decimal | null
  creator: string
}

/**
 * Model tracks
 */

export type tracks = {
  track_name: string
  id: number
  creator: string
  ninja_level: string | null
  length: tracks_length | null
  average_faults: number | null
  fault_sponginess: tracks_fault_sponginess | null
}

/**
 * Model riders
 */

export type riders = {
  rider: string
}

/**
 * Model profiles
 */

export type profiles = {
  email: string
  id: string
  create_date: Date
  country: string | null
  state: string | null
  gamertag: string | null
  aliases: string | null
  username: string
  highest_np_run: number | null
  runs: number | null
  total_ninja_points: number | null
  highest_level_pass: number | null
  rank: number | null
  bio: string | null
}

/**
 * Model creators
 */

export type creators = {
  creator: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const runs_length: {
  Short: 'Short',
  Medium: 'Medium',
  Long: 'Long'
};

export type runs_length = (typeof runs_length)[keyof typeof runs_length]


export const runs_fault_sponginess: {
  Not_At_All: 'Not_At_All',
  Not_Very: 'Not_Very',
  Moderately: 'Moderately',
  Very: 'Very',
  Extremely: 'Extremely'
};

export type runs_fault_sponginess = (typeof runs_fault_sponginess)[keyof typeof runs_fault_sponginess]


export const tracks_length: {
  short: 'short',
  medium: 'medium',
  long: 'long'
};

export type tracks_length = (typeof tracks_length)[keyof typeof tracks_length]


export const tracks_fault_sponginess: {
  not_at_all: 'not_at_all',
  not_very: 'not_very',
  moderately: 'moderately',
  very: 'very',
  extremely: 'extremely'
};

export type tracks_fault_sponginess = (typeof tracks_fault_sponginess)[keyof typeof tracks_fault_sponginess]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Runs
 * const runs = await prisma.runs.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Runs
   * const runs = await prisma.runs.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.runs`: Exposes CRUD operations for the **runs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Runs
    * const runs = await prisma.runs.findMany()
    * ```
    */
  get runs(): Prisma.runsDelegate<GlobalReject>;

  /**
   * `prisma.tracks`: Exposes CRUD operations for the **tracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.tracks.findMany()
    * ```
    */
  get tracks(): Prisma.tracksDelegate<GlobalReject>;

  /**
   * `prisma.riders`: Exposes CRUD operations for the **riders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riders
    * const riders = await prisma.riders.findMany()
    * ```
    */
  get riders(): Prisma.ridersDelegate<GlobalReject>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<GlobalReject>;

  /**
   * `prisma.creators`: Exposes CRUD operations for the **creators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creators
    * const creators = await prisma.creators.findMany()
    * ```
    */
  get creators(): Prisma.creatorsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.26.0
   * Query Engine version: 9b816b3aa13cc270074f172f30d6eda8a8ce867d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    runs: 'runs',
    tracks: 'tracks',
    riders: 'riders',
    profiles: 'profiles',
    creators: 'creators'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model runs
   */


  export type AggregateRuns = {
    _count: RunsCountAggregateOutputType | null
    count: RunsCountAggregateOutputType | null
    _avg: RunsAvgAggregateOutputType | null
    avg: RunsAvgAggregateOutputType | null
    _sum: RunsSumAggregateOutputType | null
    sum: RunsSumAggregateOutputType | null
    _min: RunsMinAggregateOutputType | null
    min: RunsMinAggregateOutputType | null
    _max: RunsMaxAggregateOutputType | null
    max: RunsMaxAggregateOutputType | null
  }

  export type RunsAvgAggregateOutputType = {
    rank: number | null
    faults: number | null
    ninjaPoints: Decimal | null
    ninjaLevel: Decimal | null
    rating: Decimal | null
  }

  export type RunsSumAggregateOutputType = {
    rank: number | null
    faults: number | null
    ninjaPoints: Decimal | null
    ninjaLevel: Decimal | null
    rating: Decimal | null
  }

  export type RunsMinAggregateOutputType = {
    rider: string | null
    rank: number | null
    faults: number | null
    time: string | null
    trackName: string | null
    ninjaPoints: Decimal | null
    ninjaLevel: Decimal | null
    length: runs_length | null
    faultSponginess: runs_fault_sponginess | null
    rating: Decimal | null
    creator: string | null
  }

  export type RunsMaxAggregateOutputType = {
    rider: string | null
    rank: number | null
    faults: number | null
    time: string | null
    trackName: string | null
    ninjaPoints: Decimal | null
    ninjaLevel: Decimal | null
    length: runs_length | null
    faultSponginess: runs_fault_sponginess | null
    rating: Decimal | null
    creator: string | null
  }

  export type RunsCountAggregateOutputType = {
    rider: number
    rank: number
    faults: number
    time: number
    trackName: number
    ninjaPoints: number
    ninjaLevel: number
    length: number
    faultSponginess: number
    rating: number
    creator: number
    _all: number
  }


  export type RunsAvgAggregateInputType = {
    rank?: true
    faults?: true
    ninjaPoints?: true
    ninjaLevel?: true
    rating?: true
  }

  export type RunsSumAggregateInputType = {
    rank?: true
    faults?: true
    ninjaPoints?: true
    ninjaLevel?: true
    rating?: true
  }

  export type RunsMinAggregateInputType = {
    rider?: true
    rank?: true
    faults?: true
    time?: true
    trackName?: true
    ninjaPoints?: true
    ninjaLevel?: true
    length?: true
    faultSponginess?: true
    rating?: true
    creator?: true
  }

  export type RunsMaxAggregateInputType = {
    rider?: true
    rank?: true
    faults?: true
    time?: true
    trackName?: true
    ninjaPoints?: true
    ninjaLevel?: true
    length?: true
    faultSponginess?: true
    rating?: true
    creator?: true
  }

  export type RunsCountAggregateInputType = {
    rider?: true
    rank?: true
    faults?: true
    time?: true
    trackName?: true
    ninjaPoints?: true
    ninjaLevel?: true
    length?: true
    faultSponginess?: true
    rating?: true
    creator?: true
    _all?: true
  }

  export type RunsAggregateArgs = {
    /**
     * Filter which runs to aggregate.
     * 
    **/
    where?: runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of runs to fetch.
     * 
    **/
    orderBy?: Enumerable<runsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` runs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` runs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned runs
    **/
    _count?: true | RunsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | RunsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RunsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: RunsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RunsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: RunsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RunsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: RunsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RunsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: RunsMaxAggregateInputType
  }

  export type GetRunsAggregateType<T extends RunsAggregateArgs> = {
        [P in keyof T & keyof AggregateRuns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRuns[P]>
      : GetScalarType<T[P], AggregateRuns[P]>
  }


    
    
  export type RunsGroupByArgs = {
    where?: runsWhereInput
    orderBy?: Enumerable<runsOrderByInput>
    by: Array<RunsScalarFieldEnum>
    having?: runsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RunsCountAggregateInputType | true
    _avg?: RunsAvgAggregateInputType
    _sum?: RunsSumAggregateInputType
    _min?: RunsMinAggregateInputType
    _max?: RunsMaxAggregateInputType
  }


  export type RunsGroupByOutputType = {
    rider: string
    rank: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints: Decimal | null
    ninjaLevel: Decimal
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating: Decimal | null
    creator: string
    _count: RunsCountAggregateOutputType | null
    _avg: RunsAvgAggregateOutputType | null
    _sum: RunsSumAggregateOutputType | null
    _min: RunsMinAggregateOutputType | null
    _max: RunsMaxAggregateOutputType | null
  }

  type GetRunsGroupByPayload<T extends RunsGroupByArgs> = Promise<
    Array<
      PickArray<RunsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RunsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RunsGroupByOutputType[P]> 
            : GetScalarType<T[P], RunsGroupByOutputType[P]>
        }
      > 
    >


  export type runsSelect = {
    rider?: boolean
    rank?: boolean
    faults?: boolean
    time?: boolean
    trackName?: boolean
    ninjaPoints?: boolean
    ninjaLevel?: boolean
    length?: boolean
    faultSponginess?: boolean
    rating?: boolean
    creator?: boolean
    creators?: boolean | creatorsArgs
    riders?: boolean | ridersArgs
  }

  export type runsInclude = {
    creators?: boolean | creatorsArgs
    riders?: boolean | ridersArgs
  }

  export type runsGetPayload<
    S extends boolean | null | undefined | runsArgs,
    U = keyof S
      > = S extends true
        ? runs
    : S extends undefined
    ? never
    : S extends runsArgs | runsFindManyArgs
    ?'include' extends U
    ? runs  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'creators'
        ? creatorsGetPayload<S['include'][P]> :
        P extends 'riders'
        ? ridersGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof runs ?runs [P]
  : 
          P extends 'creators'
        ? creatorsGetPayload<S['select'][P]> :
        P extends 'riders'
        ? ridersGetPayload<S['select'][P]> : never
  } 
    : runs
  : runs


  type runsCountArgs = Merge<
    Omit<runsFindManyArgs, 'select' | 'include'> & {
      select?: RunsCountAggregateInputType | true
    }
  >

  export interface runsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Runs that matches the filter.
     * @param {runsFindUniqueArgs} args - Arguments to find a Runs
     * @example
     * // Get one Runs
     * const runs = await prisma.runs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends runsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, runsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'runs'> extends True ? CheckSelect<T, Prisma__runsClient<runs>, Prisma__runsClient<runsGetPayload<T>>> : CheckSelect<T, Prisma__runsClient<runs | null >, Prisma__runsClient<runsGetPayload<T> | null >>

    /**
     * Find the first Runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runsFindFirstArgs} args - Arguments to find a Runs
     * @example
     * // Get one Runs
     * const runs = await prisma.runs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends runsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, runsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'runs'> extends True ? CheckSelect<T, Prisma__runsClient<runs>, Prisma__runsClient<runsGetPayload<T>>> : CheckSelect<T, Prisma__runsClient<runs | null >, Prisma__runsClient<runsGetPayload<T> | null >>

    /**
     * Find zero or more Runs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Runs
     * const runs = await prisma.runs.findMany()
     * 
     * // Get first 10 Runs
     * const runs = await prisma.runs.findMany({ take: 10 })
     * 
     * // Only select the `rider`
     * const runsWithRiderOnly = await prisma.runs.findMany({ select: { rider: true } })
     * 
    **/
    findMany<T extends runsFindManyArgs>(
      args?: SelectSubset<T, runsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<runs>>, PrismaPromise<Array<runsGetPayload<T>>>>

    /**
     * Create a Runs.
     * @param {runsCreateArgs} args - Arguments to create a Runs.
     * @example
     * // Create one Runs
     * const Runs = await prisma.runs.create({
     *   data: {
     *     // ... data to create a Runs
     *   }
     * })
     * 
    **/
    create<T extends runsCreateArgs>(
      args: SelectSubset<T, runsCreateArgs>
    ): CheckSelect<T, Prisma__runsClient<runs>, Prisma__runsClient<runsGetPayload<T>>>

    /**
     * Create many Runs.
     *     @param {runsCreateManyArgs} args - Arguments to create many Runs.
     *     @example
     *     // Create many Runs
     *     const runs = await prisma.runs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends runsCreateManyArgs>(
      args?: SelectSubset<T, runsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Runs.
     * @param {runsDeleteArgs} args - Arguments to delete one Runs.
     * @example
     * // Delete one Runs
     * const Runs = await prisma.runs.delete({
     *   where: {
     *     // ... filter to delete one Runs
     *   }
     * })
     * 
    **/
    delete<T extends runsDeleteArgs>(
      args: SelectSubset<T, runsDeleteArgs>
    ): CheckSelect<T, Prisma__runsClient<runs>, Prisma__runsClient<runsGetPayload<T>>>

    /**
     * Update one Runs.
     * @param {runsUpdateArgs} args - Arguments to update one Runs.
     * @example
     * // Update one Runs
     * const runs = await prisma.runs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends runsUpdateArgs>(
      args: SelectSubset<T, runsUpdateArgs>
    ): CheckSelect<T, Prisma__runsClient<runs>, Prisma__runsClient<runsGetPayload<T>>>

    /**
     * Delete zero or more Runs.
     * @param {runsDeleteManyArgs} args - Arguments to filter Runs to delete.
     * @example
     * // Delete a few Runs
     * const { count } = await prisma.runs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends runsDeleteManyArgs>(
      args?: SelectSubset<T, runsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Runs
     * const runs = await prisma.runs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends runsUpdateManyArgs>(
      args: SelectSubset<T, runsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Runs.
     * @param {runsUpsertArgs} args - Arguments to update or create a Runs.
     * @example
     * // Update or create a Runs
     * const runs = await prisma.runs.upsert({
     *   create: {
     *     // ... data to create a Runs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Runs we want to update
     *   }
     * })
    **/
    upsert<T extends runsUpsertArgs>(
      args: SelectSubset<T, runsUpsertArgs>
    ): CheckSelect<T, Prisma__runsClient<runs>, Prisma__runsClient<runsGetPayload<T>>>

    /**
     * Count the number of Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {runsCountArgs} args - Arguments to filter Runs to count.
     * @example
     * // Count the number of Runs
     * const count = await prisma.runs.count({
     *   where: {
     *     // ... the filter for the Runs we want to count
     *   }
     * })
    **/
    count<T extends runsCountArgs>(
      args?: Subset<T, runsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RunsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RunsAggregateArgs>(args: Subset<T, RunsAggregateArgs>): PrismaPromise<GetRunsAggregateType<T>>

    /**
     * Group by Runs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RunsGroupByArgs} args - Group by arguments.
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
      T extends RunsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RunsGroupByArgs['orderBy'] }
        : { orderBy?: RunsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RunsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRunsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for runs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__runsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    creators<T extends creatorsArgs = {}>(args?: Subset<T, creatorsArgs>): CheckSelect<T, Prisma__creatorsClient<creators | null >, Prisma__creatorsClient<creatorsGetPayload<T> | null >>;

    riders<T extends ridersArgs = {}>(args?: Subset<T, ridersArgs>): CheckSelect<T, Prisma__ridersClient<riders | null >, Prisma__ridersClient<ridersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * runs findUnique
   */
  export type runsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
    /**
     * Throw an Error if a runs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which runs to fetch.
     * 
    **/
    where: runsWhereUniqueInput
  }


  /**
   * runs findFirst
   */
  export type runsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
    /**
     * Throw an Error if a runs can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which runs to fetch.
     * 
    **/
    where?: runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of runs to fetch.
     * 
    **/
    orderBy?: Enumerable<runsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for runs.
     * 
    **/
    cursor?: runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` runs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` runs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of runs.
     * 
    **/
    distinct?: Enumerable<RunsScalarFieldEnum>
  }


  /**
   * runs findMany
   */
  export type runsFindManyArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
    /**
     * Filter, which runs to fetch.
     * 
    **/
    where?: runsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of runs to fetch.
     * 
    **/
    orderBy?: Enumerable<runsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing runs.
     * 
    **/
    cursor?: runsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` runs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` runs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RunsScalarFieldEnum>
  }


  /**
   * runs create
   */
  export type runsCreateArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
    /**
     * The data needed to create a runs.
     * 
    **/
    data: XOR<runsCreateInput, runsUncheckedCreateInput>
  }


  /**
   * runs createMany
   */
  export type runsCreateManyArgs = {
    data: Enumerable<runsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * runs update
   */
  export type runsUpdateArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
    /**
     * The data needed to update a runs.
     * 
    **/
    data: XOR<runsUpdateInput, runsUncheckedUpdateInput>
    /**
     * Choose, which runs to update.
     * 
    **/
    where: runsWhereUniqueInput
  }


  /**
   * runs updateMany
   */
  export type runsUpdateManyArgs = {
    data: XOR<runsUpdateManyMutationInput, runsUncheckedUpdateManyInput>
    where?: runsWhereInput
  }


  /**
   * runs upsert
   */
  export type runsUpsertArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
    /**
     * The filter to search for the runs to update in case it exists.
     * 
    **/
    where: runsWhereUniqueInput
    /**
     * In case the runs found by the `where` argument doesn't exist, create a new runs with this data.
     * 
    **/
    create: XOR<runsCreateInput, runsUncheckedCreateInput>
    /**
     * In case the runs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<runsUpdateInput, runsUncheckedUpdateInput>
  }


  /**
   * runs delete
   */
  export type runsDeleteArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
    /**
     * Filter which runs to delete.
     * 
    **/
    where: runsWhereUniqueInput
  }


  /**
   * runs deleteMany
   */
  export type runsDeleteManyArgs = {
    where?: runsWhereInput
  }


  /**
   * runs without action
   */
  export type runsArgs = {
    /**
     * Select specific fields to fetch from the runs
     * 
    **/
    select?: runsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: runsInclude | null
  }



  /**
   * Model tracks
   */


  export type AggregateTracks = {
    _count: TracksCountAggregateOutputType | null
    count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
    max: TracksMaxAggregateOutputType | null
  }

  export type TracksAvgAggregateOutputType = {
    id: number | null
    average_faults: number | null
  }

  export type TracksSumAggregateOutputType = {
    id: number | null
    average_faults: number | null
  }

  export type TracksMinAggregateOutputType = {
    track_name: string | null
    id: number | null
    creator: string | null
    ninja_level: string | null
    length: tracks_length | null
    average_faults: number | null
    fault_sponginess: tracks_fault_sponginess | null
  }

  export type TracksMaxAggregateOutputType = {
    track_name: string | null
    id: number | null
    creator: string | null
    ninja_level: string | null
    length: tracks_length | null
    average_faults: number | null
    fault_sponginess: tracks_fault_sponginess | null
  }

  export type TracksCountAggregateOutputType = {
    track_name: number
    id: number
    creator: number
    ninja_level: number
    length: number
    average_faults: number
    fault_sponginess: number
    _all: number
  }


  export type TracksAvgAggregateInputType = {
    id?: true
    average_faults?: true
  }

  export type TracksSumAggregateInputType = {
    id?: true
    average_faults?: true
  }

  export type TracksMinAggregateInputType = {
    track_name?: true
    id?: true
    creator?: true
    ninja_level?: true
    length?: true
    average_faults?: true
    fault_sponginess?: true
  }

  export type TracksMaxAggregateInputType = {
    track_name?: true
    id?: true
    creator?: true
    ninja_level?: true
    length?: true
    average_faults?: true
    fault_sponginess?: true
  }

  export type TracksCountAggregateInputType = {
    track_name?: true
    id?: true
    creator?: true
    ninja_level?: true
    length?: true
    average_faults?: true
    fault_sponginess?: true
    _all?: true
  }

  export type TracksAggregateArgs = {
    /**
     * Filter which tracks to aggregate.
     * 
    **/
    where?: tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracks to fetch.
     * 
    **/
    orderBy?: Enumerable<tracksOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tracks
    **/
    _count?: true | TracksCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TracksAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: TracksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TracksSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: TracksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TracksMaxAggregateInputType
  }

  export type GetTracksAggregateType<T extends TracksAggregateArgs> = {
        [P in keyof T & keyof AggregateTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracks[P]>
      : GetScalarType<T[P], AggregateTracks[P]>
  }


    
    
  export type TracksGroupByArgs = {
    where?: tracksWhereInput
    orderBy?: Enumerable<tracksOrderByInput>
    by: Array<TracksScalarFieldEnum>
    having?: tracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksCountAggregateInputType | true
    _avg?: TracksAvgAggregateInputType
    _sum?: TracksSumAggregateInputType
    _min?: TracksMinAggregateInputType
    _max?: TracksMaxAggregateInputType
  }


  export type TracksGroupByOutputType = {
    track_name: string
    id: number
    creator: string
    ninja_level: string | null
    length: tracks_length | null
    average_faults: number | null
    fault_sponginess: tracks_fault_sponginess | null
    _count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  type GetTracksGroupByPayload<T extends TracksGroupByArgs> = Promise<
    Array<
      PickArray<TracksGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TracksGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TracksGroupByOutputType[P]> 
            : GetScalarType<T[P], TracksGroupByOutputType[P]>
        }
      > 
    >


  export type tracksSelect = {
    track_name?: boolean
    id?: boolean
    creator?: boolean
    ninja_level?: boolean
    length?: boolean
    average_faults?: boolean
    fault_sponginess?: boolean
  }

  export type tracksGetPayload<
    S extends boolean | null | undefined | tracksArgs,
    U = keyof S
      > = S extends true
        ? tracks
    : S extends undefined
    ? never
    : S extends tracksArgs | tracksFindManyArgs
    ?'include' extends U
    ? tracks 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof tracks ?tracks [P]
  : 
     never
  } 
    : tracks
  : tracks


  type tracksCountArgs = Merge<
    Omit<tracksFindManyArgs, 'select' | 'include'> & {
      select?: TracksCountAggregateInputType | true
    }
  >

  export interface tracksDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tracks that matches the filter.
     * @param {tracksFindUniqueArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends tracksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, tracksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'tracks'> extends True ? CheckSelect<T, Prisma__tracksClient<tracks>, Prisma__tracksClient<tracksGetPayload<T>>> : CheckSelect<T, Prisma__tracksClient<tracks | null >, Prisma__tracksClient<tracksGetPayload<T> | null >>

    /**
     * Find the first Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksFindFirstArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends tracksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, tracksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'tracks'> extends True ? CheckSelect<T, Prisma__tracksClient<tracks>, Prisma__tracksClient<tracksGetPayload<T>>> : CheckSelect<T, Prisma__tracksClient<tracks | null >, Prisma__tracksClient<tracksGetPayload<T> | null >>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.tracks.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.tracks.findMany({ take: 10 })
     * 
     * // Only select the `track_name`
     * const tracksWithTrack_nameOnly = await prisma.tracks.findMany({ select: { track_name: true } })
     * 
    **/
    findMany<T extends tracksFindManyArgs>(
      args?: SelectSubset<T, tracksFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<tracks>>, PrismaPromise<Array<tracksGetPayload<T>>>>

    /**
     * Create a Tracks.
     * @param {tracksCreateArgs} args - Arguments to create a Tracks.
     * @example
     * // Create one Tracks
     * const Tracks = await prisma.tracks.create({
     *   data: {
     *     // ... data to create a Tracks
     *   }
     * })
     * 
    **/
    create<T extends tracksCreateArgs>(
      args: SelectSubset<T, tracksCreateArgs>
    ): CheckSelect<T, Prisma__tracksClient<tracks>, Prisma__tracksClient<tracksGetPayload<T>>>

    /**
     * Create many Tracks.
     *     @param {tracksCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const tracks = await prisma.tracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends tracksCreateManyArgs>(
      args?: SelectSubset<T, tracksCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tracks.
     * @param {tracksDeleteArgs} args - Arguments to delete one Tracks.
     * @example
     * // Delete one Tracks
     * const Tracks = await prisma.tracks.delete({
     *   where: {
     *     // ... filter to delete one Tracks
     *   }
     * })
     * 
    **/
    delete<T extends tracksDeleteArgs>(
      args: SelectSubset<T, tracksDeleteArgs>
    ): CheckSelect<T, Prisma__tracksClient<tracks>, Prisma__tracksClient<tracksGetPayload<T>>>

    /**
     * Update one Tracks.
     * @param {tracksUpdateArgs} args - Arguments to update one Tracks.
     * @example
     * // Update one Tracks
     * const tracks = await prisma.tracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends tracksUpdateArgs>(
      args: SelectSubset<T, tracksUpdateArgs>
    ): CheckSelect<T, Prisma__tracksClient<tracks>, Prisma__tracksClient<tracksGetPayload<T>>>

    /**
     * Delete zero or more Tracks.
     * @param {tracksDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.tracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends tracksDeleteManyArgs>(
      args?: SelectSubset<T, tracksDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const tracks = await prisma.tracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends tracksUpdateManyArgs>(
      args: SelectSubset<T, tracksUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tracks.
     * @param {tracksUpsertArgs} args - Arguments to update or create a Tracks.
     * @example
     * // Update or create a Tracks
     * const tracks = await prisma.tracks.upsert({
     *   create: {
     *     // ... data to create a Tracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracks we want to update
     *   }
     * })
    **/
    upsert<T extends tracksUpsertArgs>(
      args: SelectSubset<T, tracksUpsertArgs>
    ): CheckSelect<T, Prisma__tracksClient<tracks>, Prisma__tracksClient<tracksGetPayload<T>>>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tracksCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.tracks.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends tracksCountArgs>(
      args?: Subset<T, tracksCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TracksAggregateArgs>(args: Subset<T, TracksAggregateArgs>): PrismaPromise<GetTracksAggregateType<T>>

    /**
     * Group by Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksGroupByArgs} args - Group by arguments.
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
      T extends TracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksGroupByArgs['orderBy'] }
        : { orderBy?: TracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for tracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__tracksClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * tracks findUnique
   */
  export type tracksFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
    /**
     * Throw an Error if a tracks can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which tracks to fetch.
     * 
    **/
    where: tracksWhereUniqueInput
  }


  /**
   * tracks findFirst
   */
  export type tracksFindFirstArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
    /**
     * Throw an Error if a tracks can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which tracks to fetch.
     * 
    **/
    where?: tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracks to fetch.
     * 
    **/
    orderBy?: Enumerable<tracksOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tracks.
     * 
    **/
    cursor?: tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracks.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tracks.
     * 
    **/
    distinct?: Enumerable<TracksScalarFieldEnum>
  }


  /**
   * tracks findMany
   */
  export type tracksFindManyArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
    /**
     * Filter, which tracks to fetch.
     * 
    **/
    where?: tracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tracks to fetch.
     * 
    **/
    orderBy?: Enumerable<tracksOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tracks.
     * 
    **/
    cursor?: tracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tracks from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tracks.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TracksScalarFieldEnum>
  }


  /**
   * tracks create
   */
  export type tracksCreateArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
    /**
     * The data needed to create a tracks.
     * 
    **/
    data: XOR<tracksCreateInput, tracksUncheckedCreateInput>
  }


  /**
   * tracks createMany
   */
  export type tracksCreateManyArgs = {
    data: Enumerable<tracksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * tracks update
   */
  export type tracksUpdateArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
    /**
     * The data needed to update a tracks.
     * 
    **/
    data: XOR<tracksUpdateInput, tracksUncheckedUpdateInput>
    /**
     * Choose, which tracks to update.
     * 
    **/
    where: tracksWhereUniqueInput
  }


  /**
   * tracks updateMany
   */
  export type tracksUpdateManyArgs = {
    data: XOR<tracksUpdateManyMutationInput, tracksUncheckedUpdateManyInput>
    where?: tracksWhereInput
  }


  /**
   * tracks upsert
   */
  export type tracksUpsertArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
    /**
     * The filter to search for the tracks to update in case it exists.
     * 
    **/
    where: tracksWhereUniqueInput
    /**
     * In case the tracks found by the `where` argument doesn't exist, create a new tracks with this data.
     * 
    **/
    create: XOR<tracksCreateInput, tracksUncheckedCreateInput>
    /**
     * In case the tracks was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<tracksUpdateInput, tracksUncheckedUpdateInput>
  }


  /**
   * tracks delete
   */
  export type tracksDeleteArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
    /**
     * Filter which tracks to delete.
     * 
    **/
    where: tracksWhereUniqueInput
  }


  /**
   * tracks deleteMany
   */
  export type tracksDeleteManyArgs = {
    where?: tracksWhereInput
  }


  /**
   * tracks without action
   */
  export type tracksArgs = {
    /**
     * Select specific fields to fetch from the tracks
     * 
    **/
    select?: tracksSelect | null
  }



  /**
   * Model riders
   */


  export type AggregateRiders = {
    _count: RidersCountAggregateOutputType | null
    count: RidersCountAggregateOutputType | null
    _min: RidersMinAggregateOutputType | null
    min: RidersMinAggregateOutputType | null
    _max: RidersMaxAggregateOutputType | null
    max: RidersMaxAggregateOutputType | null
  }

  export type RidersMinAggregateOutputType = {
    rider: string | null
  }

  export type RidersMaxAggregateOutputType = {
    rider: string | null
  }

  export type RidersCountAggregateOutputType = {
    rider: number
    _all: number
  }


  export type RidersMinAggregateInputType = {
    rider?: true
  }

  export type RidersMaxAggregateInputType = {
    rider?: true
  }

  export type RidersCountAggregateInputType = {
    rider?: true
    _all?: true
  }

  export type RidersAggregateArgs = {
    /**
     * Filter which riders to aggregate.
     * 
    **/
    where?: ridersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of riders to fetch.
     * 
    **/
    orderBy?: Enumerable<ridersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ridersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` riders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` riders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned riders
    **/
    _count?: true | RidersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | RidersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RidersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: RidersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RidersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: RidersMaxAggregateInputType
  }

  export type GetRidersAggregateType<T extends RidersAggregateArgs> = {
        [P in keyof T & keyof AggregateRiders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRiders[P]>
      : GetScalarType<T[P], AggregateRiders[P]>
  }


    
    
  export type RidersGroupByArgs = {
    where?: ridersWhereInput
    orderBy?: Enumerable<ridersOrderByInput>
    by: Array<RidersScalarFieldEnum>
    having?: ridersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RidersCountAggregateInputType | true
    _min?: RidersMinAggregateInputType
    _max?: RidersMaxAggregateInputType
  }


  export type RidersGroupByOutputType = {
    rider: string
    _count: RidersCountAggregateOutputType | null
    _min: RidersMinAggregateOutputType | null
    _max: RidersMaxAggregateOutputType | null
  }

  type GetRidersGroupByPayload<T extends RidersGroupByArgs> = Promise<
    Array<
      PickArray<RidersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof RidersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], RidersGroupByOutputType[P]> 
            : GetScalarType<T[P], RidersGroupByOutputType[P]>
        }
      > 
    >


  export type ridersSelect = {
    rider?: boolean
    runs?: boolean | runsFindManyArgs
  }

  export type ridersInclude = {
    runs?: boolean | runsFindManyArgs
  }

  export type ridersGetPayload<
    S extends boolean | null | undefined | ridersArgs,
    U = keyof S
      > = S extends true
        ? riders
    : S extends undefined
    ? never
    : S extends ridersArgs | ridersFindManyArgs
    ?'include' extends U
    ? riders  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'runs'
        ? Array < runsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof riders ?riders [P]
  : 
          P extends 'runs'
        ? Array < runsGetPayload<S['select'][P]>>  : never
  } 
    : riders
  : riders


  type ridersCountArgs = Merge<
    Omit<ridersFindManyArgs, 'select' | 'include'> & {
      select?: RidersCountAggregateInputType | true
    }
  >

  export interface ridersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Riders that matches the filter.
     * @param {ridersFindUniqueArgs} args - Arguments to find a Riders
     * @example
     * // Get one Riders
     * const riders = await prisma.riders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ridersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ridersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'riders'> extends True ? CheckSelect<T, Prisma__ridersClient<riders>, Prisma__ridersClient<ridersGetPayload<T>>> : CheckSelect<T, Prisma__ridersClient<riders | null >, Prisma__ridersClient<ridersGetPayload<T> | null >>

    /**
     * Find the first Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridersFindFirstArgs} args - Arguments to find a Riders
     * @example
     * // Get one Riders
     * const riders = await prisma.riders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ridersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ridersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'riders'> extends True ? CheckSelect<T, Prisma__ridersClient<riders>, Prisma__ridersClient<ridersGetPayload<T>>> : CheckSelect<T, Prisma__ridersClient<riders | null >, Prisma__ridersClient<ridersGetPayload<T> | null >>

    /**
     * Find zero or more Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riders
     * const riders = await prisma.riders.findMany()
     * 
     * // Get first 10 Riders
     * const riders = await prisma.riders.findMany({ take: 10 })
     * 
     * // Only select the `rider`
     * const ridersWithRiderOnly = await prisma.riders.findMany({ select: { rider: true } })
     * 
    **/
    findMany<T extends ridersFindManyArgs>(
      args?: SelectSubset<T, ridersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<riders>>, PrismaPromise<Array<ridersGetPayload<T>>>>

    /**
     * Create a Riders.
     * @param {ridersCreateArgs} args - Arguments to create a Riders.
     * @example
     * // Create one Riders
     * const Riders = await prisma.riders.create({
     *   data: {
     *     // ... data to create a Riders
     *   }
     * })
     * 
    **/
    create<T extends ridersCreateArgs>(
      args: SelectSubset<T, ridersCreateArgs>
    ): CheckSelect<T, Prisma__ridersClient<riders>, Prisma__ridersClient<ridersGetPayload<T>>>

    /**
     * Create many Riders.
     *     @param {ridersCreateManyArgs} args - Arguments to create many Riders.
     *     @example
     *     // Create many Riders
     *     const riders = await prisma.riders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ridersCreateManyArgs>(
      args?: SelectSubset<T, ridersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Riders.
     * @param {ridersDeleteArgs} args - Arguments to delete one Riders.
     * @example
     * // Delete one Riders
     * const Riders = await prisma.riders.delete({
     *   where: {
     *     // ... filter to delete one Riders
     *   }
     * })
     * 
    **/
    delete<T extends ridersDeleteArgs>(
      args: SelectSubset<T, ridersDeleteArgs>
    ): CheckSelect<T, Prisma__ridersClient<riders>, Prisma__ridersClient<ridersGetPayload<T>>>

    /**
     * Update one Riders.
     * @param {ridersUpdateArgs} args - Arguments to update one Riders.
     * @example
     * // Update one Riders
     * const riders = await prisma.riders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ridersUpdateArgs>(
      args: SelectSubset<T, ridersUpdateArgs>
    ): CheckSelect<T, Prisma__ridersClient<riders>, Prisma__ridersClient<ridersGetPayload<T>>>

    /**
     * Delete zero or more Riders.
     * @param {ridersDeleteManyArgs} args - Arguments to filter Riders to delete.
     * @example
     * // Delete a few Riders
     * const { count } = await prisma.riders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ridersDeleteManyArgs>(
      args?: SelectSubset<T, ridersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riders
     * const riders = await prisma.riders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ridersUpdateManyArgs>(
      args: SelectSubset<T, ridersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Riders.
     * @param {ridersUpsertArgs} args - Arguments to update or create a Riders.
     * @example
     * // Update or create a Riders
     * const riders = await prisma.riders.upsert({
     *   create: {
     *     // ... data to create a Riders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Riders we want to update
     *   }
     * })
    **/
    upsert<T extends ridersUpsertArgs>(
      args: SelectSubset<T, ridersUpsertArgs>
    ): CheckSelect<T, Prisma__ridersClient<riders>, Prisma__ridersClient<ridersGetPayload<T>>>

    /**
     * Count the number of Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridersCountArgs} args - Arguments to filter Riders to count.
     * @example
     * // Count the number of Riders
     * const count = await prisma.riders.count({
     *   where: {
     *     // ... the filter for the Riders we want to count
     *   }
     * })
    **/
    count<T extends ridersCountArgs>(
      args?: Subset<T, ridersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RidersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RidersAggregateArgs>(args: Subset<T, RidersAggregateArgs>): PrismaPromise<GetRidersAggregateType<T>>

    /**
     * Group by Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidersGroupByArgs} args - Group by arguments.
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
      T extends RidersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RidersGroupByArgs['orderBy'] }
        : { orderBy?: RidersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RidersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRidersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for riders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ridersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    runs<T extends runsFindManyArgs = {}>(args?: Subset<T, runsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<runs>>, PrismaPromise<Array<runsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * riders findUnique
   */
  export type ridersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
    /**
     * Throw an Error if a riders can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which riders to fetch.
     * 
    **/
    where: ridersWhereUniqueInput
  }


  /**
   * riders findFirst
   */
  export type ridersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
    /**
     * Throw an Error if a riders can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which riders to fetch.
     * 
    **/
    where?: ridersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of riders to fetch.
     * 
    **/
    orderBy?: Enumerable<ridersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for riders.
     * 
    **/
    cursor?: ridersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` riders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` riders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of riders.
     * 
    **/
    distinct?: Enumerable<RidersScalarFieldEnum>
  }


  /**
   * riders findMany
   */
  export type ridersFindManyArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
    /**
     * Filter, which riders to fetch.
     * 
    **/
    where?: ridersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of riders to fetch.
     * 
    **/
    orderBy?: Enumerable<ridersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing riders.
     * 
    **/
    cursor?: ridersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` riders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` riders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RidersScalarFieldEnum>
  }


  /**
   * riders create
   */
  export type ridersCreateArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
    /**
     * The data needed to create a riders.
     * 
    **/
    data: XOR<ridersCreateInput, ridersUncheckedCreateInput>
  }


  /**
   * riders createMany
   */
  export type ridersCreateManyArgs = {
    data: Enumerable<ridersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * riders update
   */
  export type ridersUpdateArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
    /**
     * The data needed to update a riders.
     * 
    **/
    data: XOR<ridersUpdateInput, ridersUncheckedUpdateInput>
    /**
     * Choose, which riders to update.
     * 
    **/
    where: ridersWhereUniqueInput
  }


  /**
   * riders updateMany
   */
  export type ridersUpdateManyArgs = {
    data: XOR<ridersUpdateManyMutationInput, ridersUncheckedUpdateManyInput>
    where?: ridersWhereInput
  }


  /**
   * riders upsert
   */
  export type ridersUpsertArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
    /**
     * The filter to search for the riders to update in case it exists.
     * 
    **/
    where: ridersWhereUniqueInput
    /**
     * In case the riders found by the `where` argument doesn't exist, create a new riders with this data.
     * 
    **/
    create: XOR<ridersCreateInput, ridersUncheckedCreateInput>
    /**
     * In case the riders was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ridersUpdateInput, ridersUncheckedUpdateInput>
  }


  /**
   * riders delete
   */
  export type ridersDeleteArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
    /**
     * Filter which riders to delete.
     * 
    **/
    where: ridersWhereUniqueInput
  }


  /**
   * riders deleteMany
   */
  export type ridersDeleteManyArgs = {
    where?: ridersWhereInput
  }


  /**
   * riders without action
   */
  export type ridersArgs = {
    /**
     * Select specific fields to fetch from the riders
     * 
    **/
    select?: ridersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ridersInclude | null
  }



  /**
   * Model profiles
   */


  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
    max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    highest_np_run: number | null
    runs: number | null
    total_ninja_points: number | null
    highest_level_pass: number | null
    rank: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    highest_np_run: number | null
    runs: number | null
    total_ninja_points: number | null
    highest_level_pass: number | null
    rank: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    email: string | null
    id: string | null
    create_date: Date | null
    country: string | null
    state: string | null
    gamertag: string | null
    aliases: string | null
    username: string | null
    highest_np_run: number | null
    runs: number | null
    total_ninja_points: number | null
    highest_level_pass: number | null
    rank: number | null
    bio: string | null
  }

  export type ProfilesMaxAggregateOutputType = {
    email: string | null
    id: string | null
    create_date: Date | null
    country: string | null
    state: string | null
    gamertag: string | null
    aliases: string | null
    username: string | null
    highest_np_run: number | null
    runs: number | null
    total_ninja_points: number | null
    highest_level_pass: number | null
    rank: number | null
    bio: string | null
  }

  export type ProfilesCountAggregateOutputType = {
    email: number
    id: number
    create_date: number
    country: number
    state: number
    gamertag: number
    aliases: number
    username: number
    highest_np_run: number
    runs: number
    total_ninja_points: number
    highest_level_pass: number
    rank: number
    bio: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    highest_np_run?: true
    runs?: true
    total_ninja_points?: true
    highest_level_pass?: true
    rank?: true
  }

  export type ProfilesSumAggregateInputType = {
    highest_np_run?: true
    runs?: true
    total_ninja_points?: true
    highest_level_pass?: true
    rank?: true
  }

  export type ProfilesMinAggregateInputType = {
    email?: true
    id?: true
    create_date?: true
    country?: true
    state?: true
    gamertag?: true
    aliases?: true
    username?: true
    highest_np_run?: true
    runs?: true
    total_ninja_points?: true
    highest_level_pass?: true
    rank?: true
    bio?: true
  }

  export type ProfilesMaxAggregateInputType = {
    email?: true
    id?: true
    create_date?: true
    country?: true
    state?: true
    gamertag?: true
    aliases?: true
    username?: true
    highest_np_run?: true
    runs?: true
    total_ninja_points?: true
    highest_level_pass?: true
    rank?: true
    bio?: true
  }

  export type ProfilesCountAggregateInputType = {
    email?: true
    id?: true
    create_date?: true
    country?: true
    state?: true
    gamertag?: true
    aliases?: true
    username?: true
    highest_np_run?: true
    runs?: true
    total_ninja_points?: true
    highest_level_pass?: true
    rank?: true
    bio?: true
    _all?: true
  }

  export type ProfilesAggregateArgs = {
    /**
     * Filter which profiles to aggregate.
     * 
    **/
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profilesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }


    
    
  export type ProfilesGroupByArgs = {
    where?: profilesWhereInput
    orderBy?: Enumerable<profilesOrderByInput>
    by: Array<ProfilesScalarFieldEnum>
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }


  export type ProfilesGroupByOutputType = {
    email: string
    id: string
    create_date: Date
    country: string | null
    state: string | null
    gamertag: string | null
    aliases: string | null
    username: string
    highest_np_run: number | null
    runs: number | null
    total_ninja_points: number | null
    highest_level_pass: number | null
    rank: number | null
    bio: string | null
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends ProfilesGroupByArgs> = Promise<
    Array<
      PickArray<ProfilesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]> 
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      > 
    >


  export type profilesSelect = {
    email?: boolean
    id?: boolean
    create_date?: boolean
    country?: boolean
    state?: boolean
    gamertag?: boolean
    aliases?: boolean
    username?: boolean
    highest_np_run?: boolean
    runs?: boolean
    total_ninja_points?: boolean
    highest_level_pass?: boolean
    rank?: boolean
    bio?: boolean
  }

  export type profilesGetPayload<
    S extends boolean | null | undefined | profilesArgs,
    U = keyof S
      > = S extends true
        ? profiles
    : S extends undefined
    ? never
    : S extends profilesArgs | profilesFindManyArgs
    ?'include' extends U
    ? profiles 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof profiles ?profiles [P]
  : 
     never
  } 
    : profiles
  : profiles


  type profilesCountArgs = Merge<
    Omit<profilesFindManyArgs, 'select' | 'include'> & {
      select?: ProfilesCountAggregateInputType | true
    }
  >

  export interface profilesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends profilesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, profilesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'profiles'> extends True ? CheckSelect<T, Prisma__profilesClient<profiles>, Prisma__profilesClient<profilesGetPayload<T>>> : CheckSelect<T, Prisma__profilesClient<profiles | null >, Prisma__profilesClient<profilesGetPayload<T> | null >>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends profilesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, profilesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'profiles'> extends True ? CheckSelect<T, Prisma__profilesClient<profiles>, Prisma__profilesClient<profilesGetPayload<T>>> : CheckSelect<T, Prisma__profilesClient<profiles | null >, Prisma__profilesClient<profilesGetPayload<T> | null >>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `email`
     * const profilesWithEmailOnly = await prisma.profiles.findMany({ select: { email: true } })
     * 
    **/
    findMany<T extends profilesFindManyArgs>(
      args?: SelectSubset<T, profilesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<profiles>>, PrismaPromise<Array<profilesGetPayload<T>>>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
    **/
    create<T extends profilesCreateArgs>(
      args: SelectSubset<T, profilesCreateArgs>
    ): CheckSelect<T, Prisma__profilesClient<profiles>, Prisma__profilesClient<profilesGetPayload<T>>>

    /**
     * Create many Profiles.
     *     @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     *     @example
     *     // Create many Profiles
     *     const profiles = await prisma.profiles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends profilesCreateManyArgs>(
      args?: SelectSubset<T, profilesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
    **/
    delete<T extends profilesDeleteArgs>(
      args: SelectSubset<T, profilesDeleteArgs>
    ): CheckSelect<T, Prisma__profilesClient<profiles>, Prisma__profilesClient<profilesGetPayload<T>>>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends profilesUpdateArgs>(
      args: SelectSubset<T, profilesUpdateArgs>
    ): CheckSelect<T, Prisma__profilesClient<profiles>, Prisma__profilesClient<profilesGetPayload<T>>>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends profilesDeleteManyArgs>(
      args?: SelectSubset<T, profilesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends profilesUpdateManyArgs>(
      args: SelectSubset<T, profilesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
    **/
    upsert<T extends profilesUpsertArgs>(
      args: SelectSubset<T, profilesUpsertArgs>
    ): CheckSelect<T, Prisma__profilesClient<profiles>, Prisma__profilesClient<profilesGetPayload<T>>>

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesGroupByArgs} args - Group by arguments.
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
      T extends ProfilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfilesGroupByArgs['orderBy'] }
        : { orderBy?: ProfilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProfilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__profilesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
    /**
     * Throw an Error if a profiles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which profiles to fetch.
     * 
    **/
    where: profilesWhereUniqueInput
  }


  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
    /**
     * Throw an Error if a profiles can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which profiles to fetch.
     * 
    **/
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profilesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     * 
    **/
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     * 
    **/
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }


  /**
   * profiles findMany
   */
  export type profilesFindManyArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
    /**
     * Filter, which profiles to fetch.
     * 
    **/
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     * 
    **/
    orderBy?: Enumerable<profilesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     * 
    **/
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProfilesScalarFieldEnum>
  }


  /**
   * profiles create
   */
  export type profilesCreateArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
    /**
     * The data needed to create a profiles.
     * 
    **/
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }


  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs = {
    data: Enumerable<profilesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * profiles update
   */
  export type profilesUpdateArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
    /**
     * The data needed to update a profiles.
     * 
    **/
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     * 
    **/
    where: profilesWhereUniqueInput
  }


  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs = {
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    where?: profilesWhereInput
  }


  /**
   * profiles upsert
   */
  export type profilesUpsertArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
    /**
     * The filter to search for the profiles to update in case it exists.
     * 
    **/
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     * 
    **/
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }


  /**
   * profiles delete
   */
  export type profilesDeleteArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
    /**
     * Filter which profiles to delete.
     * 
    **/
    where: profilesWhereUniqueInput
  }


  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs = {
    where?: profilesWhereInput
  }


  /**
   * profiles without action
   */
  export type profilesArgs = {
    /**
     * Select specific fields to fetch from the profiles
     * 
    **/
    select?: profilesSelect | null
  }



  /**
   * Model creators
   */


  export type AggregateCreators = {
    _count: CreatorsCountAggregateOutputType | null
    count: CreatorsCountAggregateOutputType | null
    _min: CreatorsMinAggregateOutputType | null
    min: CreatorsMinAggregateOutputType | null
    _max: CreatorsMaxAggregateOutputType | null
    max: CreatorsMaxAggregateOutputType | null
  }

  export type CreatorsMinAggregateOutputType = {
    creator: string | null
  }

  export type CreatorsMaxAggregateOutputType = {
    creator: string | null
  }

  export type CreatorsCountAggregateOutputType = {
    creator: number
    _all: number
  }


  export type CreatorsMinAggregateInputType = {
    creator?: true
  }

  export type CreatorsMaxAggregateInputType = {
    creator?: true
  }

  export type CreatorsCountAggregateInputType = {
    creator?: true
    _all?: true
  }

  export type CreatorsAggregateArgs = {
    /**
     * Filter which creators to aggregate.
     * 
    **/
    where?: creatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creators to fetch.
     * 
    **/
    orderBy?: Enumerable<creatorsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: creatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creators from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creators.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned creators
    **/
    _count?: true | CreatorsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CreatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CreatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CreatorsMaxAggregateInputType
  }

  export type GetCreatorsAggregateType<T extends CreatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateCreators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreators[P]>
      : GetScalarType<T[P], AggregateCreators[P]>
  }


    
    
  export type CreatorsGroupByArgs = {
    where?: creatorsWhereInput
    orderBy?: Enumerable<creatorsOrderByInput>
    by: Array<CreatorsScalarFieldEnum>
    having?: creatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatorsCountAggregateInputType | true
    _min?: CreatorsMinAggregateInputType
    _max?: CreatorsMaxAggregateInputType
  }


  export type CreatorsGroupByOutputType = {
    creator: string
    _count: CreatorsCountAggregateOutputType | null
    _min: CreatorsMinAggregateOutputType | null
    _max: CreatorsMaxAggregateOutputType | null
  }

  type GetCreatorsGroupByPayload<T extends CreatorsGroupByArgs> = Promise<
    Array<
      PickArray<CreatorsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof CreatorsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], CreatorsGroupByOutputType[P]> 
            : GetScalarType<T[P], CreatorsGroupByOutputType[P]>
        }
      > 
    >


  export type creatorsSelect = {
    creator?: boolean
    runs?: boolean | runsFindManyArgs
  }

  export type creatorsInclude = {
    runs?: boolean | runsFindManyArgs
  }

  export type creatorsGetPayload<
    S extends boolean | null | undefined | creatorsArgs,
    U = keyof S
      > = S extends true
        ? creators
    : S extends undefined
    ? never
    : S extends creatorsArgs | creatorsFindManyArgs
    ?'include' extends U
    ? creators  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'runs'
        ? Array < runsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof creators ?creators [P]
  : 
          P extends 'runs'
        ? Array < runsGetPayload<S['select'][P]>>  : never
  } 
    : creators
  : creators


  type creatorsCountArgs = Merge<
    Omit<creatorsFindManyArgs, 'select' | 'include'> & {
      select?: CreatorsCountAggregateInputType | true
    }
  >

  export interface creatorsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Creators that matches the filter.
     * @param {creatorsFindUniqueArgs} args - Arguments to find a Creators
     * @example
     * // Get one Creators
     * const creators = await prisma.creators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends creatorsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, creatorsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'creators'> extends True ? CheckSelect<T, Prisma__creatorsClient<creators>, Prisma__creatorsClient<creatorsGetPayload<T>>> : CheckSelect<T, Prisma__creatorsClient<creators | null >, Prisma__creatorsClient<creatorsGetPayload<T> | null >>

    /**
     * Find the first Creators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorsFindFirstArgs} args - Arguments to find a Creators
     * @example
     * // Get one Creators
     * const creators = await prisma.creators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends creatorsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, creatorsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'creators'> extends True ? CheckSelect<T, Prisma__creatorsClient<creators>, Prisma__creatorsClient<creatorsGetPayload<T>>> : CheckSelect<T, Prisma__creatorsClient<creators | null >, Prisma__creatorsClient<creatorsGetPayload<T> | null >>

    /**
     * Find zero or more Creators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creators
     * const creators = await prisma.creators.findMany()
     * 
     * // Get first 10 Creators
     * const creators = await prisma.creators.findMany({ take: 10 })
     * 
     * // Only select the `creator`
     * const creatorsWithCreatorOnly = await prisma.creators.findMany({ select: { creator: true } })
     * 
    **/
    findMany<T extends creatorsFindManyArgs>(
      args?: SelectSubset<T, creatorsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<creators>>, PrismaPromise<Array<creatorsGetPayload<T>>>>

    /**
     * Create a Creators.
     * @param {creatorsCreateArgs} args - Arguments to create a Creators.
     * @example
     * // Create one Creators
     * const Creators = await prisma.creators.create({
     *   data: {
     *     // ... data to create a Creators
     *   }
     * })
     * 
    **/
    create<T extends creatorsCreateArgs>(
      args: SelectSubset<T, creatorsCreateArgs>
    ): CheckSelect<T, Prisma__creatorsClient<creators>, Prisma__creatorsClient<creatorsGetPayload<T>>>

    /**
     * Create many Creators.
     *     @param {creatorsCreateManyArgs} args - Arguments to create many Creators.
     *     @example
     *     // Create many Creators
     *     const creators = await prisma.creators.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends creatorsCreateManyArgs>(
      args?: SelectSubset<T, creatorsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Creators.
     * @param {creatorsDeleteArgs} args - Arguments to delete one Creators.
     * @example
     * // Delete one Creators
     * const Creators = await prisma.creators.delete({
     *   where: {
     *     // ... filter to delete one Creators
     *   }
     * })
     * 
    **/
    delete<T extends creatorsDeleteArgs>(
      args: SelectSubset<T, creatorsDeleteArgs>
    ): CheckSelect<T, Prisma__creatorsClient<creators>, Prisma__creatorsClient<creatorsGetPayload<T>>>

    /**
     * Update one Creators.
     * @param {creatorsUpdateArgs} args - Arguments to update one Creators.
     * @example
     * // Update one Creators
     * const creators = await prisma.creators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends creatorsUpdateArgs>(
      args: SelectSubset<T, creatorsUpdateArgs>
    ): CheckSelect<T, Prisma__creatorsClient<creators>, Prisma__creatorsClient<creatorsGetPayload<T>>>

    /**
     * Delete zero or more Creators.
     * @param {creatorsDeleteManyArgs} args - Arguments to filter Creators to delete.
     * @example
     * // Delete a few Creators
     * const { count } = await prisma.creators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends creatorsDeleteManyArgs>(
      args?: SelectSubset<T, creatorsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creators
     * const creators = await prisma.creators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends creatorsUpdateManyArgs>(
      args: SelectSubset<T, creatorsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Creators.
     * @param {creatorsUpsertArgs} args - Arguments to update or create a Creators.
     * @example
     * // Update or create a Creators
     * const creators = await prisma.creators.upsert({
     *   create: {
     *     // ... data to create a Creators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creators we want to update
     *   }
     * })
    **/
    upsert<T extends creatorsUpsertArgs>(
      args: SelectSubset<T, creatorsUpsertArgs>
    ): CheckSelect<T, Prisma__creatorsClient<creators>, Prisma__creatorsClient<creatorsGetPayload<T>>>

    /**
     * Count the number of Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {creatorsCountArgs} args - Arguments to filter Creators to count.
     * @example
     * // Count the number of Creators
     * const count = await prisma.creators.count({
     *   where: {
     *     // ... the filter for the Creators we want to count
     *   }
     * })
    **/
    count<T extends creatorsCountArgs>(
      args?: Subset<T, creatorsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreatorsAggregateArgs>(args: Subset<T, CreatorsAggregateArgs>): PrismaPromise<GetCreatorsAggregateType<T>>

    /**
     * Group by Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorsGroupByArgs} args - Group by arguments.
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
      T extends CreatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatorsGroupByArgs['orderBy'] }
        : { orderBy?: CreatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CreatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for creators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__creatorsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    runs<T extends runsFindManyArgs = {}>(args?: Subset<T, runsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<runs>>, PrismaPromise<Array<runsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * creators findUnique
   */
  export type creatorsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
    /**
     * Throw an Error if a creators can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which creators to fetch.
     * 
    **/
    where: creatorsWhereUniqueInput
  }


  /**
   * creators findFirst
   */
  export type creatorsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
    /**
     * Throw an Error if a creators can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which creators to fetch.
     * 
    **/
    where?: creatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creators to fetch.
     * 
    **/
    orderBy?: Enumerable<creatorsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for creators.
     * 
    **/
    cursor?: creatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creators from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creators.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of creators.
     * 
    **/
    distinct?: Enumerable<CreatorsScalarFieldEnum>
  }


  /**
   * creators findMany
   */
  export type creatorsFindManyArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
    /**
     * Filter, which creators to fetch.
     * 
    **/
    where?: creatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of creators to fetch.
     * 
    **/
    orderBy?: Enumerable<creatorsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing creators.
     * 
    **/
    cursor?: creatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` creators from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` creators.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CreatorsScalarFieldEnum>
  }


  /**
   * creators create
   */
  export type creatorsCreateArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
    /**
     * The data needed to create a creators.
     * 
    **/
    data: XOR<creatorsCreateInput, creatorsUncheckedCreateInput>
  }


  /**
   * creators createMany
   */
  export type creatorsCreateManyArgs = {
    data: Enumerable<creatorsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * creators update
   */
  export type creatorsUpdateArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
    /**
     * The data needed to update a creators.
     * 
    **/
    data: XOR<creatorsUpdateInput, creatorsUncheckedUpdateInput>
    /**
     * Choose, which creators to update.
     * 
    **/
    where: creatorsWhereUniqueInput
  }


  /**
   * creators updateMany
   */
  export type creatorsUpdateManyArgs = {
    data: XOR<creatorsUpdateManyMutationInput, creatorsUncheckedUpdateManyInput>
    where?: creatorsWhereInput
  }


  /**
   * creators upsert
   */
  export type creatorsUpsertArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
    /**
     * The filter to search for the creators to update in case it exists.
     * 
    **/
    where: creatorsWhereUniqueInput
    /**
     * In case the creators found by the `where` argument doesn't exist, create a new creators with this data.
     * 
    **/
    create: XOR<creatorsCreateInput, creatorsUncheckedCreateInput>
    /**
     * In case the creators was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<creatorsUpdateInput, creatorsUncheckedUpdateInput>
  }


  /**
   * creators delete
   */
  export type creatorsDeleteArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
    /**
     * Filter which creators to delete.
     * 
    **/
    where: creatorsWhereUniqueInput
  }


  /**
   * creators deleteMany
   */
  export type creatorsDeleteManyArgs = {
    where?: creatorsWhereInput
  }


  /**
   * creators without action
   */
  export type creatorsArgs = {
    /**
     * Select specific fields to fetch from the creators
     * 
    **/
    select?: creatorsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: creatorsInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const RunsScalarFieldEnum: {
    rider: 'rider',
    rank: 'rank',
    faults: 'faults',
    time: 'time',
    trackName: 'trackName',
    ninjaPoints: 'ninjaPoints',
    ninjaLevel: 'ninjaLevel',
    length: 'length',
    faultSponginess: 'faultSponginess',
    rating: 'rating',
    creator: 'creator'
  };

  export type RunsScalarFieldEnum = (typeof RunsScalarFieldEnum)[keyof typeof RunsScalarFieldEnum]


  export const TracksScalarFieldEnum: {
    track_name: 'track_name',
    id: 'id',
    creator: 'creator',
    ninja_level: 'ninja_level',
    length: 'length',
    average_faults: 'average_faults',
    fault_sponginess: 'fault_sponginess'
  };

  export type TracksScalarFieldEnum = (typeof TracksScalarFieldEnum)[keyof typeof TracksScalarFieldEnum]


  export const RidersScalarFieldEnum: {
    rider: 'rider'
  };

  export type RidersScalarFieldEnum = (typeof RidersScalarFieldEnum)[keyof typeof RidersScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    email: 'email',
    id: 'id',
    create_date: 'create_date',
    country: 'country',
    state: 'state',
    gamertag: 'gamertag',
    aliases: 'aliases',
    username: 'username',
    highest_np_run: 'highest_np_run',
    runs: 'runs',
    total_ninja_points: 'total_ninja_points',
    highest_level_pass: 'highest_level_pass',
    rank: 'rank',
    bio: 'bio'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const CreatorsScalarFieldEnum: {
    creator: 'creator'
  };

  export type CreatorsScalarFieldEnum = (typeof CreatorsScalarFieldEnum)[keyof typeof CreatorsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type runsWhereInput = {
    AND?: Enumerable<runsWhereInput>
    OR?: Enumerable<runsWhereInput>
    NOT?: Enumerable<runsWhereInput>
    rider?: StringFilter | string
    rank?: IntNullableFilter | number | null
    faults?: IntFilter | number
    time?: StringFilter | string
    trackName?: StringFilter | string
    ninjaPoints?: DecimalNullableFilter | Decimal | number | string | null
    ninjaLevel?: DecimalFilter | Decimal | number | string
    length?: Enumruns_lengthFilter | runs_length
    faultSponginess?: Enumruns_fault_sponginessFilter | runs_fault_sponginess
    rating?: DecimalNullableFilter | Decimal | number | string | null
    creator?: StringFilter | string
    creators?: XOR<CreatorsRelationFilter, creatorsWhereInput>
    riders?: XOR<RidersRelationFilter, ridersWhereInput>
  }

  export type runsOrderByInput = {
    rider?: SortOrder
    rank?: SortOrder
    faults?: SortOrder
    time?: SortOrder
    trackName?: SortOrder
    ninjaPoints?: SortOrder
    ninjaLevel?: SortOrder
    length?: SortOrder
    faultSponginess?: SortOrder
    rating?: SortOrder
    creator?: SortOrder
  }

  export type runsWhereUniqueInput = {
    rider_trackName?: runsRiderTrackNameCompoundUniqueInput
  }

  export type runsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<runsScalarWhereWithAggregatesInput>
    OR?: Enumerable<runsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<runsScalarWhereWithAggregatesInput>
    rider?: StringWithAggregatesFilter | string
    rank?: IntNullableWithAggregatesFilter | number | null
    faults?: IntWithAggregatesFilter | number
    time?: StringWithAggregatesFilter | string
    trackName?: StringWithAggregatesFilter | string
    ninjaPoints?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    ninjaLevel?: DecimalWithAggregatesFilter | Decimal | number | string
    length?: Enumruns_lengthWithAggregatesFilter | runs_length
    faultSponginess?: Enumruns_fault_sponginessWithAggregatesFilter | runs_fault_sponginess
    rating?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
    creator?: StringWithAggregatesFilter | string
  }

  export type tracksWhereInput = {
    AND?: Enumerable<tracksWhereInput>
    OR?: Enumerable<tracksWhereInput>
    NOT?: Enumerable<tracksWhereInput>
    track_name?: StringFilter | string
    id?: IntFilter | number
    creator?: StringFilter | string
    ninja_level?: StringNullableFilter | string | null
    length?: Enumtracks_lengthNullableFilter | tracks_length | null
    average_faults?: IntNullableFilter | number | null
    fault_sponginess?: Enumtracks_fault_sponginessNullableFilter | tracks_fault_sponginess | null
  }

  export type tracksOrderByInput = {
    track_name?: SortOrder
    id?: SortOrder
    creator?: SortOrder
    ninja_level?: SortOrder
    length?: SortOrder
    average_faults?: SortOrder
    fault_sponginess?: SortOrder
  }

  export type tracksWhereUniqueInput = {
    id?: number
  }

  export type tracksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<tracksScalarWhereWithAggregatesInput>
    OR?: Enumerable<tracksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<tracksScalarWhereWithAggregatesInput>
    track_name?: StringWithAggregatesFilter | string
    id?: IntWithAggregatesFilter | number
    creator?: StringWithAggregatesFilter | string
    ninja_level?: StringNullableWithAggregatesFilter | string | null
    length?: Enumtracks_lengthNullableWithAggregatesFilter | tracks_length | null
    average_faults?: IntNullableWithAggregatesFilter | number | null
    fault_sponginess?: Enumtracks_fault_sponginessNullableWithAggregatesFilter | tracks_fault_sponginess | null
  }

  export type ridersWhereInput = {
    AND?: Enumerable<ridersWhereInput>
    OR?: Enumerable<ridersWhereInput>
    NOT?: Enumerable<ridersWhereInput>
    rider?: StringFilter | string
    runs?: RunsListRelationFilter
  }

  export type ridersOrderByInput = {
    rider?: SortOrder
  }

  export type ridersWhereUniqueInput = {
    rider?: string
  }

  export type ridersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ridersScalarWhereWithAggregatesInput>
    OR?: Enumerable<ridersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ridersScalarWhereWithAggregatesInput>
    rider?: StringWithAggregatesFilter | string
  }

  export type profilesWhereInput = {
    AND?: Enumerable<profilesWhereInput>
    OR?: Enumerable<profilesWhereInput>
    NOT?: Enumerable<profilesWhereInput>
    email?: StringFilter | string
    id?: StringFilter | string
    create_date?: DateTimeFilter | Date | string
    country?: StringNullableFilter | string | null
    state?: StringNullableFilter | string | null
    gamertag?: StringNullableFilter | string | null
    aliases?: StringNullableFilter | string | null
    username?: StringFilter | string
    highest_np_run?: IntNullableFilter | number | null
    runs?: IntNullableFilter | number | null
    total_ninja_points?: IntNullableFilter | number | null
    highest_level_pass?: IntNullableFilter | number | null
    rank?: IntNullableFilter | number | null
    bio?: StringNullableFilter | string | null
  }

  export type profilesOrderByInput = {
    email?: SortOrder
    id?: SortOrder
    create_date?: SortOrder
    country?: SortOrder
    state?: SortOrder
    gamertag?: SortOrder
    aliases?: SortOrder
    username?: SortOrder
    highest_np_run?: SortOrder
    runs?: SortOrder
    total_ninja_points?: SortOrder
    highest_level_pass?: SortOrder
    rank?: SortOrder
    bio?: SortOrder
  }

  export type profilesWhereUniqueInput = {
    id?: string
    username?: string
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<profilesScalarWhereWithAggregatesInput>
    OR?: Enumerable<profilesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<profilesScalarWhereWithAggregatesInput>
    email?: StringWithAggregatesFilter | string
    id?: StringWithAggregatesFilter | string
    create_date?: DateTimeWithAggregatesFilter | Date | string
    country?: StringNullableWithAggregatesFilter | string | null
    state?: StringNullableWithAggregatesFilter | string | null
    gamertag?: StringNullableWithAggregatesFilter | string | null
    aliases?: StringNullableWithAggregatesFilter | string | null
    username?: StringWithAggregatesFilter | string
    highest_np_run?: IntNullableWithAggregatesFilter | number | null
    runs?: IntNullableWithAggregatesFilter | number | null
    total_ninja_points?: IntNullableWithAggregatesFilter | number | null
    highest_level_pass?: IntNullableWithAggregatesFilter | number | null
    rank?: IntNullableWithAggregatesFilter | number | null
    bio?: StringNullableWithAggregatesFilter | string | null
  }

  export type creatorsWhereInput = {
    AND?: Enumerable<creatorsWhereInput>
    OR?: Enumerable<creatorsWhereInput>
    NOT?: Enumerable<creatorsWhereInput>
    creator?: StringFilter | string
    runs?: RunsListRelationFilter
  }

  export type creatorsOrderByInput = {
    creator?: SortOrder
  }

  export type creatorsWhereUniqueInput = {
    creator?: string
  }

  export type creatorsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<creatorsScalarWhereWithAggregatesInput>
    OR?: Enumerable<creatorsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<creatorsScalarWhereWithAggregatesInput>
    creator?: StringWithAggregatesFilter | string
  }

  export type runsCreateInput = {
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
    creators: creatorsCreateNestedOneWithoutRunsInput
    riders: ridersCreateNestedOneWithoutRunsInput
  }

  export type runsUncheckedCreateInput = {
    rider: string
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
    creator: string
  }

  export type runsUpdateInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    creators?: creatorsUpdateOneRequiredWithoutRunsInput
    riders?: ridersUpdateOneRequiredWithoutRunsInput
  }

  export type runsUncheckedUpdateInput = {
    rider?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type runsCreateManyInput = {
    rider: string
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
    creator: string
  }

  export type runsUpdateManyMutationInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type runsUncheckedUpdateManyInput = {
    rider?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type tracksCreateInput = {
    track_name: string
    creator: string
    ninja_level?: string | null
    length?: tracks_length | null
    average_faults?: number | null
    fault_sponginess?: tracks_fault_sponginess | null
  }

  export type tracksUncheckedCreateInput = {
    track_name: string
    id?: number
    creator: string
    ninja_level?: string | null
    length?: tracks_length | null
    average_faults?: number | null
    fault_sponginess?: tracks_fault_sponginess | null
  }

  export type tracksUpdateInput = {
    track_name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    ninja_level?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableEnumtracks_lengthFieldUpdateOperationsInput | tracks_length | null
    average_faults?: NullableIntFieldUpdateOperationsInput | number | null
    fault_sponginess?: NullableEnumtracks_fault_sponginessFieldUpdateOperationsInput | tracks_fault_sponginess | null
  }

  export type tracksUncheckedUpdateInput = {
    track_name?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    creator?: StringFieldUpdateOperationsInput | string
    ninja_level?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableEnumtracks_lengthFieldUpdateOperationsInput | tracks_length | null
    average_faults?: NullableIntFieldUpdateOperationsInput | number | null
    fault_sponginess?: NullableEnumtracks_fault_sponginessFieldUpdateOperationsInput | tracks_fault_sponginess | null
  }

  export type tracksCreateManyInput = {
    track_name: string
    id?: number
    creator: string
    ninja_level?: string | null
    length?: tracks_length | null
    average_faults?: number | null
    fault_sponginess?: tracks_fault_sponginess | null
  }

  export type tracksUpdateManyMutationInput = {
    track_name?: StringFieldUpdateOperationsInput | string
    creator?: StringFieldUpdateOperationsInput | string
    ninja_level?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableEnumtracks_lengthFieldUpdateOperationsInput | tracks_length | null
    average_faults?: NullableIntFieldUpdateOperationsInput | number | null
    fault_sponginess?: NullableEnumtracks_fault_sponginessFieldUpdateOperationsInput | tracks_fault_sponginess | null
  }

  export type tracksUncheckedUpdateManyInput = {
    track_name?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    creator?: StringFieldUpdateOperationsInput | string
    ninja_level?: NullableStringFieldUpdateOperationsInput | string | null
    length?: NullableEnumtracks_lengthFieldUpdateOperationsInput | tracks_length | null
    average_faults?: NullableIntFieldUpdateOperationsInput | number | null
    fault_sponginess?: NullableEnumtracks_fault_sponginessFieldUpdateOperationsInput | tracks_fault_sponginess | null
  }

  export type ridersCreateInput = {
    rider: string
    runs?: runsCreateNestedManyWithoutRidersInput
  }

  export type ridersUncheckedCreateInput = {
    rider: string
    runs?: runsUncheckedCreateNestedManyWithoutRidersInput
  }

  export type ridersUpdateInput = {
    rider?: StringFieldUpdateOperationsInput | string
    runs?: runsUpdateManyWithoutRidersInput
  }

  export type ridersUncheckedUpdateInput = {
    rider?: StringFieldUpdateOperationsInput | string
    runs?: runsUncheckedUpdateManyWithoutRidersInput
  }

  export type ridersCreateManyInput = {
    rider: string
  }

  export type ridersUpdateManyMutationInput = {
    rider?: StringFieldUpdateOperationsInput | string
  }

  export type ridersUncheckedUpdateManyInput = {
    rider?: StringFieldUpdateOperationsInput | string
  }

  export type profilesCreateInput = {
    email: string
    id: string
    create_date?: Date | string
    country?: string | null
    state?: string | null
    gamertag?: string | null
    aliases?: string | null
    username: string
    highest_np_run?: number | null
    runs?: number | null
    total_ninja_points?: number | null
    highest_level_pass?: number | null
    rank?: number | null
    bio?: string | null
  }

  export type profilesUncheckedCreateInput = {
    email: string
    id: string
    create_date?: Date | string
    country?: string | null
    state?: string | null
    gamertag?: string | null
    aliases?: string | null
    username: string
    highest_np_run?: number | null
    runs?: number | null
    total_ninja_points?: number | null
    highest_level_pass?: number | null
    rank?: number | null
    bio?: string | null
  }

  export type profilesUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    highest_np_run?: NullableIntFieldUpdateOperationsInput | number | null
    runs?: NullableIntFieldUpdateOperationsInput | number | null
    total_ninja_points?: NullableIntFieldUpdateOperationsInput | number | null
    highest_level_pass?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    highest_np_run?: NullableIntFieldUpdateOperationsInput | number | null
    runs?: NullableIntFieldUpdateOperationsInput | number | null
    total_ninja_points?: NullableIntFieldUpdateOperationsInput | number | null
    highest_level_pass?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesCreateManyInput = {
    email: string
    id: string
    create_date?: Date | string
    country?: string | null
    state?: string | null
    gamertag?: string | null
    aliases?: string | null
    username: string
    highest_np_run?: number | null
    runs?: number | null
    total_ninja_points?: number | null
    highest_level_pass?: number | null
    rank?: number | null
    bio?: string | null
  }

  export type profilesUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    highest_np_run?: NullableIntFieldUpdateOperationsInput | number | null
    runs?: NullableIntFieldUpdateOperationsInput | number | null
    total_ninja_points?: NullableIntFieldUpdateOperationsInput | number | null
    highest_level_pass?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    id?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    gamertag?: NullableStringFieldUpdateOperationsInput | string | null
    aliases?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    highest_np_run?: NullableIntFieldUpdateOperationsInput | number | null
    runs?: NullableIntFieldUpdateOperationsInput | number | null
    total_ninja_points?: NullableIntFieldUpdateOperationsInput | number | null
    highest_level_pass?: NullableIntFieldUpdateOperationsInput | number | null
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type creatorsCreateInput = {
    creator: string
    runs?: runsCreateNestedManyWithoutCreatorsInput
  }

  export type creatorsUncheckedCreateInput = {
    creator: string
    runs?: runsUncheckedCreateNestedManyWithoutCreatorsInput
  }

  export type creatorsUpdateInput = {
    creator?: StringFieldUpdateOperationsInput | string
    runs?: runsUpdateManyWithoutCreatorsInput
  }

  export type creatorsUncheckedUpdateInput = {
    creator?: StringFieldUpdateOperationsInput | string
    runs?: runsUncheckedUpdateManyWithoutCreatorsInput
  }

  export type creatorsCreateManyInput = {
    creator: string
  }

  export type creatorsUpdateManyMutationInput = {
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type creatorsUncheckedUpdateManyInput = {
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
  }

  export type DecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type Enumruns_lengthFilter = {
    equals?: runs_length
    in?: Enumerable<runs_length>
    notIn?: Enumerable<runs_length>
    not?: NestedEnumruns_lengthFilter | runs_length
  }

  export type Enumruns_fault_sponginessFilter = {
    equals?: runs_fault_sponginess
    in?: Enumerable<runs_fault_sponginess>
    notIn?: Enumerable<runs_fault_sponginess>
    not?: NestedEnumruns_fault_sponginessFilter | runs_fault_sponginess
  }

  export type CreatorsRelationFilter = {
    is?: creatorsWhereInput
    isNot?: creatorsWhereInput
  }

  export type RidersRelationFilter = {
    is?: ridersWhereInput
    isNot?: ridersWhereInput
  }

  export type runsRiderTrackNameCompoundUniqueInput = {
    rider: string
    trackName: string
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalNullableFilter
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalFilter
  }

  export type Enumruns_lengthWithAggregatesFilter = {
    equals?: runs_length
    in?: Enumerable<runs_length>
    notIn?: Enumerable<runs_length>
    not?: NestedEnumruns_lengthWithAggregatesFilter | runs_length
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumruns_lengthFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumruns_lengthFilter
    _max?: NestedEnumruns_lengthFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumruns_lengthFilter
  }

  export type Enumruns_fault_sponginessWithAggregatesFilter = {
    equals?: runs_fault_sponginess
    in?: Enumerable<runs_fault_sponginess>
    notIn?: Enumerable<runs_fault_sponginess>
    not?: NestedEnumruns_fault_sponginessWithAggregatesFilter | runs_fault_sponginess
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumruns_fault_sponginessFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumruns_fault_sponginessFilter
    _max?: NestedEnumruns_fault_sponginessFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumruns_fault_sponginessFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type Enumtracks_lengthNullableFilter = {
    equals?: tracks_length | null
    in?: Enumerable<tracks_length> | null
    notIn?: Enumerable<tracks_length> | null
    not?: NestedEnumtracks_lengthNullableFilter | tracks_length | null
  }

  export type Enumtracks_fault_sponginessNullableFilter = {
    equals?: tracks_fault_sponginess | null
    in?: Enumerable<tracks_fault_sponginess> | null
    notIn?: Enumerable<tracks_fault_sponginess> | null
    not?: NestedEnumtracks_fault_sponginessNullableFilter | tracks_fault_sponginess | null
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type Enumtracks_lengthNullableWithAggregatesFilter = {
    equals?: tracks_length | null
    in?: Enumerable<tracks_length> | null
    notIn?: Enumerable<tracks_length> | null
    not?: NestedEnumtracks_lengthNullableWithAggregatesFilter | tracks_length | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedEnumtracks_lengthNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumtracks_lengthNullableFilter
    _max?: NestedEnumtracks_lengthNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumtracks_lengthNullableFilter
  }

  export type Enumtracks_fault_sponginessNullableWithAggregatesFilter = {
    equals?: tracks_fault_sponginess | null
    in?: Enumerable<tracks_fault_sponginess> | null
    notIn?: Enumerable<tracks_fault_sponginess> | null
    not?: NestedEnumtracks_fault_sponginessNullableWithAggregatesFilter | tracks_fault_sponginess | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedEnumtracks_fault_sponginessNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumtracks_fault_sponginessNullableFilter
    _max?: NestedEnumtracks_fault_sponginessNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumtracks_fault_sponginessNullableFilter
  }

  export type RunsListRelationFilter = {
    every?: runsWhereInput
    some?: runsWhereInput
    none?: runsWhereInput
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type creatorsCreateNestedOneWithoutRunsInput = {
    create?: XOR<creatorsCreateWithoutRunsInput, creatorsUncheckedCreateWithoutRunsInput>
    connectOrCreate?: creatorsCreateOrConnectWithoutRunsInput
    connect?: creatorsWhereUniqueInput
  }

  export type ridersCreateNestedOneWithoutRunsInput = {
    create?: XOR<ridersCreateWithoutRunsInput, ridersUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ridersCreateOrConnectWithoutRunsInput
    connect?: ridersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string | null
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | number | string
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
  }

  export type Enumruns_lengthFieldUpdateOperationsInput = {
    set?: runs_length
  }

  export type Enumruns_fault_sponginessFieldUpdateOperationsInput = {
    set?: runs_fault_sponginess
  }

  export type creatorsUpdateOneRequiredWithoutRunsInput = {
    create?: XOR<creatorsCreateWithoutRunsInput, creatorsUncheckedCreateWithoutRunsInput>
    connectOrCreate?: creatorsCreateOrConnectWithoutRunsInput
    upsert?: creatorsUpsertWithoutRunsInput
    connect?: creatorsWhereUniqueInput
    update?: XOR<creatorsUpdateWithoutRunsInput, creatorsUncheckedUpdateWithoutRunsInput>
  }

  export type ridersUpdateOneRequiredWithoutRunsInput = {
    create?: XOR<ridersCreateWithoutRunsInput, ridersUncheckedCreateWithoutRunsInput>
    connectOrCreate?: ridersCreateOrConnectWithoutRunsInput
    upsert?: ridersUpsertWithoutRunsInput
    connect?: ridersWhereUniqueInput
    update?: XOR<ridersUpdateWithoutRunsInput, ridersUncheckedUpdateWithoutRunsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumtracks_lengthFieldUpdateOperationsInput = {
    set?: tracks_length | null
  }

  export type NullableEnumtracks_fault_sponginessFieldUpdateOperationsInput = {
    set?: tracks_fault_sponginess | null
  }

  export type runsCreateNestedManyWithoutRidersInput = {
    create?: XOR<Enumerable<runsCreateWithoutRidersInput>, Enumerable<runsUncheckedCreateWithoutRidersInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutRidersInput>
    createMany?: runsCreateManyRidersInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
  }

  export type runsUncheckedCreateNestedManyWithoutRidersInput = {
    create?: XOR<Enumerable<runsCreateWithoutRidersInput>, Enumerable<runsUncheckedCreateWithoutRidersInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutRidersInput>
    createMany?: runsCreateManyRidersInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
  }

  export type runsUpdateManyWithoutRidersInput = {
    create?: XOR<Enumerable<runsCreateWithoutRidersInput>, Enumerable<runsUncheckedCreateWithoutRidersInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutRidersInput>
    upsert?: Enumerable<runsUpsertWithWhereUniqueWithoutRidersInput>
    createMany?: runsCreateManyRidersInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
    set?: Enumerable<runsWhereUniqueInput>
    disconnect?: Enumerable<runsWhereUniqueInput>
    delete?: Enumerable<runsWhereUniqueInput>
    update?: Enumerable<runsUpdateWithWhereUniqueWithoutRidersInput>
    updateMany?: Enumerable<runsUpdateManyWithWhereWithoutRidersInput>
    deleteMany?: Enumerable<runsScalarWhereInput>
  }

  export type runsUncheckedUpdateManyWithoutRidersInput = {
    create?: XOR<Enumerable<runsCreateWithoutRidersInput>, Enumerable<runsUncheckedCreateWithoutRidersInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutRidersInput>
    upsert?: Enumerable<runsUpsertWithWhereUniqueWithoutRidersInput>
    createMany?: runsCreateManyRidersInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
    set?: Enumerable<runsWhereUniqueInput>
    disconnect?: Enumerable<runsWhereUniqueInput>
    delete?: Enumerable<runsWhereUniqueInput>
    update?: Enumerable<runsUpdateWithWhereUniqueWithoutRidersInput>
    updateMany?: Enumerable<runsUpdateManyWithWhereWithoutRidersInput>
    deleteMany?: Enumerable<runsScalarWhereInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type runsCreateNestedManyWithoutCreatorsInput = {
    create?: XOR<Enumerable<runsCreateWithoutCreatorsInput>, Enumerable<runsUncheckedCreateWithoutCreatorsInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutCreatorsInput>
    createMany?: runsCreateManyCreatorsInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
  }

  export type runsUncheckedCreateNestedManyWithoutCreatorsInput = {
    create?: XOR<Enumerable<runsCreateWithoutCreatorsInput>, Enumerable<runsUncheckedCreateWithoutCreatorsInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutCreatorsInput>
    createMany?: runsCreateManyCreatorsInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
  }

  export type runsUpdateManyWithoutCreatorsInput = {
    create?: XOR<Enumerable<runsCreateWithoutCreatorsInput>, Enumerable<runsUncheckedCreateWithoutCreatorsInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutCreatorsInput>
    upsert?: Enumerable<runsUpsertWithWhereUniqueWithoutCreatorsInput>
    createMany?: runsCreateManyCreatorsInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
    set?: Enumerable<runsWhereUniqueInput>
    disconnect?: Enumerable<runsWhereUniqueInput>
    delete?: Enumerable<runsWhereUniqueInput>
    update?: Enumerable<runsUpdateWithWhereUniqueWithoutCreatorsInput>
    updateMany?: Enumerable<runsUpdateManyWithWhereWithoutCreatorsInput>
    deleteMany?: Enumerable<runsScalarWhereInput>
  }

  export type runsUncheckedUpdateManyWithoutCreatorsInput = {
    create?: XOR<Enumerable<runsCreateWithoutCreatorsInput>, Enumerable<runsUncheckedCreateWithoutCreatorsInput>>
    connectOrCreate?: Enumerable<runsCreateOrConnectWithoutCreatorsInput>
    upsert?: Enumerable<runsUpsertWithWhereUniqueWithoutCreatorsInput>
    createMany?: runsCreateManyCreatorsInputEnvelope
    connect?: Enumerable<runsWhereUniqueInput>
    set?: Enumerable<runsWhereUniqueInput>
    disconnect?: Enumerable<runsWhereUniqueInput>
    delete?: Enumerable<runsWhereUniqueInput>
    update?: Enumerable<runsUpdateWithWhereUniqueWithoutCreatorsInput>
    updateMany?: Enumerable<runsUpdateManyWithWhereWithoutCreatorsInput>
    deleteMany?: Enumerable<runsScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalFilter | Decimal | number | string
  }

  export type NestedEnumruns_lengthFilter = {
    equals?: runs_length
    in?: Enumerable<runs_length>
    notIn?: Enumerable<runs_length>
    not?: NestedEnumruns_lengthFilter | runs_length
  }

  export type NestedEnumruns_fault_sponginessFilter = {
    equals?: runs_fault_sponginess
    in?: Enumerable<runs_fault_sponginess>
    notIn?: Enumerable<runs_fault_sponginess>
    not?: NestedEnumruns_fault_sponginessFilter | runs_fault_sponginess
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalNullableFilter
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | number | string
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | number | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalFilter
  }

  export type NestedEnumruns_lengthWithAggregatesFilter = {
    equals?: runs_length
    in?: Enumerable<runs_length>
    notIn?: Enumerable<runs_length>
    not?: NestedEnumruns_lengthWithAggregatesFilter | runs_length
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumruns_lengthFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumruns_lengthFilter
    _max?: NestedEnumruns_lengthFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumruns_lengthFilter
  }

  export type NestedEnumruns_fault_sponginessWithAggregatesFilter = {
    equals?: runs_fault_sponginess
    in?: Enumerable<runs_fault_sponginess>
    notIn?: Enumerable<runs_fault_sponginess>
    not?: NestedEnumruns_fault_sponginessWithAggregatesFilter | runs_fault_sponginess
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumruns_fault_sponginessFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumruns_fault_sponginessFilter
    _max?: NestedEnumruns_fault_sponginessFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumruns_fault_sponginessFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumtracks_lengthNullableFilter = {
    equals?: tracks_length | null
    in?: Enumerable<tracks_length> | null
    notIn?: Enumerable<tracks_length> | null
    not?: NestedEnumtracks_lengthNullableFilter | tracks_length | null
  }

  export type NestedEnumtracks_fault_sponginessNullableFilter = {
    equals?: tracks_fault_sponginess | null
    in?: Enumerable<tracks_fault_sponginess> | null
    notIn?: Enumerable<tracks_fault_sponginess> | null
    not?: NestedEnumtracks_fault_sponginessNullableFilter | tracks_fault_sponginess | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedEnumtracks_lengthNullableWithAggregatesFilter = {
    equals?: tracks_length | null
    in?: Enumerable<tracks_length> | null
    notIn?: Enumerable<tracks_length> | null
    not?: NestedEnumtracks_lengthNullableWithAggregatesFilter | tracks_length | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedEnumtracks_lengthNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumtracks_lengthNullableFilter
    _max?: NestedEnumtracks_lengthNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumtracks_lengthNullableFilter
  }

  export type NestedEnumtracks_fault_sponginessNullableWithAggregatesFilter = {
    equals?: tracks_fault_sponginess | null
    in?: Enumerable<tracks_fault_sponginess> | null
    notIn?: Enumerable<tracks_fault_sponginess> | null
    not?: NestedEnumtracks_fault_sponginessNullableWithAggregatesFilter | tracks_fault_sponginess | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedEnumtracks_fault_sponginessNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumtracks_fault_sponginessNullableFilter
    _max?: NestedEnumtracks_fault_sponginessNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumtracks_fault_sponginessNullableFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type creatorsCreateWithoutRunsInput = {
    creator: string
  }

  export type creatorsUncheckedCreateWithoutRunsInput = {
    creator: string
  }

  export type creatorsCreateOrConnectWithoutRunsInput = {
    where: creatorsWhereUniqueInput
    create: XOR<creatorsCreateWithoutRunsInput, creatorsUncheckedCreateWithoutRunsInput>
  }

  export type ridersCreateWithoutRunsInput = {
    rider: string
  }

  export type ridersUncheckedCreateWithoutRunsInput = {
    rider: string
  }

  export type ridersCreateOrConnectWithoutRunsInput = {
    where: ridersWhereUniqueInput
    create: XOR<ridersCreateWithoutRunsInput, ridersUncheckedCreateWithoutRunsInput>
  }

  export type creatorsUpsertWithoutRunsInput = {
    update: XOR<creatorsUpdateWithoutRunsInput, creatorsUncheckedUpdateWithoutRunsInput>
    create: XOR<creatorsCreateWithoutRunsInput, creatorsUncheckedCreateWithoutRunsInput>
  }

  export type creatorsUpdateWithoutRunsInput = {
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type creatorsUncheckedUpdateWithoutRunsInput = {
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type ridersUpsertWithoutRunsInput = {
    update: XOR<ridersUpdateWithoutRunsInput, ridersUncheckedUpdateWithoutRunsInput>
    create: XOR<ridersCreateWithoutRunsInput, ridersUncheckedCreateWithoutRunsInput>
  }

  export type ridersUpdateWithoutRunsInput = {
    rider?: StringFieldUpdateOperationsInput | string
  }

  export type ridersUncheckedUpdateWithoutRunsInput = {
    rider?: StringFieldUpdateOperationsInput | string
  }

  export type runsCreateWithoutRidersInput = {
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
    creators: creatorsCreateNestedOneWithoutRunsInput
  }

  export type runsUncheckedCreateWithoutRidersInput = {
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
    creator: string
  }

  export type runsCreateOrConnectWithoutRidersInput = {
    where: runsWhereUniqueInput
    create: XOR<runsCreateWithoutRidersInput, runsUncheckedCreateWithoutRidersInput>
  }

  export type runsCreateManyRidersInputEnvelope = {
    data: Enumerable<runsCreateManyRidersInput>
    skipDuplicates?: boolean
  }

  export type runsUpsertWithWhereUniqueWithoutRidersInput = {
    where: runsWhereUniqueInput
    update: XOR<runsUpdateWithoutRidersInput, runsUncheckedUpdateWithoutRidersInput>
    create: XOR<runsCreateWithoutRidersInput, runsUncheckedCreateWithoutRidersInput>
  }

  export type runsUpdateWithWhereUniqueWithoutRidersInput = {
    where: runsWhereUniqueInput
    data: XOR<runsUpdateWithoutRidersInput, runsUncheckedUpdateWithoutRidersInput>
  }

  export type runsUpdateManyWithWhereWithoutRidersInput = {
    where: runsScalarWhereInput
    data: XOR<runsUpdateManyMutationInput, runsUncheckedUpdateManyWithoutRunsInput>
  }

  export type runsScalarWhereInput = {
    AND?: Enumerable<runsScalarWhereInput>
    OR?: Enumerable<runsScalarWhereInput>
    NOT?: Enumerable<runsScalarWhereInput>
    rider?: StringFilter | string
    rank?: IntNullableFilter | number | null
    faults?: IntFilter | number
    time?: StringFilter | string
    trackName?: StringFilter | string
    ninjaPoints?: DecimalNullableFilter | Decimal | number | string | null
    ninjaLevel?: DecimalFilter | Decimal | number | string
    length?: Enumruns_lengthFilter | runs_length
    faultSponginess?: Enumruns_fault_sponginessFilter | runs_fault_sponginess
    rating?: DecimalNullableFilter | Decimal | number | string | null
    creator?: StringFilter | string
  }

  export type runsCreateWithoutCreatorsInput = {
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
    riders: ridersCreateNestedOneWithoutRunsInput
  }

  export type runsUncheckedCreateWithoutCreatorsInput = {
    rider: string
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
  }

  export type runsCreateOrConnectWithoutCreatorsInput = {
    where: runsWhereUniqueInput
    create: XOR<runsCreateWithoutCreatorsInput, runsUncheckedCreateWithoutCreatorsInput>
  }

  export type runsCreateManyCreatorsInputEnvelope = {
    data: Enumerable<runsCreateManyCreatorsInput>
    skipDuplicates?: boolean
  }

  export type runsUpsertWithWhereUniqueWithoutCreatorsInput = {
    where: runsWhereUniqueInput
    update: XOR<runsUpdateWithoutCreatorsInput, runsUncheckedUpdateWithoutCreatorsInput>
    create: XOR<runsCreateWithoutCreatorsInput, runsUncheckedCreateWithoutCreatorsInput>
  }

  export type runsUpdateWithWhereUniqueWithoutCreatorsInput = {
    where: runsWhereUniqueInput
    data: XOR<runsUpdateWithoutCreatorsInput, runsUncheckedUpdateWithoutCreatorsInput>
  }

  export type runsUpdateManyWithWhereWithoutCreatorsInput = {
    where: runsScalarWhereInput
    data: XOR<runsUpdateManyMutationInput, runsUncheckedUpdateManyWithoutRunsInput>
  }

  export type runsCreateManyRidersInput = {
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
    creator: string
  }

  export type runsUpdateWithoutRidersInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    creators?: creatorsUpdateOneRequiredWithoutRunsInput
  }

  export type runsUncheckedUpdateWithoutRidersInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type runsUncheckedUpdateManyWithoutRunsInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    creator?: StringFieldUpdateOperationsInput | string
  }

  export type runsCreateManyCreatorsInput = {
    rider: string
    rank?: number | null
    faults: number
    time: string
    trackName: string
    ninjaPoints?: Decimal | number | string | null
    ninjaLevel: Decimal | number | string
    length: runs_length
    faultSponginess: runs_fault_sponginess
    rating?: Decimal | number | string | null
  }

  export type runsUpdateWithoutCreatorsInput = {
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    riders?: ridersUpdateOneRequiredWithoutRunsInput
  }

  export type runsUncheckedUpdateWithoutCreatorsInput = {
    rider?: StringFieldUpdateOperationsInput | string
    rank?: NullableIntFieldUpdateOperationsInput | number | null
    faults?: IntFieldUpdateOperationsInput | number
    time?: StringFieldUpdateOperationsInput | string
    trackName?: StringFieldUpdateOperationsInput | string
    ninjaPoints?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
    ninjaLevel?: DecimalFieldUpdateOperationsInput | Decimal | number | string
    length?: Enumruns_lengthFieldUpdateOperationsInput | runs_length
    faultSponginess?: Enumruns_fault_sponginessFieldUpdateOperationsInput | runs_fault_sponginess
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
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
  export const dmmf: runtime.DMMF.Document;
}