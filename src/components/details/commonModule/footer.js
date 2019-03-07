/**
 * 2019.3.5 - Ensol - write in
 * Move out
 */

import React from 'react';
import {  NavLink } from 'react-router-dom';
import '@/components/details/Less/footer.less';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer_box">
        <div className="gwc_left">
          <div className="boxFlex">
            <i className="iconfont icon-gouwu" id="shopping-cart"></i>
            <span className="textCart">购物车</span>
          </div>
        </div>
        <div className="gm_right">
          {/* <Link to="/cart"> */}
            <NavLink to="/cart" className="jr_gwc">加入购物车</NavLink >
          {/* </Link> */}
          <NavLink to="/cart" className="lj_gm">立即购买</NavLink >
        </div>
      </div>
    )
  }
}

export default Footer;

