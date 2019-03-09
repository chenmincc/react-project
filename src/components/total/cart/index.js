import React from 'react';
import '@/style/cart.less';
import axios from 'axios';
import Footer from '@/components/total/index.js';
class Cart extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      defaultDisplay: false,
      isChecked: false,
      goods:[],
      totalGoods:[],
      cartGoods:[],
      totalPrice:'',
      totalNum:'',
      localGoods:[]
    }
  }
  // 多选框
  checkAll (e) {
    this.setState({
      isChecked: !this.state.isChecked
    })
    var _this = this;
    setTimeout(function(){
      // console.log(_this.state.isChecked)
      if(_this.state.isChecked){
        let Goods =_this.state.cartGoods.map(item => {
            return item.shortName
        })
        var s = 0;
        var p=0;
        for (var i =0;i< _this.state.cartGoods.length;i++){
          s += _this.state.cartGoods[i].num;
          p += Number(_this.state.cartGoods[i].jumei_price);
        }
        _this.setState({
          totalNum: s,
          totalPrice: p
        })
        _this.setState({
          goods: Goods,
        })
      }else{
        _this.setState({
          goods:[],
          totalNum:'',
          totalPrice:''
        })
            
      }
    },100)
    
    
    
  }
  checkOne (bid,e) {
    let goods = this.state.goods;
    let index = this.state.goods.indexOf(e.target.value);
    var curProduct = this.state.cartGoods.find(item => {
      return bid === item['item-id']
    })
    if(index > -1){
      goods.splice(index,1);
      this.setState({
        totalNum: Number(this.state.totalNum) - curProduct.num,
        totalPrice: Number(this.state.totalPrice) - curProduct.jumei_price * curProduct.num
      })
    }else{
      goods.push(e.target.value)
      if(curProduct) {
        this.setState({
          totalNum: Number(this.state.totalNum) + curProduct.num,
          totalPrice: Number(this.state.totalPrice) + curProduct.jumei_price * curProduct.num
        })
        // console.log(curProduct['jumei-price'])
      }else{
        alert('网络异常，请稍后重试')
      }
    }
    this.setState({
      goods: goods
    })
   
    // console.log(this.state.cartGoods[index]);
    // this.setState({
    //   totalPrice:this.state.cartGoods[index].num * this.state.cartGoods['jumei-price']
    // })
    // console.log(this.state.totalPrice)
  }
  
  //编辑页面和展示页面的切换
  toggleText (bid) {   
    this.setState({
      defaultDisplay: !this.state.defaultDisplay
    })
  }
  //加1
  addNum (bid) {
    var curProduct = this.state.cartGoods.find(item => {
      return bid === item['item-id']
    })
    if(curProduct){
      curProduct.num ++;
      curProduct.total = curProduct['jumei-price'] * curProduct.num;
    }else{
      alert(1)
    }
   
    this.setState({
      cartGoods: this.state.cartGoods,
    })
  }
  //减1
  jianNum (bid) {
    var curProduct = this.state.cartGoods.find(item => {
      return bid === item['item-id']
    })
    var index = this.state.cartGoods.indexOf(curProduct);
    if(curProduct){
      if(curProduct.num > 1){
        curProduct.num --;
        curProduct.total = curProduct.price * curProduct.num;
      }else{
        this.state.cartGoods.splice(index,1);
      }
    }
    this.setState({
      cartGoods: this.state.cartGoods
    })
  }
  // 删除商品
  deleteGoods (bid) {
    var curProduct = this.state.cartGoods.find(item => {
      return bid === item['item-id']
    })
    var index = this.state.cartGoods.indexOf(curProduct);
    this.state.cartGoods.splice(index,1);
    this.setState({
      cartGoods: this.state.cartGoods
    })
  }

  ///计算选中商品的条数
  computeGoodsNum (bid) {
    var curProduct = this.state.cartGoods.find(item => {
      return bid === item['item-id']
    })
    this.setState({
      totalNum: curProduct.num
    })
  }
  componentDidMount() {
    axios.get('/json/index.json').then(res=>{
      this.setState({
        totalGoods:res.data    
      })
      if(this.state.totalGoods.length > 0){
        let goodsStore = JSON.parse(localStorage.getItem("goods"));
        this.setState({
          localGoods:goodsStore
        })
        console.log(this.state.localGoods)
        for(var i = 0;i < this.state.totalGoods.length;i++){
          for(var j =0;j < this.state.localGoods.length;j++){
            if(this.state.totalGoods[i]['item-id'] === goodsStore[j].bid){
              this.state.totalGoods[i].num =goodsStore[j].num
              this.state.cartGoods.push(this.state.totalGoods[i]);
              // this.state.goodsStore.push(goodsStore[j]);
              this.setState({
                cartGoods: this.state.cartGoods
              })
            }
          }
        }
      }
    }).catch(error=>{
      console.log(error);
    })
  }
  render () {
    const okStyle = {
      display: this.state.defaultDisplay ? 'block' : 'none'
    }
    const BianjiStyle = {
      display: this.state.defaultDisplay ? 'none' : 'block'
    }
    const nocartStyle = {
      display: this.state.cartGoods.length === 0? 'block' : 'none'
    }
    const cartStyle = {
      display: this.state.cartGoods.length === 0? 'none' : 'block'
    }
    return (
      <>
      <div className="jq-cart">
        <div className="jq-header">
          <i className="iconfont icon-left jq-headerBack"></i>
          <span>购物车</span>
          <i className="iconfont icon-fangzi jq-headerHome"></i>
        </div>
        <div className="jq-cart-main">
          <div className="jq-cart-no-goods" style={nocartStyle}> 
            <div className="jq-oops"></div> 
            <div className="jq-empty-cart">您的购物车中没有商品，请先去挑选心爱的商品吧！</div> 
            <div className="jq-go-stroll">去逛逛</div> 
          </div>
          <div className="jq-cart-goods" style={cartStyle} >
            <div className="jq-count-down"> 
              <div className="jq-clock-msg">商品数量有限，请尽快结算</div>  
            </div>
            <div className="jq-groups">
              <div className="jq-group">
                <div className="jq-group-header"> 
                  {/* <span className="jq-check-box-checked">√</span>  */}
                  <input type="checkbox" className="jq-check-box-checked" value={this.state.isChecked} onChange={this.checkAll.bind(this)} checked={this.state.isChecked === true} />
                  <div className="jq-group-title" value="this.state."> 聚美优品发货 </div>   
                </div>
                <ul className="jq-group-content">
                  {
                    this.state.cartGoods.map(item => {
                      return (
                        <li key={item['item-id']}>
                          <div className="item"> 
                            {/* <span className="jq-check-box-checked">√</span>  */}
                            <input type="checkbox" className="jq-check-box-checked" value={item.shortName} onChange={this.checkOne.bind(this,item['item-id'])} checked={this.state.goods.indexOf(item.shortName) > -1} />
                            <div className="item-content"> 
                              <div className="img-title"> 
                                <div className="img-wrap"> 
                                  <img src={item.imgUrl} alt={item.shortName} />  
                                </div> 
                                <div className="text-wrap" id="bianji" style={BianjiStyle}> 
                                  <span className="title"> {item.name} </span> 
                                  <div className="sub-title-1"> 
                                    <span>套</span> 
                                    <span>×{item.num}</span> 
                                  </div> 
                                  <div className="price-edit"> 
                                    <span className="price"> ￥{item.jumei_price} </span>  
                                    <span className="edit" onClick={this.toggleText.bind(this,item['item-id'])}>编辑</span> 
                                  </div>
                                </div>
                                <div className="text-wrap" id="xiangxi" style={okStyle}> 
                                  <span className="title"> 
                                    <span className="red">[极速免税]</span>
                                    {item.shortName}
                                  </span>
                                  <div className="number-editor"> 
                                    <span className="decrease" onClick={this.addNum.bind(this,item['item-id'] )}>+</span> 
                                    <span className="goodsNum">{item.num}</span> 
                                    <span className="increase" onClick={this.jianNum.bind(this,item['item-id'] )}>-</span> 
                                  </div>
                                  <div className="price-edit"> 
                                    <span className="price editing"> ¥{item.jumei_price} </span>  
                                    <div className="actions"> 
                                      <span className="delete" onClick={this.deleteGoods.bind(this,item['item-id'])}>删除</span> 
                                      <span className="gap-line"></span> 
                                      <span className="action-finish" onClick={this.toggleText.bind(this)}>完成</span> 
                                    </div> 
                                  </div>  
                                </div>  
                              </div> 
                              <div className="discount-detail"> 
                                <div className="discount-item"> 
                                  <span>满减</span> 
                                  <div className="promo-rule"> 
                                    <span>珀莱雅部分满199减100不封顶</span> 
                                  </div> 
                                </div>
                                <div className="discount-item"> 
                                  <span>满赠</span> 
                                  <div className="promo-rule"> 
                                    <span>珀莱雅满199送199</span> 
                                  </div> 
                                </div> 
                                <div className="show-more"> 
                                </div> 
                              </div>  
                            </div> 
                          </div>
                        </li>
                      )
                    })
                  }
                  
                </ul>
              </div>
            </div>
            <div className="submit-bottom submit-bottom-padding"> 
            <div className="sub-info"> 
              {/* <span className="jq-check-box-checked">√</span>  */}
              <input type="checkbox" className="jq-check-box-checked" onChange={this.checkAll.bind(this)} checked={this.state.isChecked === true} />
              <span className="all-check-text">全选</span> 
              <div className="summary"> 
                <div> 
                  <span>合计</span> 
                  <span className="red">¥{this.state.totalPrice}</span> 
                </div>  
              </div> 
            </div> 
            <div className="submit-btn go-to-submit"> 
              去结算
              <span>({this.state.totalNum})</span> 
            </div> 
          </div>
          </div>
          
        </div>

      </div>
      <Footer />
    </>
    )
   
  }
}
export default Cart;
