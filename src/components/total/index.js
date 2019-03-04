import React from 'react';
import '@/style/footer.less';
class Footer extends React.Component {
  render () {
    return (
      <footer>
        <li>
          <i className="iconfont icon-fangzi"></i>
          <em>首页</em>
        </li>
        <li>
          <i className="iconfont icon-fangzi"></i>
          <em>拼团</em>
        </li>
        <li>
          <i className="iconfont icon-fangzi"></i>
          <em>购物车</em>
        </li>
        <li>
          <i className="iconfont icon-fangzi"></i>
          <em>我的</em>
        </li>
      </footer>
    )
  }
}
export default Footer;