export let todos = globalThis.todos || [];
globalThis.todos = todos;

export const addTodo = (todo) => {
  todos.push(todo);
  globalThis.todos = todos;
  broadcast({
    event: "ADD",
    data: {
      id: todo.id
    }
  })
};

export const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id != id);
  globalThis.todos = todos;
  broadcast({
    event: "DEL",
    data: {
      id
    }
  })
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

export const broadcast = (message) => {
  for (const socket of Object.values(sockets)) {
    socket.send(JSON.stringify(message));
  }
};
