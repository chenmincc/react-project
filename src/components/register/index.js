import React from 'react';
import '@/components/login/index.less'
// import NavLink from 'react-router-dom/NavLink';
import axios from 'axios'
const Register = class register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userName:'',
      password:''
    }
  }

  changeUserName(e) {
    let inputValue = e.target.value;

    axios.post('http://localhost:3001/user/register1',
    {
      userName:inputValue
    })
    .then(res => {
        if(res.data.code === 0){
          this.setState({
            userName : inputValue
          })
        }else{
          alert(res.data.msg)
        }
    }).catch(error => {
      console.log(error)
    })

  }
  changePassword(e) {
    let inputValue = e.target.value;
        this.setState({
          password : inputValue
        })
  }

  onRegisterSubmit(props){
    axios.post('http://localhost:3001/user/register',
    {
      userName: this.state.userName,
      password: this.state.password
    })
    .then(res => {
      console.log(res)
        if(res.data.code === 0){
          console.log(1)
          this.props.history.push('../login/index.js')
        }
    }).catch(error => {
      console.log(error)
    })

  }

  render() {

    return (
      <div className="warper">
        <section className="views">
          <a id="back" href="javascript:void(0);">
            <img src="https://f1.jmstatic.com/static_passport/dist/v1.0.135656/touch/login_series/images/NavButtonBack_new.png" alt="" className="return" /></a>
          <a className="theme" href="/register" >注册</a>
          <a className="top_right" href="/login">登录</a>
        </section>
        <form action="">
          <div className="other-login">
            <span className="other-title">使用手机注册</span>
          </div>
          <div className="jm_row icon_phone">
            <div className="jm_col">
              <input type="text" className="register_input" name="username" placeholder="请输入用户名" alertname="请输入手机号码" id="account" onMouseLeave={this.changeUserName.bind(this)} />
            </div>
          </div>
          <div className="jm_row">
          </div>
            <div className="jm_row">
              <div className="jm_col">
                <input type="password" className="register_input" name="password" placeholder="6-16位登录密码" alertname="请设置密码" onChange={this.changePassword.bind(this)} />
              </div>
            </div>
            <span className="register_button" id="tele_register"
            onClick={this.onRegisterSubmit.bind(this)} >注册</span>
        </form>
        <div className="register_agreement jm_center">点击注册，表示同意
         <a href="http://i.jumei.com/m/account/protocol">《聚美优品用户协议》</a>
        </div>
      </div>
    )
  }
};

export default Register