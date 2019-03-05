import React, { Component } from 'react';
import { HashRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Center from '@/components/total/shouye/home/center/center.js'
import Global from '@/components/total/shouye/global/index.js'
import Muandbaby from '@/components/total/shouye/muandbaby/index.js'
import Luxury from '@/components/total/shouye/luxury/index.js'
import Pop from '@/components/total/shouye/pop/index.js'



const navHeader = class HeaderNav extends Component {
  render() {
    return (
      <HashRouter>
      <>
        <div id="hearderNav1">
          <div id="navOuter" className="">
            <div id="navInner" className="headerNav">
              <p className="navTitle ntDeal">
                <NavLink to="/" exact activeClassName='navSelect  '>
                  <span>首页</span>
                  <span className="headerNavLine meiyanse"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/global" activeClassName='navSelect'>
                  <span>极速免税店</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/muandbaby" activeClassName='navSelect'>
                  <span>母婴</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/luxury" activeClassName='navSelect'>
                  <span>轻奢</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/pop" activeClassName='navSelect'>
                  <span>名品特卖</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        <Switch>
          <Route path='/global' component = {Global}></Route>
          <Route path='/muandbaby' component = {Muandbaby}></Route>
          <Route path='/luxury' component = {Luxury}></Route>
          <Route path='/pop' component = {Pop}></Route>
          <Route path='/' component = {Center} exact></Route>
          <Redirect to='/'></Redirect>
        </Switch>

        {/* <Center></Center>
        <Global></Global>
        <Muandbaby></Muandbaby>
        <Luxury></Luxury>
        <Pop></Pop> */}
      </>
      </HashRouter>
    )
  }
}

export default navHeader;
