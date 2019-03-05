import React, { Component } from 'react';
import '@/components/total/shouye/pop/index.less'

const pop = class Pop extends Component {
  render() {
    return (
      <>
        <a href="/">
          <div className="item-list clearfix">
            <div className="pop_image">
              <img className="img-lazy main_image" src="http://mp5.jmstatic.com//jmstore/image/000/004/4313_std/5c7c7a3c49776_2048_1024.jpg?1551678868&amp;imageView2/2/w/640/q/90" alt="" />
                <div className="discount">
                  <p>29元2件 全场包邮</p>
                </div>
            </div>
            <div className="pop_information">
              <div className="right_logo">
                <img src="http://p0.jmstatic.com/brand/logo_180/13891.jpg" alt="" />
              </div>
              <div className="left_info">
                <p className="pop_title">纤美媛新品大促专场</p>
                <p className="timer" data-diff="291273">剩余<span>03天</span><span>08时</span></p>
              </div>
            </div>
          </div>
        </a>
      </>
          )
        }
      }

      export default pop;
