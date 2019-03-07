import React from 'react';
import '@/components/register/index.less';
import NavLink from 'react-router-dom/NavLink';
import history from 'history';
import axios from 'axios'
// import {createBrowserHistory, createHashHistory, createMemoryHistory} from 'history'
const Login = class login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userName:'',
      password:''
    }
  }

  changeUserName(e) {
    let inputValue = e.target.value;
        this.setState({
          userName : inputValue
        })
  }
  changePassword(e) {
    let inputValue = e.target.value;
        this.setState({
          password : inputValue
        })
  }

  onSubmit(props){
    axios.post('http://localhost:3000/user/login',
    {
      userName: this.userName,
      password: this.password
    }).then(Response => {
      var res = Response.data;
      if(res.data === 0){
        console.log('aaaa')
      }
    }

    )
  }

  render() {
    return (
      <div className="warper">
        <section className="views">
          <a id="back" href="javascript:void(0);">
            <img src="https://f0.jmstatic.com/static_passport/dist/v1.0.28403/touch/login_series/images/NavButtonBack_new.png" className="return" alt="" />
          </a>
          <NavLink to="/login" className="theme">登录</NavLink>
          <a className="top_right" href="/i/mobile/register?redirect=http%3A%2F%2Fh5.jumei.com%2Fproduct%2Fdetail%3Fitem_id%3Dht190301p4290116t2%26type%3Dglobal_deal">注册</a>
        </section>
        <form id="login-dynamic-form">
          <div id="iphone_login">
            <div className="other-login-outer">
              <div className="other-login">
                <span className="other-title">使用手机登录</span>
              </div>
            </div>
            <div className="jm_row icon_phone">
              <div className="jm_col">
                <input type="text" className="register_input" name="username" id="dynamic_mobile" placeholder="请输入11位手机号" alertname="手机号"    onChange={ this.changeUserName.bind(this) }  />
              </div>

            </div>
            <div className="jm_row">
              <div className="jm_col">
                <input type="tel" className="register_input" name="password" placeholder="请输入短信验证码" id="dynamic_password" alertname="短信验证码"
                onChange={this.changePassword.bind(this) } />
              </div>
              <div className="jm_col jm_col_90px">
                <a className="register_yzm" href="javascript:;">验证</a>
              </div>
            </div>
            <div className="jm_row register_jumei_account">
              <a className="jm_col jm_left" id="use_jumei_account">使用聚美帐号登录</a>
              <div className="jm_col jm_right">30天内自动登录</div>
            </div>
          </div>
          <input type="submit" value="登录" className="register_button" id="ga_dynamic_login"
          onClick={this.onSubmit.bind(this)} />
        </form>
      </div>
    )
  }
};

export default Login