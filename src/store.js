export const todos = globalThis.todos || [];
globalThis.todos = todos;

export const addTodo = (todo) => {
  todos.push(todo);
  globalThis.todos = todos;
};

export const removeTodo = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
  globalThis.todos = todos;
};
