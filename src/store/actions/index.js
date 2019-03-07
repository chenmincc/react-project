import {ADD_CART, JIAN_CART } from './type';

// 添加购物车
export const addCart = (productInfo) => {
  return {
    type:ADD_CART,
    product: productInfo
  }
}

// 删除商品
export const jianCart = (productInfo) => {
  return {
    type:JIAN_CART,
    product: productInfo
  }
}
