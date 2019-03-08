import React from "react"
import "@/components/total/pintuan/home.less"
import "@/components/total/pintuan/reset.less"
import axios from 'axios'

class TrData extends React.Component{
  render() {
    return (
<<<<<<< HEAD
      <div>
        <section className="nav-con" >
        <div className="nav-outer" id="nav-outer" >
          <div className="list-tab" id="nav-inner" >
            <a href="@" className="active" data-tab="coutuan_home">
              <font>
                <font>推荐</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_baby">
              <font>
                <font>健康母婴</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_furniture">
              <font>
                <font>家居</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_shose">
              <font>
                <font>鞋类</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_makeup">
              <font>
                <font>美妆</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_bag">
              <font>
                <font>百科礼品箱包</font>
              </font><span></span>
            </a>
            <a href="@"  className="" data-tab="coutuan_food">
              <font>
                <font>食品保健</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_jewellery">
              <font>
                <font>饰品配饰</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_3c">
              <font>
                <font>数码家电</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_sports">
              <font>
                <font>运动户外</font>
              </font><span></span>
            </a>
            <a href="@" className="" data-tab="coutuan_pre">
              <font>
                <font>下期预告</font>
              </font>
              <span></span>
            </a>
          </div>
        </div>
        </section>
        <section className="product-itmes">
        <ul className="product-con">
          <li>
            <a href="/" className="goods">
              <div className="people-number">
                <font >
                  <font >5.5万条评论</font>
                </font>
              </div>
              <div className="goods-topsmall">
                <img src="http://mp6.jmstatic.com/product/003/102/3102037_std/3102037_1000_1000.jpg?v=1478168485&amp;imageView2/2/w/440/q/90" alt=""/>
					    </div>
              <div className="goods-middle">
                <span className="goods-num">
                  <font >
                    <font >[2人团]</font>
                  </font>
                </span>
                <font >
                  <font >【手机专享】AHC五代保湿紧致修护眼霜60ml</font>
                </font>
              </div>
              <div className="goods-foot">
                <div className="price-left">
                  <span className="ct-price">
                    <font >
                      <font >¥108</font>
                    </font>
                  </span>
                  <span className="sc-price"></span>
                  <span className="jm-price">

                      <i>单买价¥491</i>

                  </span>
                </div>
                  <div className="time-right timer" data-time="240277">
                    <span className="sy-time">
                      <font>
                        <font>仅剩66:40:00</font>
                      </font>
                    </span>
                    <span className="goods-btn">
                      <font>
                        <font>去开团</font>
                      </font>
                    </span>
                  </div>
              </div>
				    </a>
			    </li>
          <li>
            <a href="@" className="goods">
              <div className="people-number">
=======
      this.props.users.map((user,i) => {
        return (
          <li>
          <a href="#" className="goods">
            <div className="people-number">
              <font >
                <font >{user.buyer_number_text}</font>
              </font>
            </div>
            <div className="goods-topsmall">
              <img src={user.image} alt="" title={user.medium_name}/>
            </div>
            <div className="goods-middle">
              <span className="goods-num">
>>>>>>> min
                <font >
                  <font >{user.group_name_tag}</font>
                </font>
              </span>
              <font >
                <font >{user.short_name}</font>
              </font>
            </div>
            <div className="goods-foot">
              <div className="price-left">
                <span className="ct-price">
                  <font >
                    <font >{user.jumei_price}</font>
                  </font>
                </span>
<<<<<<< HEAD
                <font >
                  <font >【手机专享】AHC五代保湿紧致修护眼霜60ml</font>
                </font>
              </div>
              <div className="goods-foot">
                <div className="price-left">
                  <span className="ct-price">
                    <font >
                      <font >¥108</font>
                    </font>
                  </span>
                  <span className="sc-price"></span>
                  <span className="jm-price">
                    <font >
                      <font >单买价¥491</font>
                    </font>
                  </span>
                </div>
                  <div className="time-right timer" data-time="240277">
                    <span className="sy-time">
                      <font>
                        <font>仅剩66:40:10</font>
                      </font>
                    </span>
                    <span className="goods-btn">
                      <font>
                        <font>去开团</font>
                      </font>
                    </span>
                  </div>
              </div>
				    </a>
			    </li>
          <li>
            <a href="@" className="goods">
              <div className="people-number">
                <font >
                  <font >5.5万条评论</font>
                </font>
              </div>
              <div className="goods-topsmall">
                <img src="http://mp6.jmstatic.com/product/003/102/3102037_std/3102037_1000_1000.jpg?v=1478168485&amp;imageView2/2/w/440/q/90" alt=""/>
					    </div>
              <div className="goods-middle">
                <span className="goods-num">
=======
                <span className="sc-price"></span>
                <span className="jm-price">
>>>>>>> min
                  <font >
                    <font >{user.single_price}</font>
                  </font>
                </span>
              </div>
                <div className="time-right timer" data-time="240277">
                  <span className="sy-time">
                    <font>
                      <font>仅剩66:40:00</font>
                    </font>
                  </span>
                  <span className="goods-btn">
                    <font>
                      <font>去开团</font>
                    </font>
                  </span>
                </div>
            </div>
          </a>
        </li>
        )
      })
    )
  }
}
class List extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      users:[],
      isLoaded:false
    }
  };
  componentDidMount () {
    const that=this
    axios.get('/pintuan/yiqituan/tab_list?tab=coutuan_home&page=1&per_page=20').then(res => {
      console.log(res.data.data)
      that.setState({
        users:res.data.data,
        isLoaded:true
      });
    })
    .catch(function (error){
      console.log(error);
      that.setState({
        isLoaded:false,
        error:error
      })
    })
  }
  render() {
    return (
      <div>
      <section className="nav-con" >
      <div className="nav-outer" id="nav-outer" >
        <div className="list-tab" id="nav-inner" >
          <a href="#" className="active" data-tab="coutuan_home">
            <font>
              <font>推荐</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_baby">
            <font>
              <font>健康母婴</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_furniture">
            <font>
              <font>家居</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_shose">
            <font>
              <font>鞋类</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_makeup">
            <font>
              <font>美妆</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_bag">
            <font>
              <font>百科礼品箱包</font>
            </font><span></span>
          </a>
          <a href="#"  className="" data-tab="coutuan_food">
            <font>
              <font>食品保健</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_jewellery">
            <font>
              <font>饰品配饰</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_3c">
            <font>
              <font>数码家电</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_sports">
            <font>
              <font>运动户外</font>
            </font><span></span>
          </a>
          <a href="#" className="" data-tab="coutuan_pre">
            <font>
              <font>下期预告</font>
            </font>
            <span></span>
          </a>
        </div>
      </div>
      </section>
      <section className="product-itmes">
      <ul className="product-con">
        <TrData users={this.state.users}/>
      </ul>
      </section>
      </div>
    )
  }
}

export default List
