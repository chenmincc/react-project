import React from 'react';
import '@/style/cart.less';
import axios from 'axios';
import Footer from '@/components/total/index.js';
class Cart extends React.Component {
  render () {
    return (
      <div className="jq-cart">
        <div className="jq-header">
          <i className="iconfont icon-left jq-headerBack"></i>
          <span>购物车</span>
          <i className="iconfont icon-fangzi jq-headerHome"></i>
        </div>
        <div className="jq-cart-main">
          <div className="jq-cart-no-goods"> 
            <div className="jq-oops"></div> 
            <div className="jq-empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div> 
            <div className="jq-go-stroll">去逛逛</div> 
          </div>
          <div className="jq-cart-goods">
            <div className="jq-count-down"> 
              <div className="jq-clock-msg">商品数量有限，请尽快结算</div>  
            </div>
            <div className="jq-groups">
              <div className="jq-group">
                <div className="jq-group-header"> 
                  <span className="jq-check-box-checked">√</span> 
                  <div className="jq-group-title"> 聚美优品发货 </div>   
                </div>
                <ul className="jq-group-content">
                  <li>
                    <div className="item"> 
                      <span className="jq-check-box-checked">√</span> 
                      <div className="item-content"> 
                        <div className="img-title"> 
                          <div className="img-wrap"> 
                            <img src="https://p1.jmstatic.com/product/001/021/1021036_std/1021036_200_200.jpg" alt="珀莱雅海洋活能水漾套装" />  
                          </div> 
                          <div className="text-wrap"> 
                            <span className="title"> 珀莱雅海洋活能水漾套装 </span> 
                            <div className="sub-title-1"> 
                              <span>套</span> 
                              <span>×1</span> 
                            </div> 
                            <div className="price-edit"> 
                              <span className="price"> ¥199 </span>  
                              <span className="edit">编辑</span> 
                            </div>
                          </div>  
                        </div> 
                        <div className="discount-detail"> 
                          <div className="discount-item"> 
                            <span>满减</span> 
                            <div className="promo-rule"> 
                              <span>珀莱雅部分满199减100不封顶</span> 
                            </div> 
                          </div>
                          <div className="discount-item"> 
                            <span>满赠</span> 
                            <div className="promo-rule"> 
                              <span>珀莱雅满199送199</span> 
                            </div> 
                          </div> 
                          <div className="show-more"> 
                          </div> 
                        </div>  
                      </div> 
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="submit-bottom submit-bottom-padding"> 
            <div className="sub-info"> 
              <span className="jq-check-box-checked">√</span> 
              <span className="all-check-text">全选</span> 
              <div className="summary"> 
                <div> 
                  <span>合计</span> 
                  <span className="red">¥199</span> 
                </div>  
              </div> 
            </div> 
            <div className="submit-btn go-to-submit"> 
              去结算
              <span>(1)</span> 
            </div> 
          </div>
        </div>
        <Footer />
      </div>
    )
   
  }
}
export default Cart;
