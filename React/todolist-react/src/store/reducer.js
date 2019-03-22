import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_LIST } from './actionType';

const defaultState = {
  inputValue: '',
  list: [1, 2]
}

export default (state = defaultState, action) => {
  let list = state.list.slice();
  let inputValue = state.inputValue;
  let nextState;
  switch (action.type) {
    case ADD_TODO_ITEM:
      nextState = {
        inputValue,
        list: [...state.list, action.value]
      }
      break;
    case CHANGE_INPUT_VALUE:
      nextState = {
        ...state,
        inputValue: action.value
      }
      break;
    case DELETE_TODO_ITEM:
      list.splice(action.index, 1);
      nextState = {
        inputValue,
        list: list
      }
      break;
    case INIT_LIST: 
      nextState = {
        inputValue,
        list: action.list
      }
      break;
    default:
      break;
  }
  return nextState || state;
}