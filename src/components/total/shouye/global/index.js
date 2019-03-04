import React, { Component } from 'react';
import '@/components/total/shouye/global/index.less';
import Icon from '@/components/total/shouye/global/icon.js';

const global = class Global extends Component {
  render() {
    return (
      <>
        <section id="deals-header">
          <ul id="ui-slider-boxs" className="ui-slider-boxs slider">
            <div className="slide-wrapper clear" >
              <li className="slider-item">
                <a href="/" className="banner_img">
                  <img src="http://mp4.jmstatic.com/mobile/card_material/item_9780_2048_838-ipad2048_1551686043.jpeg@base@tag=imgScale&amp;w=640&amp;q=90" alt="" />
                </a>
              </li>
            </div>
            <div className="ui-slider-dots" ><b className="ui-dot-select"></b>
            </div>
          </ul>
        </section>
        <Icon></Icon>
      </>
    )
  }
}

export default global;
