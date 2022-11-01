import io from 'socket.io-client';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';
import { createClient } from 'feathers-chat';

const connection = socketio(io('http://localhost:3030'));
const client = createClient(connection);

client.configure(authentication() as any);

export { client }
