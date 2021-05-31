import { ProductsCartProps } from "../../../types/ProductsInterface"

export function addToCartRequest(id: string){
  return {
    type: '@cart/ADD_REQUEST' ,
    id,
  }
}

export function addToCartSuccess(product:ProductsCartProps){
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  }
}