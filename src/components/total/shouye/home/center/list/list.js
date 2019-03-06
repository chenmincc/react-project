import React, { Component } from 'react';
import axios from 'axios'
const list = class Center extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }

  }


  componentDidMount () {
    axios.get('/json/index.json').then(response => {
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
    // console.log(this.state.list)
    return (
      <>
        <div className='onlineWrap'>
          {
            this.state.list.map((item, index) => {
              return (
                <a href='/' className='productItem' key={index}>
                  <div className='dealItem itemEach'>
                    <div className="productImg">
                      <img src={item.imgUrl} lazy="loaded" alt='' />
                    </div>
                    <div className="productDetail">
                      <div className="productTitle">

                        {item.name}

                      </div>
                      <div className="promotionWrap"></div>
                      <div className="priceWrap">
                        <div className="priceList">
                          <span className="jumeiPrice">¥<span>{item.jumei_price}</span></span>
                          <span className="delPrice">¥{item.market_price}</span>
                        </div>
                        <div className="buyNum">{item.product_desc}</div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })
          }
        </div>
      </>
    )
  }
}

export default list;
