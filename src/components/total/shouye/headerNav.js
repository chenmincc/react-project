import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import Center from '@/components/total/shouye/home/center/center.js'
import Global from '@/components/total/shouye/global/index.js'

const navHeader = class HeaderNav extends Component {
  render() {
    return (
      <>
        <div id="hearderNav1">
          <div id="navOuter" className="">
            <div id="navInner" className="headerNav">
              <p className="navTitle ntDeal">
                <a href="/" className='navSelect'>
                  <span>首页</span>
                  <span className="headerNavLine"></span>
                </a>
              </p>
              <p className="navTitle ntDeal">
                <a href="/">
                  <span>极速免税店</span>
                  <span className="headerNavLine"></span>
                </a>
              </p>
              <p className="navTitle ntDeal">
                <a href="/">
                  <span>母婴</span>
                  <span className="headerNavLine"></span>
                </a>
              </p>
              <p className="navTitle ntDeal">
                <a href="/">
                  <span>轻奢</span>
                  <span className="headerNavLine"></span>
                </a>
              </p>
              <p className="navTitle ntDeal">
                <a href="/">
                  <span>名品特卖</span>
                  <span className="headerNavLine"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* <Center></Center> */}
        <Global></Global>
      </>
    )
  }
}

export default navHeader;
