import 'antd/dist/antd.css';

import React from 'react';
import { connect } from 'react-redux';
import { getInitListAction, getAddTodoAction, getChangeInputAction, getDeleteItemAction } from './store/reducerCreator';
import TodoListUI from './app_ui';

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange (e) {
      dispatch(getChangeInputAction(e.target.value));
    },
    onAddTodoItem(value) {
      dispatch(getAddTodoAction(value));
    },
    onItemClick(index) {
      dispatch(getDeleteItemAction(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListUI);