import { fromJS } from 'immutable';
import * as TYPE from './actionType';

const defaultState = fromJS({
  topicList: [],
	articleList: [],
	recommendList: [],
	articlePage: 1
});

const updateHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList)
  });
}

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(fromJS(action.list)),
    articlePage: action.nexPage
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TYPE.GET_HOME_DATA:
      return updateHomeData(state, action);
    case TYPE.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    default:
      return state;
  }
}