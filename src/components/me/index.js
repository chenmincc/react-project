import React,{Component} from 'react';
import './me.less';
import { NavLink} from 'react-router-dom';
class Me extends Component {
  render () {
    return (
      <div className="jq-me">
        <header className="head-wrap">
          <div className="head-left">
            <i className="iconfont icon-left"></i>
          </div>
          <div className="head-title">我的聚美</div>
          <div className="head-right">
            <i className="iconfont icon-fangzi"></i>
          </div>
        </header>
        <div className="user-unlogin">
          <div className="noportrait"></div>
          <div className="operation">
            <NavLink className="signup" to="/register">注册</NavLink>
            <div className="separator"></div>
            <NavLink className="login" to="/login">登录</NavLink>
          </div>
        </div>
        <div className="order block">
          <div className="block-title">
            <i className="iconfont icon-tubiaolunkuo-"></i>
              我的订单
            <a href="/m/order/list" className="block-title-nav">
                <span>查看我的全部订单</span>
                <i className="iconfont icon-youjiantou-copy"></i>
            </a>
          </div>
          <div className="block-content">
            <a className="block-item" href="/m/order/list?status=1">
              <i className="iconfont icon-qianbao"></i>
              <span>待付款</span>
            </a>
            <a className="block-item" href="/m/order/list?status=2">
              <i className="iconfont icon-daishouhuo"></i>
              <span>待收货</span>
            </a>
            <a className="block-item" href="/m/order/list?status=3">
              <i className="iconfont icon-daipingjia"></i>
              <span>待评价</span>
            </a>
            <a className="block-item" href="/m/RMA/list">
              <i className="iconfont icon-tuikuan"></i>
              <span>退货/退款</span>
            </a>
          </div>
        </div>
        <div className="fund block">
          <div className="block-title">
            <i className="iconfont icon-icon-test"></i>
              我的资产
          </div>
          <div className="block-content">
            <a className="block-item" href="/h/promocard/list">
              <div className="value"></div>
              <span>现金券</span>
            </a>
            <a className="block-item" href="/h/red_envelope/list">
              <div className="value"></div>
              <span>红包</span>
            </a>
            <a className="block-item" href="/m/account/balance">
              <div className="value"></div>
              <span>聚美余额</span>
            </a>
            <a className="block-item" href="/m/giftcard/list">
              <div className="value"></div>
              <span>礼品卡</span>
            </a>
          </div>
        </div>
        <div className="block list">
          <a className="list-item" href="/m/RMA/service">
            <i className="iconfont icon-shouhouguanli"></i>
            <span>售后服务</span>
            <i className="iconfont icon-youjiantou-copy arrow-right"></i>
          </a>
          <a className="list-item" href="/m/feedback/show_add">
            <i className="iconfont icon-yijianfankui"></i>
            <span>意见反馈</span>
            <i className="iconfont icon-youjiantou-copy"></i>
          </a>
          <a className="list-item" href="/h/address/index">
            <i className="iconfont icon-daishouhuo"></i>
            <span>收货地址</span>
            <i className="iconfont icon-youjiantou-copy"></i>
          </a>
          <a className="list-item logout" href="https://passport.jumei.com/i/mobile/logout?redirect=http%3A%2F%2Fi.jumei.com%2Fm%2Faccount%2Fmy">
            <i className="iconfont icon-tuichu"></i>
            <span>退出登录</span>
            <i className="iconfont icon-youjiantou-copy"></i>
          </a>
          <a className="list-item" href="tel: 400-123-8888">
            <i className="iconfont icon-dianhua"></i>
            <span>400-123-8888</span>
            <i className="iconfont icon-youjiantou-copy"></i>
          </a>
        </div>
        <div className="hint">
            客服热线400-123-8888 (8:00-22:00)<br />拨打前请记录您的UID  0
        </div>
      </div>
    )
  }
}
export default Me;
