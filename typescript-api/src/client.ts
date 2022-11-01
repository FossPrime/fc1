import { feathers } from '@feathersjs/feathers'
import type {
  MessagesData,
  MessagesResult,
  MessagesQuery,
} from './services/messages/messages.schema'

export type { MessagesData, MessagesResult, MessagesQuery }

import type {
  UsersData,
  UsersResult,
  UsersQuery,
} from './services/users/users.schema'

export type { UsersData, UsersResult, UsersQuery }

import type { Service, TransportConnection, Params } from '@feathersjs/feathers'

export interface ServiceTypes {
  'messages': Service<MessagesResult, MessagesData, Params<MessagesQuery>>
  'users': Service<UsersResult, UsersData, Params<UsersQuery>>
  // A mapping of client side services
}

export const createClient = <Configuration = any>(connection: TransportConnection<ServiceTypes>) => {
  const client = feathers<ServiceTypes, Configuration>()

  client.configure(connection)

  return client
}
