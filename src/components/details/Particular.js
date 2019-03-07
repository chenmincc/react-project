import React from 'react';
import axios from 'axios';
import Footer from '@/components/details/commonModule/footer.js';
import '@/components/details/Less/Particular.less';
import '@/components/details/Less/header.less'

class Particular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      imgName: '',
      data: [],
      itemId: this.props.match.params.itemId
    }
  }

  componentDidMount() {
    axios.get('/api/product/ajaxStaticDetail?item_id='+this.state.itemId +'&type=global_deal')
      .then((res) => {
        console.log(res.data.data);
        console.log(this.state.itemId)
        this.setState({
          users: res.data.data,
          imgName: res.data.data.image_url_set.single_many[0][320]
        })
      })
      .catch((error) => {
        console.log(error);
        console.log(this.state.itemId)
        this.setState({
          isLoads: false,
          error: error
        })
      })  
      axios.get('/api/product/ajaxDynamicDetail?item_id='+this.state.itemId +'&type=global_deal')
      .then((res) => {
        console.log(res.data.data.result);
        this.setState({
          data: res.data.data.result
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: error
        })
      })
    }
    render () {
      let { short_name, name,  } = this.state.users;
      let { jumei_price, market_price, buyer_number_text }  = this.state.data;
      return (
        <div>
        <header id="headerBox">
          <div className="outerBox">
            <div className="goback">
              <span className="iconfont icon-left jtLeft"></span>
            </div>
            <div className="logoMid">
                { short_name }
            </div>
            <div className="atMore">
              <span className="iconfont icon-fangzi header-rightTb"></span>
            </div>
          </div>
        </header>
        {/* 图片盒子 */}
        <section className="ImgBox">
           {/* 图片盒子 */}
           <article className="neiBox">
              <img src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" className="logoJs" alt="网络连接失败" />
              <img src={ this.state.imgName}  alt="网络连接失败"/>
           </article>
         </section>
        {/* 商品售价及其他信息 */}
        <article className="priceBox">
          <div className="normalShow">
            <div className="price_info">
              <span className="cur_price">￥ { jumei_price } </span>
              <span className="cost_price">￥{ market_price }</span>
              <span className="detail_text">
              价格详情
              <i className="iconfont icon-biao query_icon"></i>
              </span>
              <strong>{ buyer_number_text }</strong>
            </div>
            <div className="downWrap">
              <div className="count_down">
                <span>还剩4天2:36:53</span>
              </div>
            </div>
          </div>
        </article>
        {/* 广告 */}
        <article className="desc_wrap">
          <div className="normal_desc">
            <span className="desc_iconv2">聚美自营</span>
            { name }
          </div>
        </article>
        <div className="additional-Box">
        {/* 促销 */}
        <article className="additional-info">
          <div className="promotion-wrap">
            <div className="promotion-content">
              <div className="promotion-type">促销</div>
              <div className="promotion-item">
                <p className="item-list-title">
                  <span className="item-list-icon">满赠</span>
                  <span className="item-list-text">[已赠完]部分产品满299赠SACRUM ALGAE 保湿水</span>
                </p>
                <div className="iconfont icon-youjiantou arrow-icon-down"></div>
              </div>
            </div>
          </div>
        </article>
        {/* 运费 */}
        <article className="additional-list">
          <div className="postage-wrap">
            <div className="postage-type">运费</div>
            <div className="postage-content">
              <span className="tip-word">本商品满299元或2件包邮（新疆部分区域除外）</span>
              <span className="iconfont icon-youjiantou arrow-icon-right"></span>
            </div>
          </div>
        </article>
        {/* 说明 */}
        <article className="introduction-wrap">
          <div className="introductions-content">
            <div className="introduction-type">说明</div>
            <div className="introduction-item">
              <p className="introduction-list-title">
                <span className="instruction-title-icon iconfont icon-gou"></span>
                <span className="instruction-title-text">自营保税仓发货</span>
              </p>
              <p className="introduction-list-title">
                <span className="instruction-title-icon iconfont icon-gou"></span>
                <span className="instruction-title-text">24小时内发货</span>
              </p>
              <p className="introduction-list-title">
                <span className="instruction-title-icon iconfont icon-gou"></span>
                <span className="instruction-title-text">7天拆封无条件退货</span>
              </p>
              <p className="introduction-list-title">
                <span className="instruction-title-icon iconfont icon-gou"></span>
                <span className="instruction-title-text">支持分期</span>
              </p>
            <div className="iconfont icon-youjiantou allSelect"></div>
            </div>
          </div>
        </article>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Particular;
