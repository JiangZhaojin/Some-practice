import * as TYPE from './actionType';
import axios from 'axios';

const changHomeData = (result) => ({
	type: TYPE.GET_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: TYPE.ADD_ARTICLE_LIST,
	list,
	nextPage
})

export function getHomeAction () {
  return (dispatch) => {
    axios('/api/home.json').then(res => {
      if (res.data && res.data.success) {
        dispatch(changHomeData(res.data.data));
      } else {
        console.log('get topic list failed');
      }
    }).catch(err => {
      console.log('get topic list failed');
    });
  }
}

export function getMoreAction (page) {
  return (dispatch) => {
		axios.get('/api/home-list.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}