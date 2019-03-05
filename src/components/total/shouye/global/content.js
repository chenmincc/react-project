import React, { Component } from 'react';

const content = class Content extends Component {
  render() {
    return (
      <>
        <div className="deals-content-header">
          <span className="head_bg">
            <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt='' />
          </span>
          <span>今日团购，每天10点上新</span>
        </div>
        <ul className='touch-activity-detail clear'>
          <li>
            <a href='/'>
              <div className="product-info clear">
                <div className="product-img fl">
                  <img className="product-label haitaoy-label lazy-load" src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" alt='' />
                    <img className="lazy-load deal-img" src="http://mp6.jmstatic.com/product/001/308/1308285_std/1308285_1000_1000.jpg?v=1540885690&amp;imageView2/2/w/264/q/90"  alt='' />
                </div>
                <div className='fl product-desc'>
                  <div className="product-name">
                    贝德玛深层舒妍卸妆水500ml，卸妆+护肤一起搞定！
                  </div>
                  <div className="price-info">
                    <span className="exceed-hidden activity-jumei-price">
                      <span className="price">￥<span>89.9</span></span>
                      <span className="old">￥228</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href='/'>
              <div className="product-info clear">
                <div className="product-img fl">
                  <img className="product-label haitaoy-label lazy-load" src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" alt='' />
                    <img className="lazy-load deal-img" src="http://mp5.jmstatic.com/product/003/908/3908320_std/3908320_1000_1000.jpg?v=1541067872&imageView2/2/w/264/q/90"  alt='' />
                </div>
                <div className='fl product-desc'>
                  <div className="product-name">
                  【官方授权】AHC透明质酸神仙水水乳2件套盒，帮你重拾自信！
                  </div>
                  <div className="price-info">
                    <span className="exceed-hidden activity-jumei-price">
                      <span className="price">￥<span>145</span></span>
                      <span className="old">￥376</span>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </>
          )
        }
      }

      export default content;
