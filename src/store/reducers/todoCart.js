import {ADD_CART, JIAN_CART} from '../actions/type';
let initCart = [];
export default (prevState = initCart,action) => {
  let state = JSON.parse(JSON.stringify(prevState));

  switch (action.type) {
    case ADD_CART:
    var id = action.product.id;
    var curProduct = state.find(item => {
      return item.id === id;
    }) 
    if(curProduct) {
      curProduct.num ++;
      curProduct.total = curProduct.price * curProduct.num;
    } else {
      state.push ( {
        ...action.product,
        num:1,
        total:action.product.price
      })
    }
    break;
    case JIAN_CART:
      var id = action.product.id;
      var curProduct = state.find(item => {
        return item.id === id;
      })
      var index = state.indexOf(curProduct);
      if(curProduct){
        if(curProduct.num > 1){
          curProduct.num --;
          curProduct.total = curProduct.num * curProduct.price;
        }else{
          state.splice(index,1);
        }
      }
    break;
  }
  return state;
}
