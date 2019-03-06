import React, { Component } from 'react';
// import axios from 'axios'

const list = class Center extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }

  }

  // componentDidMount () {
  //   axios.get('/api/index/ajaxDealactList?card_id=4057&client_v=1&page=1&platform=wap&type=formal&page_key=').then(res => {
  //     let data = res.data;
  //     console.log(data)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }

  render() {
    return (
      <>
        <div className='onlineWrap'>
          <a href='/' className='productItem'>
            <div className='dealItem itemEach'>
              <div className="productImg">
                <img src="http://mp5.jmstatic.com/product/001/461/1461696_std/1461696_dx_1154_400.jpg?_t=1517364513&amp;imageView2/2/w/800/q/90" lazy="loaded" alt='' />
              </div>
              <div className="productDetail">
                <div className="productTitle">

                  日本•花王拉拉裤XL44片(4包装)，适合12-22kg宝宝。

						    </div>
                <div className="promotionWrap"></div>
                <div className="priceWrap">
                  <div className="priceList">
                    <span className="jumeiPrice">¥<span>339</span></span>
                    <span className="delPrice">¥680</span>
                  </div>
                  <div className="buyNum">3664条评论</div>
                </div>
              </div>
            </div>
          </a>
          <a href='/' className='productItem'>
            <div className="jmstoreItem itemEach">
              <img src="http://mp5.jmstatic.com//jmstore/image/000/007/7261_std/5c7b83d5c5a4f_2048_710.jpg?1551665585&imageView2/2/w/800/q/90" lazy="loaded" alt='' />
            </div>
          </a>
          <a href='/' className='productItem'>
            <div className='dealItem itemEach'>
              <div className="productImg">
                <img src="http://mp6.jmstatic.com/product/004/290/4290116_std/4290116_dx_1154_400.jpg?_t=1526005343&imageView2/2/w/800/q/90" lazy="loaded" alt='' />
              </div>
              <div className="productDetail">
                <div className="productTitle">

							  【日本版】安耐晒防晒套装防晒60ml+BB霜7.5mL

						    </div>
                <div className="promotionWrap"></div>
                <div className="priceWrap">
                  <div className="priceList">
                    <span className="jumeiPrice">¥<span>219</span></span>
                    <span className="delPrice">¥248</span>
                  </div>
                  <div className="buyNum">368条评论</div>
                </div>
              </div>
            </div>
          </a>
          <a href='/' className='productItem'>
            <div className="jmstoreItem itemEach">
              <img src="http://mp5.jmstatic.com//jmstore/image/000/007/7220_std/5c78dce9af2b3_2048_710.jpg?1551424760&imageView2/2/w/800/q/90" lazy="loaded" alt='' />
            </div>
          </a>
          <a href='/' className='productItem'>
            <div className="jmstoreItem itemEach">
              <img src="http://mp5.jmstatic.com//jmstore/image/000/000/733_std/5c78fc047310c_2048_710.jpg?1551496430&amp;imageView2/2/w/800/q/90" lazy="loaded" alt='' />
            </div>
          </a>
          <a href='/' className='productItem'>
            <div className="jmstoreItem itemEach">
              <img src="http://mp6.jmstatic.com//jmstore/image/000/005/5561_std/5c779810c4e6d_2048_710.jpg?1551431172&imageView2/2/w/800/q/90" lazy="loaded" alt='' />
            </div>
          </a>
        </div>
      </>
    )
  }
}

export default list;
