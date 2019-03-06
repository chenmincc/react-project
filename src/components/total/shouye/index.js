import React, { Component } from 'react';
import '@/components/total/shouye/index.less';
import HeaderNav from '@/components/total/shouye/headerNav.js';
import { Route, Switch} from 'react-router-dom';
import Center from '@/components/total/shouye/home/center/center.js'
import Global from '@/components/total/shouye/global/index.js'
import Muandbaby from '@/components/total/shouye/muandbaby/index.js'
import Luxury from '@/components/total/shouye/luxury/index.js'
import Pop from '@/components/total/shouye/pop/index.js';
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
        <Switch>
          <Route path='/home/global' component = {Global}></Route>
          <Route path='/home/muandbaby' component = {Muandbaby}></Route>
          <Route path='/home/luxury' component = {Luxury}></Route>
          <Route path='/home/pop' component = {Pop}></Route>
          <Route path='/home/center' component = {Center}></Route>          
          <Route path='/' component = {Center} exact></Route>
          {/* <Redirect to='/'></Redirect> */}
        </Switch>
      </>
    )
  }
}

export default shouye;
