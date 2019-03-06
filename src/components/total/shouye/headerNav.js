import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import ReactDOM from 'react-dom';




const navHeader = class HeaderNav extends Component {
  render() {
    return (
      <>
        <div id="hearderNav1">
          <div id="navOuter" className="">
            <div id="navInner" className="headerNav">
              <p className="navTitle ntDeal">
                <NavLink to="/home/center/today" exact activeClassName='navSelect  '>
                  <span>首页</span>
                  <span className="headerNavLine meiyanse"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/home/global" activeClassName='navSelect'>
                  <span>极速免税店</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/home/muandbaby" activeClassName='navSelect'>
                  <span>母婴</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/home/luxury" activeClassName='navSelect'>
                  <span>轻奢</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
              <p className="navTitle ntDeal">
                <NavLink to="/home/pop" activeClassName='navSelect'>
                  <span>名品特卖</span>
                  <span className="headerNavLine"></span>
                </NavLink>
              </p>
            </div>
          </div>
        </div>

        {/* <Center></Center>
        <Global></Global>
        <Muandbaby></Muandbaby>
        <Luxury></Luxury>
        <Pop></Pop> */}
      </>
    )
  }
}

export default navHeader;
