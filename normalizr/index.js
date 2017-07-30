import { schema, normalize } from 'normalizr';

const assignedToSchema = new schema.Entity('assignedTo');

const todoSchema = new schema.Entity('todo', {
  assignedTo: assignedToSchema,
});

const todos = [
  {
    id: '0',
    name: 'create redux',
    completed: true,
    assignedTo: {
      id: '99',
      name: 'Dan Abramov',
    },
  },
  {
    id: '1',
    name: 'create mobx',
    completed: true,
    assignedTo: {
      id: '77',
      name: 'Michel Weststrate',
    },
  }
];

const normalizedTodos = normalize(todos, [ todoSchema ]);

console.log(JSON.stringify(normalizedTodos));
