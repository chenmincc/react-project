import React, { Component } from 'react';
import Content from '@/components/total/shouye/global/content.js';

const icon = class Icon extends Component {
  render() {
    return (
      <>
        <section id="deals-icon" className="deals-icon">
          <ul className="clear">
            <li>
              <a href="/">
                <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/interantion_shipping.png?imageView2/2/w/51/q/70" alt="" />
                <div className="deals-text">海外直供</div>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/genuine_guarantee.png?imageView2/2/w/51/q/70" alt="" />
                  <div className="deals-text">原装正品</div>
              </a>
            </li>
            <li>
              <a href="/product/page?label=global_delivery">
                <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/global_delivery.png?imageView2/2/w/51/q/70" alt="" />
                  <div className="deals-text">极速到货</div>
              </a>
            </li>
            <li>
              <a href="/">
                <img src="//mp5.jmstatic.com/mobile/other/detail_page_guarantee/return_guarantee_7.png?imageView2/2/w/51/q/70" alt="" />
                <div className="deals-text">轻松退货</div>
              </a>
            </li>
          </ul>
        </section>
        <Content></Content>
      </>
    )
  }
}

export default icon;
