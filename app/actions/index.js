export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: new Date().valueOf(),
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
})
export const refreshTodos = (todos) => ({
  type: 'REFRESH_TODOS',
    todos
})
