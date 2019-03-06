import React from 'react';
import '@/components/register/index.less'
import NavLink from 'react-router-dom/NavLink';
const Register = class Register extends React.Component {
  render() {
    return (
      <div className="warper">
        <section className="views">
          <a id="back" href="@">
            <img src="https://f1.jmstatic.com/static_passport/dist/v1.0.135656/touch/login_series/images/NavButtonBack_new.png" alt="" className="return" />
          </a>
          <NavLink to="/Register" className="theme">注册</NavLink>
          <a className="top_right" href="@">登录</a>
        </section>
        <form action="">
          <div className="other-login">
            <span className="other-title">使用手机注册</span>
          </div>
          <div className="jm_row icon_phone">
            <div className="jm_col">
              <input type="text" className="register_input" name="mobile" placeholder="请输入11位手机号" alertname="请输入手机号码" id="account" />
            </div>
          </div>
          <div className="jm_row">
            <div className="jm_col">
              <input type="tel" className="register_input" placeholder="请输入短信验证码" />
            </div>
            <div className="jm_col jm_col_90px">
              <a className="register_yzm" href="@">验证</a>
            </div>
          </div>
            <div className="jm_row">
              <div className="jm_col">
                <input type="password" className="register_input" name="password" placeholder="6-16位登录密码" alertname="请设置密码" />
              </div>
            </div>
            <input type="submit" value="注册" className="register_button" id="tele_register" />
        </form>
        <div className="register_agreement jm_center">点击注册，表示同意
         <a href="http://i.jumei.com/m/account/protocol">《聚美优品用户协议》</a>
        </div>
      </div>
    )
  }
};

export default Register
