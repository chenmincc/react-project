import React, { Component } from 'react';
import '@/components/total/shouye/luxury/index.less'
import '@/components/total/shouye/muandbaby/index.less'
import axios from 'axios'

const luxury = class Luxury extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popList: []
    }

  }

  componentDidMount () {
    axios.get('/api1/luxury/ajaxList?page=1&card_id=1837').then(response => {
      let res = response.data.item_list;
      // console.log(res)
      this.setState({
        popList: res
      })
    }).catch(error => {
      console.log(error)
    })
  }
  render () {
    return (
      <>
        <section className='container' id='slider'>
          <ul id='ui-slider-boxs' className='ui-slider-boxs slider'>
            <div className='slide-wrapper clear' style={{ transition: 400+"ms", position: "relative", left: 0+"px"}}>
              <li className="slider-item" >
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
          <div className="metra-lists" style={{height: 9+"rem"}}>
            <a className="metra-list change-schame" style={{top:0+"rem",left:0+"rem",  height:9+"rem"}} href="/">
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
<<<<<<< HEAD
            <a className="metra-list change-schame" style={{top:0+"rem", left:0+"rem", width:20+"rem", height:10+"rem"}} href="/">
=======
            <a className="metra-list change-schame" style={{top:0+"rem", left:0+"rem", width:'100%', height:10+"rem"}} href="/">
>>>>>>> min
              <img src="http://mp6.jmstatic.com/mobile/card_material/item_0_2048_1024-ipad2048_5c7e528eb0735.jpg?t=1551782542&imageView2/2/w/640/q/90" alt="" />
            </a>
            <a className="metra-list change-schame" style={{top:10+"rem", left:0+"rem", width:'50%', height:10+"rem"}} href="/">
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5c7cff9848014.jpg?t=1551695768&amp;imageView2/2/w/640/q/90" alt="" />
            </a>
            <a className="metra-list change-schame" style={{top:10+"rem", left:'50%',width:'50%', height:10+"rem"}} href="/">
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_0_1024_1024-ipad2048_5c7d01d2a7a90.jpg?t=1551696338&amp;imageView2/2/w/640/q/90" alt="" />
            </a>
          </div>
        </section>
        <section className="list-items">
          <h2 className="items-title">
            <span className="head_bg">
              <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt='' />
            </span>
            <span>精选活动</span>
          </h2>
            {
              this.state.popList.map((item, index) => {
                return (
                  <a href="/" key={index}>
                    <div className="item-list clearfix">
                      <div className="pop_image">
                        <img className="img-lazy main_image" src={item.image_url_set.main[320]} alt="" />
                          <div className="discount">
                            <p>{item.discount_string}</p>
                          </div>
                      </div>
                      <div className="pop_information">
                        <div className="right_logo">
                          <img src={item.image_url_set.brand[320]} alt="" />
                        </div>
                        <div className="left_info">
                          <p className="pop_title">{item.title}</p>
                          <p className="timer" data-diff="291273">剩余<span>03天</span><span>08时</span></p>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          )
        </section>
      </>
    )
  }
}

export default luxury;
