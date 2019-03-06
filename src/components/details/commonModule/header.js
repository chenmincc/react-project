/**
 *  2019.3.4 - Ensol - write in
 *  Move out
 */

import React from 'react';

// 引入less文件
import "@/components/details/Less/header.less";
// import "@/components/details/Less/reset.less";

// 头部结构开始
class Header extends React.Component {
  render () {
    return (
      <>
        <header id="headerBox">
          <div className="outerBox">
            <div className="goback">
              <span className="iconfont icon-left jtLeft"></span>
            </div>
            <div className="logoMid">
                logoMid
            </div>
            <div className="atMore">
              <span className="iconfont icon-fangzi header-rightTb"></span>
            </div>
          </div>
        </header>
      </>
    )
  }
}

export default Header;
