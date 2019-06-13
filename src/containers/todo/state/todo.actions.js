import * as types from './todo.types';

export const addTodo = todo => ({
  type: types.ADD_TODO,
  todo
})

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id
})

export const completeAllTodos = () => ({
  type: types.COMPLETE_ALL_TODOS
})

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id
})

export const setFilter = filterName => ({
  type: types.SET_FILTER,
  filterName
})