import { ADD_TODO, REMOVE_TODO, CLEAR_TODO } from "../actionTypes";

const initState = {
  todoList: [],
  doneList: [],
};

const todoReducers = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TODO:
      const { id, content } = action.payload;
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: id,
            content: content,
          },
        ],
      };
    case REMOVE_TODO:
      const newlist = state.todoList.filter((elem) => elem.id !== action.id);
      const Donelist = state.todoList.filter((elem) => elem.id === action.id)
      return {
        ...state,
        todoList: newlist,
        doneList: [
          ...state.doneList, 
          {
            id: Donelist[0].id,
            content: Donelist[0].content
          }
        ],
      };
    case CLEAR_TODO:
      return {
        ...state,
        todoList: [],
        doneList: []
      };
    default:
      return state;
  }
};

export default todoReducers;
