import { combineReducers } from 'redux';
import { todoReducer } from '../containers/todo/state/todo.reducer';

const reducers = combineReducers({
  todoReducer
})

export default reducers