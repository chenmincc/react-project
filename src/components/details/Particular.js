import React from 'react';
import Header from '@/components/details/commonModule/header.js';
import Footer from '@/components/details/commonModule/footer.js';
import '@/components/details/Less/Particular.less';











class Particular extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {/* 图片盒子 */}
        <section className="ImgBox">
           {/* 图片盒子 */}
           <article className="neiBox">
              <img src="http://p0.jmstatic.com/banner/area/000/000/029.jpg" className="logoJs" alt="网络连接失败" />
              <img src="http://mp5.jmstatic.com/product/003/426/3426004_std/3426004_1000_1000.jpg?v=1490789863&imageView2/2/w/800/q/90"  alt="网络连接失败"/>
           </article>
         </section>
        {/* 商品售价及其他信息 */}
        <article className="priceBox">
          <div className="normalShow">
            <div className="price_info">
              <span className="cur_price">￥49.9</span>
              <span className="cost_price">￥59.9</span>
              <span className="detail_text">
              价格详情
              <i className="iconfont icon-biao query_icon"></i>
              </span>
              <strong>3341人已购买</strong>
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
            碧柔含水清爽保湿防晒乳液新版 50g，让你不怕晒！
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
        {/* 评论logo */}
        <Footer />
      </div>
    )
  }
}

export default Particular;
