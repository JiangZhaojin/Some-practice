import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import { DetailWraper, DetailTitle, DetailBody } from './style';

class Detail extends PureComponent {
  render () {
    return (
      <DetailWraper>
        <DetailTitle>{ this.props.title }</DetailTitle>
        <DetailBody 
          dangerouslySetInnerHTML={{__html: this.props.content }}
        />
      </DetailWraper>
    )
  }

  componentDidMount () {
    this.props.getArticleDetail(this.props.match.params.id);
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatch = (dispatch) => ({
  getArticleDetail (id) {
    dispatch(actionCreator.getArticleAction(id))
  }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));