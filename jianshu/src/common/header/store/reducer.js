import { 
  SEARCH_FOCUS, 
  SEARCH_BLUR, 
  CHANGE_LIST,
  MOUSE_HOVER,
  CHANGE_PAGE
} from './actionType';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focus: false,
  list: [],
  page: 1,
  totalPage: 0,
  mouseIn: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      return state.set('focus', true);
    case SEARCH_BLUR:
      return state.set('focus', false);
    case CHANGE_LIST:
      return state.merge({
        list: action.list,
        totalPage: Math.ceil(action.list.size / 10)
      });
    case MOUSE_HOVER:
      return state.set('mouseIn', action.mouseIn)
    case CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state;
  }
}