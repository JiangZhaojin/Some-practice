import { fromJS } from 'immutable';
import { GET_ARTICLE_DETAIL } from './actionType';

const defaultData = fromJS({
  title: '',
  content: ''
});

export default (state = defaultData, action) => {
  switch (action.type) {
    case GET_ARTICLE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
}