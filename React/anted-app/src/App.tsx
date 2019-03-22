import './typings/index.d.ts';

import React, { Component } from 'react';
import './App.css';
import './ant.css';

import Breadcrumb from './components/breadcrum';
import BackTop from './components/backtop';

class App extends Component {
  render() {
        return (
            <div className="App">
                <div className="left-column">
                    <div className="block">
                        <h6 className="block-title">面包屑</h6>
                        <div className="block-wrapper">
                            <Breadcrumb>
                                <Breadcrumb.Item href="/hello">加油哦</Breadcrumb.Item>
                                <Breadcrumb.Item href="/test">测试</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>

                    <div className="block">
                        <h6 className="block-title">返回顶部</h6>
                        <div className="block-wrapper">
                            <BackTop className="backtop" visible={true}></BackTop>
                        </div>
                    </div>
                </div>
            </div>
        );
  }
}

export default App;
