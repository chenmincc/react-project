import React from 'react';
import '@/style/footer.less';
import { NavLink } from 'react-router-dom';
class Footer extends React.Component {
  render () {
    return ( 
    // <HashRouter>
      <footer>
        <NavLink to="/home/center/today" activeClassName="active">
          <li> 
            <i className="iconfont icon-fangzi"></i>
            <em>首页</em>
          </li>
        </NavLink>
        <NavLink to="/pintuan" activeClassName="active">
          <li>
            <i className="iconfont icon-qun"></i>
            <em>拼团</em>
          </li>
        </NavLink>
        <NavLink to="/cart" activeClassName="active">
          <li>
            <i className="iconfont icon-gouwu"></i>
            <em>购物车</em> 
          </li>
        </NavLink>
        <NavLink to="/me" activeClassName="active">
          <li>
            <i className="iconfont icon-renshu"></i>
            <em>我的</em>
          </li>
        </NavLink>
      </footer>
      // </HashRouter>
    )
  }
}
export default Footer;