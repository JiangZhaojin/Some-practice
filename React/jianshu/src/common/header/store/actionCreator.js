import axios from 'axios';
import { fromJS } from 'immutable';
import { 
  SEARCH_FOCUS, 
  SEARCH_BLUR,
  CHANGE_LIST,
  CHANGE_PAGE,
  MOUSE_HOVER
} from './actionType';

function getListAction(list, totalPage) {
  return {
    type: CHANGE_LIST,
    list,
    totalPage
  }
}

export function getFocusAction() {
  return {
    type: SEARCH_FOCUS
  }
}

export function getBlurAction() {
  return {
    type: SEARCH_BLUR
  }
}

export function getChangePageAction(page) {
  return {
    type: CHANGE_PAGE,
    page
  }
}

export function getMouseHoverAction(isHover) {
  return {
    type: MOUSE_HOVER,
    mouseIn: isHover
  }
}

export function getChangeListAction() {
  return (dispatch) => {
    axios.get('/api/search-list.json').then((res) => {
      if (res.data.success) {
        dispatch(getListAction(fromJS(res.data.data)));
      } else {
        console.log('getList failur !');
      }
    }).catch((err) => {
      console.log('getlist err');
    });
  }
}