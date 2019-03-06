/**
 * 2019.3.5 - Ensol - write in
 * Move out
 */

import React from 'react';
import '@/components/details/Less/footer.less';
import '@/components/details/Less/reset.less';

class Footer extends React.Component {
  render () {
    return (
      <div className="footer_box">
        <div className="gwc_left">
          <div className="boxFlex">
            <span className="iconfont icon-gouwuche" id="shopping-cart"></span>
            <span className="textCart">购物车</span>
          </div>
        </div>
        <div className="gm_right">
          <a href="@" className="jr_gwc">加入购物车</a>
          <a href="@" className="lj_gm">立即购买</a>
        </div>
      </div>
    )
  }
}

export default Footer;

