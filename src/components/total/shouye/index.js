import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import '@/components/total/shouye/index.less';
import '@/reset.less';
import HeaderNav from '@/components/total/shouye/headerNav.js'
// import '@/components/total/shouye/global/index.less';

const shouye = class Shouye extends Component {
  render () {
    return (
      <>
        <header>
            <a id="pageTop" className="indexSearch" href="/">
              <img src="//f0.jmstatic.com/btstatic/h5/common/search_btn.png"  alt='' />
              <span>搜索商品 分类 功效</span>
            </a>
            <span id="searchAction">
              <img src="//f0.jmstatic.com/btstatic/h5/index/search_list2.png" className="search" alt='' />
            </span>
        </header>
        <HeaderNav></HeaderNav>
      </>
    )
  }
}

export default shouye;
