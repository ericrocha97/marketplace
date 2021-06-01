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

export function removeFromCart(id: string){
  return{
    type: '@cart/REMOVE',
    id,
  }
}

export function updateAmountRequest(id: string, amount: number){
  return{
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  }
}

export function updateAmountSuccess(id: string, amount: number){
  return{
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  }
}