/**
 * 2019.3.5 - Ensol - write in
 * Move out
 */

import React from 'react';
import {  NavLink } from 'react-router-dom';
import '@/components/details/Less/footer.less';
// import Particular from '@/components/details/Particular.js'


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.data1,
      imgName: this.props.img,
      data: this.props.data2,
      itemId: this.props.itemId,
      totalNum: ''
    }
  }

  // getValStor () {
  //   let ArrVal = [];
  //   var objVal = localStorage.setItem()
  // }

  addCart () {
    var i = this.state.itemId
		var bid = i;
    // alert(bid);
    var _this = this;
    var obj = [
      {
        "bid":bid,
        "num":1
      }
    ];
    var objStr = JSON.stringify(obj);
				if(localStorage.getItem("goods")){
					var storGoods = localStorage.getItem("goods");
					var storGoodsJson = JSON.parse(storGoods);

					var flag = false;
					for (var i = 0; i < storGoodsJson.length; i++) {
						if(storGoodsJson[i].bid === bid){
							storGoodsJson[i].num++;
							flag = true;
							break;
						}
					}
					if(!flag){
						var goodObj = {"bid":bid,"num":1}
						storGoodsJson.push(goodObj);

					}

					var storGoodsStr = JSON.stringify(storGoodsJson);
					localStorage.setItem("goods",storGoodsStr);

				}else{
					localStorage.setItem("goods",objStr);
				}
				_this.computeNum();
  }

  computeNum(){
    var _this = this;

    if(localStorage.getItem("goods")){//有商品信息
      var storGoodsStr = localStorage.getItem("goods");
      var storGoddsJson = JSON.parse(storGoodsStr);
      var num = 0;
      for (var i = 0; i < storGoddsJson.length; i++) {
        num += Number(storGoddsJson[i].num);
      }
      _this.setState({
        totalNum: num
      })

    }
  }
  render () {
    return (
      <div className="footer_box">
        <div className="gwc_left">
          <div className="boxFlex">
            <i className="iconfont icon-gouwu" id="shopping-cart"></i>
            <span className="cart-num">{this.state.totalNum}</span>
            <NavLink to="/cart" className="textCart">购物车</NavLink>
          </div>
        </div>
        <div className="gm_right">
          <span  className="jr_gwc" onClick={this.addCart.bind(this)}>加入购物车</span>
          <a href="@" className="lj_gm">立即购买</a>
        </div>
      </div>
    )
  }
}

export default Footer;

