import * as types from './todo.types';

const data = JSON.parse(localStorage.getItem('todo'));
const initialState = data ? data : {
  list: [
    {
      id: Date.now(),
      name: 'Task 1',
      completed: false
    }
  ],
  filter: 'All'
}

export const todoReducer = (state = initialState, action) => {
  let newState;
  switch(action.type){
    case types.ADD_TODO:
      newState = { 
        ...state, 
        list: [ ...state.list, { id: Date.now(), name: action.todo, completed: false }] 
      }
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState
    case types.COMPLETE_TODO:
      newState = {
        ...state,
        list: state.list.map(todo => {
          if(todo.id === action.id){
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo
          }
        })
      }
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState
    case types.COMPLETE_ALL_TODOS:
      newState = {
        ...state,
        list: state.list.map(todo => ({
          ...todo,
          completed: !state.list.every(todo => todo.completed)
        }))
      }
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState
    case types.DELETE_TODO:
      newState = {
        ...state,
        list: state.list.filter(todo => todo.id !== action.id)
      }
      localStorage.setItem('todo', JSON.stringify(newState));
      return newState
    case types.SET_FILTER:
      if(action.filterName === 'All'){
        console.log(state);
        newState = {
          ...state,
          list: state.list.filter(todo => todo),
          filter: 'All'
        }
        return newState
      } else if (action.filterName === 'Active'){
        console.log(state);
        newState = {
          ...state,
          list: state.list.filter(todo => todo.completed === false),
          filter: 'Active'
        }
        return newState
      } else if (action.filterName === 'Completed'){
        console.log(state);
        newState = {
          ...state,
          list: state.list.filter(todo => todo.completed === true),
          filter: 'Completed'
        }
        return newState
      }
      return {
        ...state
      }
    default: 
      return { ...state }
  }
}