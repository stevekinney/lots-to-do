import {
  randBoolean,
  randCatchPhrase,
  randPriority,
  randStatus,
  randVerb,
} from '@ngneat/falso';
import { createServer, Factory, Model, RestSerializer } from 'miragejs';
import { capitalize } from '../lib/capitalize';

const ApplicationSerializer = RestSerializer.extend({});

export function makeServer({ environment = 'development' }) {
  return createServer({
    environment,

    serializers: {
      application: ApplicationSerializer.extend({
        root: false,
        embed: true,
      }),
    },

    factories: {
      task: Factory.extend({
        title: () =>
          capitalize(`${randVerb()} ${randCatchPhrase().toLowerCase()}`),
        priority: () => randPriority(),
        status: () => randStatus(),
        completed: () => randBoolean(),
      }),
    },

    models: {
      task: Model,
    },

    routes() {
      this.timing = 400;
      this.namespace = 'api';

      this.get('tasks', (schema, request) => {
        const limit = Number(request.queryParams.limit || 10000);
        const offset = Number(request.queryParams.offset || 0);
        return schema.tasks.all().slice(offset, limit);
      });
      this.post('tasks');
      this.get('tasks/:id');
      this.patch('tasks/:id');
      this.del('tasks/:id');
    },

    seeds(server) {
      server.createList('task', 10000);
    },
  });
}
