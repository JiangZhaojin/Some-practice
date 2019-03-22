import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { 
  getFocusAction, 
  getBlurAction,
  getChangeListAction,
  getMouseHoverAction,
  getChangePageAction
} from './store/actionCreator';

import {
  HeaderWraper,
  Nav,
  NavItem,
  Logo,
  NavSearch,
  SearchWrapper,
  SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
  Addition,
  Button
} from './style.js'

class Header extends Component {

  getListArea() {
    const { focus, list, mouseIn, page, totalPage, onMouseEnter, onMouseLeave, changePage } = this.props;
    const pageList = list.slice((page -1) * 10, page * 10);
    if (focus || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <SearchInfoTitle>
          热门搜索
            <SearchInfoSwitch onClick={() => changePage(page, totalPage)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList.map(item => (
              <SearchInfoItem key={item}>{item}</SearchInfoItem>
            ))}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const { focus, onInputFocus, onInputBlur } = this.props;
     return (
      <HeaderWraper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focus}
              timeout={200}
              classNames='slide'
            >
              <NavSearch 
                className={focus ? 'focused' : ''}
                onFocus={onInputFocus}
                onBlur={onInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focus ? 'focused iconfont zoom': 'iconfont zoom'}>
							&#xe614;
						</i>
            { this.getListArea() }
          </SearchWrapper>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className='writting'>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWraper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onInputFocus() {
      dispatch(getChangeListAction());
      dispatch(getFocusAction());
    },
    onInputBlur() {
      dispatch(getBlurAction());
    },
    onMouseEnter() {
      dispatch(getMouseHoverAction(true));
    },
    onMouseLeave() {
      dispatch(getMouseHoverAction(false));
    },
    changePage(page, totalPage) {
      if (page >= totalPage) {
        page = 1;
      } else {
        page ++;
      }
      dispatch(getChangePageAction(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);