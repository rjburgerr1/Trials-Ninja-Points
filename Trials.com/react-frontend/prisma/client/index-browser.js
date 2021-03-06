
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.26.0
 * Query Engine version: 9b816b3aa13cc270074f172f30d6eda8a8ce867d
 */
Prisma.prismaVersion = {
  client: "2.26.0",
  engine: "9b816b3aa13cc270074f172f30d6eda8a8ce867d"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.RunsScalarFieldEnum = makeEnum({
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
});

exports.Prisma.TracksScalarFieldEnum = makeEnum({
  track_name: 'track_name',
  id: 'id',
  creator: 'creator',
  ninja_level: 'ninja_level',
  length: 'length',
  average_faults: 'average_faults',
  fault_sponginess: 'fault_sponginess'
});

exports.Prisma.RidersScalarFieldEnum = makeEnum({
  rider: 'rider'
});

exports.Prisma.ProfilesScalarFieldEnum = makeEnum({
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
});

exports.Prisma.CreatorsScalarFieldEnum = makeEnum({
  creator: 'creator'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.runs_length = makeEnum({
  Short: 'Short',
  Medium: 'Medium',
  Long: 'Long'
});

exports.runs_fault_sponginess = makeEnum({
  Not_At_All: 'Not_At_All',
  Not_Very: 'Not_Very',
  Moderately: 'Moderately',
  Very: 'Very',
  Extremely: 'Extremely'
});

exports.tracks_length = makeEnum({
  short: 'short',
  medium: 'medium',
  long: 'long'
});

exports.tracks_fault_sponginess = makeEnum({
  not_at_all: 'not_at_all',
  not_very: 'not_very',
  moderately: 'moderately',
  very: 'very',
  extremely: 'extremely'
});

exports.Prisma.ModelName = makeEnum({
  runs: 'runs',
  tracks: 'tracks',
  riders: 'riders',
  profiles: 'profiles',
  creators: 'creators'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
