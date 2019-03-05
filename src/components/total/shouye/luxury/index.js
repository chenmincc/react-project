import React, { Component } from 'react';
import '@/components/total/shouye/luxury/index.less'
import '@/components/total/shouye/muandbaby/index.less'

const luxury = class Luxury extends Component {
  render () {
    return (
      <>
        <section className='container' id='slider'>
          <ul id='ui-slider-boxs' className='ui-slider-boxs slider'>
            <div className='slide-wrapper clear' style={{width: 1242+'px', transition: 400+"ms", position: "relative", left: 0+"px"}}>
              <li className="slider-item" style={{width: 414+"px", float: "left"}}>
                <a href="/" className="banner_img">
                  <img src="http://mp5.jmstatic.com/mobile/card_material/item_562_2048_838-ipad2048_1551695298.jpeg?imageView2/2/w/640/q/90" alt="" />
                </a>
              </li>
            </div>
          </ul>
        </section>
        <section className="list-items">
          <h2 className="items-title">
            <span className="head_bg">
              <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt='' />
            </span>
            <span>今日特惠</span>
          </h2>
          <div className="metra-lists" style={{height: 207+"px"}}>
            <a className="metra-list change-schame" style={{top:0+"rem",left:0+"rem", width:20+'rem', height:10+'rem'}} href="/">
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_1654_2048_1024-ipad2048_1551680933.jpeg?imageView2/2/w/640/q/90" alt="" />
            </a>
          </div>
        </section>

        <section className="list-items">
          <h2 className="items-title">
            <span className="head_bg">
              <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt='' />
            </span>
            <span>今日热销品牌</span>
          </h2>
          <div className="metra-lists" style={{height: 414+"px"}}>
            <a className="metra-list change-schame" style={{top:0+"rem", left:0+"rem", width:20+"rem", height:10+"rem"}} href="/">
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_2048_1024-ipad2048_5c7cff91213df.jpg?t=1551695761&amp;imageView2/2/w/640/q/90" alt="" />
            </a>
            <a className="metra-list change-schame" style={{top:10+"rem", left:0+"rem", width:10+"rem", height:10+"rem"}} href="/">
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5c7cff9848014.jpg?t=1551695768&amp;imageView2/2/w/640/q/90" alt="" />
            </a>
            <a className="metra-list change-schame" style={{top:10+"rem", left:10+"rem", width:10+"rem", height:10+"rem"}} href="/">
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5c7d01d2a7a90.jpg?t=1551696338&amp;imageView2/2/w/640/q/90" alt="" />
            </a>
          </div>
        </section>
      </>
    )
  }
}

export default luxury;
