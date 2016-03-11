export const COMPLETE_TODO = 'COMPLETE_TODO';

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}

export default completeTodo;
