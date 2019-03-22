import { GET_ARTICLE_DETAIL } from './actionType';
import axios from 'axios';

function getArticleDetailAction({title, content}) {
  return {
    type: GET_ARTICLE_DETAIL,
    title,
    content
  }
}

export function getArticleAction (id) {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then(res => {
      dispatch(getArticleDetailAction(res.data.data));
    }).catch(err => {
      console.log('get detail err');
    });
  }
}