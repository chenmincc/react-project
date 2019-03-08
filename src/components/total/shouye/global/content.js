import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const content = class Content extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }

  }

  componentDidMount () {
    axios.get('/json/global.json').then(response => {
      let res = response.data;
      // console.log(res)
      this.setState({
        list: res
      })
    }).catch(error => {
      console.log(error)
    })
  }

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
          {
             this.state.list.map((item, index) => {
                return (
                  <li>
                    <Link to={'/detail/'+item['item-id']} key={index}>
                      <div className="product-info clear">
                        <div className="product-img fl">
                          <img className="product-label haitaoy-label lazy-load" src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" alt='' />
                            <img className="lazy-load deal-img" src={item.imgUrl}  alt='' />
                        </div>
                        <div className='fl product-desc'>
                          <div className="product-name">
                              {item.name}
                          </div>
                          <div className="price-info">
                            <span className="exceed-hidden activity-jumei-price">
                              <span className="price">￥<span>{item.price}</span></span>
                              <span className="old">￥{item.oldPrice}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
             })
          }


          {/* <li>
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
          </li> */}
        </ul>
      </>
          )
        }
      }

      export default content;
