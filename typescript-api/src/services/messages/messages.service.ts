import type { Application } from '../../declarations'

import { MessagesService, messagesHooks } from './messages.class'

// A configure function that registers the service and its hooks via `app.configure`
export function messages(app: Application) {
  const options = {
    paginate: app.get('paginate'),
    Model: app.get('sqliteClient'),
    name: 'messages'
    // Service options will go here
  }

  // Register our service on the Feathers application
  app.use('messages', new MessagesService(options), {
    // A list of all methods this service exposes externally
    methods: ['find', 'get', 'create', 'update', 'patch', 'remove'],
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service('messages').hooks(messagesHooks)
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    messages: MessagesService
  }
}
