import { ADD_TODO, DELETE_TODO, CLEAR_TODO } from "./actionTypes";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: new Date.getTime().toString(),
    content,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const clearTodo = () => ({
  type: CLEAR_TODO,
});
