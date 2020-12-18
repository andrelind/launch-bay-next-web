import { gql } from 'apollo-server-express';

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type TimestampResponse {
    success: Boolean
    timestamp: Int
  }

  type Response {
    success: Boolean
  }

  type Blueprint {
    uid: ID!
    faction: String
    nick: String
    name: String
    ship: String
    upgrades: Upgrade
  }

  extend type Query {
    blueprints: [Blueprint]
    removedBlueprints: [ID]
  }

  input BlueprintInput {
    uid: ID!
    faction: String
    nick: String
    name: String
    ship: String
    upgrades: UpgradeInput
  }

  extend type Mutation {
    blueprint(blueprint: BlueprintInput): Response
    removeBlueprint(uid: ID): TimestampResponse
  }
  type Collection {
    expansions: [CollectionItem]
    ships: [CollectionItem]
    pilots: [CollectionItem]
    upgrades: [CollectionItem]
    timestamp: Int
  }

  type CollectionItem {
    id: String
    count: Int
  }

  extend type Query {
    collection: Collection
  }

  input CollectionItemInput {
    id: String
    count: Int
  }

  extend type Mutation {
    collection(
      expansions: [CollectionItemInput]
      ships: [CollectionItemInput]
      pilots: [CollectionItemInput]
      upgrades: [CollectionItemInput]
    ): TimestampResponse
  }
  type Squadron {
    uid: ID!
    name: String
    faction: String
    format: String
    version: String
    description: String
    cost: Int
    favourite: Boolean
    createdDatestamp: Float
    wins: Int
    losses: Int
    tags: [String]
    pilots: [Pilot]
  }

  type Pilot {
    uid: ID!
    name: String
    ship: String
    cost: Int
    upgrades: Upgrade
  }

  type Upgrade {
    astromech: [String]
    cannon: [String]
    cargo: [String]
    command: [String]
    configuration: [String]
    crew: [String]
    device: [String]
    forcepower: [String]
    gunner: [String]
    hardpoint: [String]
    illicit: [String]
    missile: [String]
    modification: [String]
    sensor: [String]
    tacticalrelay: [String]
    talent: [String]
    team: [String]
    tech: [String]
    title: [String]
    torpedo: [String]
    turret: [String]
  }

  extend type Query {
    squadron(uid: ID!): Squadron
    squadrons: [Squadron]
    removed: [ID]
  }

  input SquadronInput {
    uid: ID!
    name: String
    faction: String
    format: String
    version: String
    description: String
    cost: Int
    favourite: Boolean
    createdDatestamp: Float
    wins: Int
    losses: Int
    tags: [String]
    pilots: [PilotInput]
  }

  input PilotInput {
    uid: ID!
    name: String
    ship: String
    cost: Int
    upgrades: UpgradeInput
  }

  input UpgradeInput {
    astromech: [String]
    cannon: [String]
    cargo: [String]
    command: [String]
    configuration: [String]
    crew: [String]
    device: [String]
    forcepower: [String]
    gunner: [String]
    hardpoint: [String]
    illicit: [String]
    missile: [String]
    modification: [String]
    sensor: [String]
    tacticalrelay: [String]
    talent: [String]
    team: [String]
    tech: [String]
    title: [String]
    torpedo: [String]
    turret: [String]
  }

  extend type Mutation {
    set(squadron: SquadronInput): Response
    remove(uid: ID): TimestampResponse
  }
  scalar JSON

  type Tournament {
    uid: ID!
    name: String
    date: Int
    format: String
    placement: Int
    numberOfPlayers: Int
    squadron: JSON
    games: [Game]
    version: String
  }

  type Game {
    uid: ID!
    gameType: String
    bye: Boolean
    win: Boolean
    round: Int
    score: Int
    notes: String
    opponent: Opponent
  }

  type Opponent {
    name: String
    score: Int
    squadron: JSON
  }

  extend type Query {
    tournaments: [Tournament]
    removedTournaments: [ID]
  }

  input TournamentInput {
    uid: ID!
    name: String
    date: Int
    format: String
    placement: Int
    numberOfPlayers: Int
    squadron: JSON
    games: [GameInput]
    version: String
  }

  input GameInput {
    uid: ID!
    gameType: String
    bye: Boolean
    win: Boolean
    round: Int
    score: Int
    notes: String
    opponent: OpponentInput
  }

  input OpponentInput {
    name: String
    score: Int
    squadron: JSON
  }

  extend type Mutation {
    setTournament(tournament: TournamentInput): Response
    removeTournament(uid: ID): TimestampResponse
  }

  type JWTResponse {
    id: String!
    name: String!
    provider: String!
    email: String
    jwt: String!
  }

  extend type Mutation {
    registerUser(
      name: String!
      id: String!
      email: String
      provider: String!
    ): JWTResponse
  }
`;
