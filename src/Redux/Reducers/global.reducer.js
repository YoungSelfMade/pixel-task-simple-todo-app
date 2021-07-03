

import Constants from 'Constants';


let TODO_STORAGE = localStorage.getItem("TODO_STORAGE") === null
            ? [] : JSON.parse(localStorage.getItem("TODO_STORAGE"));


const initialState = {
  TODOS: TODO_STORAGE, 
};

export function globalStorage(state = initialState, action) {
  switch (action.type) { 

    case Constants.ADD_TODO:
      const { TODOS } = state; 
      TODOS.push(action.payload);
      
      return {
        ...state,
        TODOS
      }

    case Constants.EDIT_TODO:
      return {
        ...state,
        TODOS: action.payload
      }
    default:
      return state
  }
}