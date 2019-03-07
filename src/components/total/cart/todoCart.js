import { connect } from 'react-redux';
import Cart from './index';
import {addCart,jianCart} from '../cart/index';
import { dispatch } from 'rxjs/internal/observable/pairs';

export default connect(
  (state) => {
    return {
      products:state.products,
      carts:state.carts
    }
    
  },
  (dispatch) => {
    return {
      add: (productInfo) => {
        dispatch(addCart(productInfo));
      },
      jian: (productInfo) => {
        dispatch(jianCart(productInfo));
      },
      checkbox:() => {
        
      }
    }
  }
)(Cart);
