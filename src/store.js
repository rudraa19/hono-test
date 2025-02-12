export let todos = globalThis.todos || [];
globalThis.todos = todos;

export const addTodo = (todo) => {
  todos.push(todo);
  globalThis.todos = todos;
};

export const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id != id);
  globalThis.todos = todos;
};

export let sockets = globalThis.sockets || {};
globalThis.sockets = sockets;

export const addSocket = (socket, id) => {
  sockets[id] = socket;
  globalThis.sockets = sockets;
};

export const getSocket = (id) => {
  return sockets[id];
};

export const removeSocket = (id) => {
  delete sockets[id];
  globalThis.sockets = sockets;
};
