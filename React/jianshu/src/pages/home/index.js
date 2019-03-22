import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './component/topic';
import List from './component/list';
import Recommend from './component/recommend';
import Writer from './component/writer';
// import { actionCreator } from './store';
import {
  getHomeAction
} from './store/actionCreator';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style';

class Home extends PureComponent {
  render () {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4516/cd9298634ca88ca71fc12752acf47917967a5d31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
  componentDidMount () {
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData () {
      dispatch(getHomeAction());
    }
  }
}

export default connect(null, mapDispatch)(Home);