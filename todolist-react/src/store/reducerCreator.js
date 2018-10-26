import { INIT_LIST, ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM } from './actionType';
import axios from 'axios';

export function getAddTodoAction(value) {
  return {
    type: ADD_TODO_ITEM,
    value
  }
}

export function getChangeInputAction(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value
  }
}

export function getDeleteItemAction(index) {
  return {
    type: DELETE_TODO_ITEM,
    index
  }
}

export function getInitStateAction(list) {
  return {
    type: INIT_LIST,
    list
  }
}

export function getInitListAction() {
  return (dispatch) => {
    axios.get('http://localhost:8080/list.json').then(res => {
      console.log(res.data);
      if (res.data) {
        dispatch(getInitStateAction(res.data));
      }
    }).catch(err => {
      alert(err && err.message);
    })
  }
}