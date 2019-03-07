import React, { Component } from 'react';
import '@/components/total/shouye/muandbaby/index.less'
import axios from 'axios'
const muandbaby = class Muandbaby extends Component {
  constructor (props) {
    super(props)
    this.state = {
      popList: []
    }

  }

  componentDidMount () {
    axios.get('/api1/muandbaby/ajaxList?page=1&card_id=7430').then(response => {
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

        <section className="list-items">
          <h2 className="items-title">
            <span className="head_bg">
              <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt='' />
            </span>
            <span>特惠价 仅限今日</span>
          </h2>
          <div className="metra-lists" >
            <a className="metra-list change-schame" href="/">
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_7710_2048_1024-ipad2048_1551435624.jpeg?imageView2/2/w/640/q/90" alt="" />
            </a>
          </div>
        </section>

        <section className="list-items">
          <h2 className="items-title">
            <span className="head_bg">
              <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt='' />
            </span>
            <span>全球热销品牌</span>
          </h2>
          <div className="metra-lists" style={{height: 207.5+"px"}} >
          {/*  eslint-disable-next-line */}
            <a className="metra-list change-schame"  href="/" style={{top:0+"rem",left:0+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1502086238.jpeg?imageView2/2/w/160/q/90" alt="" />
            </a>
            <a className="metra-list change-schame"  href="/" style={{top:0+"rem",left:5+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543173.jpeg?imageView2/2/w/160/q/90" alt="" />
            </a>
            <a className="metra-list change-schame" href="/" style={{top:0+"rem",left:10+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055580.jpeg?imageView2/2/w/160/q/90" alt="" />
            </a>
            <a className="metra-list change-schame"  href="/" style={{top:0+"rem",left:15+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1551235310.jpeg?imageView2/2/w/160/q/90" alt="" />
            </a>
            <a className="metra-list change-schame"  href="/" style={{top:5+"rem",left:0+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548056454.jpeg?imageView2/2/w/160/q/90" alt="" />
            </a>
            <a className="metra-list change-schame" href="/" style={{top:5+"rem",left:5+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498543566.jpeg?imageView2/2/w/160/q/90" alt="" />
            </a>
            <a className="metra-list change-schame"  href="/" style={{top:5+"rem",left:10+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp5.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1548055217.png?imageView2/2/w/160/q/90" alt="" />
            </a>
            <a className="metra-list change-schame" href="/" style={{top:5+"rem",left:15+"rem",width:5+"rem", height:5+"rem"}}>
              <img src="http://mp6.jmstatic.com/mobile/card_material/item_2386_512_512-ipad2048_1498559288.jpeg?imageView2/2/w/160/q/90" alt="" />
            </a>
          </div>
        </section>

        <section className="list-items">
          <h2 className="items-title">
            <span className="head_bg">
              <img src="//f0.jmstatic.com/btstatic/h5/common/icon_title.png" alt='' />
            </span>
            <span>疯抢专场 早上10点上新</span>
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

export default muandbaby
