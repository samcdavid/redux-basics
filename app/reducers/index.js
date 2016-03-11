import addTodo, { ADD_TODO } from '../actions/add_todo.js';
import completeTodo, { COMPLETE_TODO } from '../actions/complete_todo.js';
import setVisibilityFilter, { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions/set_visibility_filter.js';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  return state;
}
