import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams } from '@feathersjs/knex'
import { resolveAll } from '@feathersjs/schema'
import { authenticate } from '@feathersjs/authentication'
import type { MessagesData, MessagesResult, MessagesQuery } from './messages.schema'
import { messagesResolvers } from './messages.resolver'

export const messagesHooks = {
  around: {
    all: [authenticate('jwt'), resolveAll(messagesResolvers)]
  },
  before: {},
  after: {},
  error: {}
}

export interface MessagesParams extends KnexAdapterParams<MessagesQuery> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class MessagesService extends KnexService<MessagesResult, MessagesData, MessagesParams> {}
