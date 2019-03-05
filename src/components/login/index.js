import React from 'react';
import '@/components/register/index.less'
const rehister = class rehister extends React.Component {
  render() {
    return (
      <div className="warper">
        <section className="views">
          <a id="back" href="javascript:void(0);">
            <img src="https://f0.jmstatic.com/static_passport/dist/v1.0.28403/touch/login_series/images/NavButtonBack_new.png" className="return" alt="" />
          </a>
          <h1 className="theme">登录</h1>
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
                <input type="text" className="register_input" name="dynamic_mobile" id="dynamic_mobile" placeholder="请输入11位手机号" alertname="手机号" />
              </div>

            </div>
            <div className="jm_row">
              <div className="jm_col">
                <input type="tel" className="register_input" name="telephoneN" placeholder="请输入短信验证码" id="dynamic_password" alertname="短信验证码" />
              </div>
              <div className="jm_col jm_col_90px">
                <a className="register_yzm" href="javascript:;">验证</a>
              </div>
            </div>
            {/* <div className="jm_row " id="dynamic_verify_code" style="display: none;">
              <div className="jm_col">
                <input type="text" name="dynamic_hash_code" className="register_input" id="dynamic_hash_code" placeholder="请按右图输入" />
              </div>
              <div className="jm_col jm_col_90px">
                <img id="img_dynamic_hash_code" src="/i/account/hash_code?from=dynamic_login&amp;1551768450" className="check_code" alt="" />
              </div>
            </div> */}
            <div className="jm_row register_jumei_account">
              <a className="jm_col jm_left" id="use_jumei_account">使用聚美帐号登录</a>
              <div className="jm_col jm_right">30天内自动登录</div>
            </div>
          </div>
          <input type="submit" value="登录" className="register_button" id="ga_dynamic_login" />
        </form>
        {/* <!-- 普通登录 --> */}
      {/*  <form  method="post" action="/i/mobile/login?redirect=http%3A%2F%2Fh5.jumei.com%2Fproduct%2Fdetail%3Fitem_id%3Dht190301p4290116t2%26type%3Dglobal_deal" id="login" style="display: none" >
          <div className="other-login-outer">
            <div className="other-login">
              <span className="other-title">使用聚美帐号登录</span>
            </div>
          </div>
          <div className="jm_row icon_phone">
            <div className="jm_col">
              <input type="text" className="register_input" name="email" id="account" placeholder="已注册的手机号/邮箱／用户名" alertname="用户名" />
            </div>
          </div>
          <input type="password" className="register_input" name="password" placeholder="6-16位登陆密码" alertname="6-16位登陆密码" />
          <div id="aliyun_verify" className="nc-container"><div className="_nc">
            <div id="nc_1-stage-1" className="stage stage1" >
              <div className="slider">
                <div className="label no-anim">向右滑动验证</div>
                <div className="track">
                  <div className="bg-green"></div>
                </div>
                <div className="button">
                  <div className="icon nc-iconfont icon-slide-arrow" id="nc_1_n1t"></div>
                </div>
              </div>
            </div>
             <div id="nc_1-stage-2" className="stage stage2" style="display: none;">
              <div className="textbox">
                <input className="input" type="text"   spellcheck="false" />
                <div className="placeholder" style="display: block;">验证码</div>
                <div className="icon tip nc-iconfont icon-message"></div>
                <div className="icon clear nc-iconfont icon-close-white" style="display: none;"></div>
                <div className="icon refresh nc-iconfont icon-refresh"></div>
                <img className="code" width="100" height="30" alt="" />
              </div>
              <div className="ope">
                <button className="btn-ok" disabled="">确 定</button>
                <div class="tips">验证码错误，请重新输入</div>
              </div>
            </div>
            <div id="nc_1-stage-3" className="stage stage3" style="display: none;">
              <div className="title">非常抱歉，这出错了</div>
              <span className="menu refresh">
                <span className="icon nc-iconfont icon-refresh"></span><span className="label">刷新</span>
              </span>
              <span className="menu nc-sep"></span>
              <span className="menu feedback">
                <span className="icon nc-iconfont icon-message"></span><span className="label">反馈</span>
              </span>
            </div>
          </div>
          </div>
          <div className="jm_row register_jumei_account">
            <a className="jm_col jm_left" id="use_iphone_login">使用手机短信码登录</a>
            <a className="jm_col jm_right" href="/i/mobile/reset?redirect=http%3A%2F%2Fh5.jumei.com%2Fproduct%2Fdetail%3Fitem_id%3Dht190301p4290116t2%26type%3Dglobal_deal">忘记密码？</a>
          </div>
          <input type="submit" value="登录" className="register_button" id="ga_login" />
        </form> */}
      </div>
    )
  }
};

export default rehister