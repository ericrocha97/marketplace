import produce from "immer";

import { cartActionsTypes } from "../../types/cart.types";
import { ProductsCartProps } from "../../../types/ProductsInterface";

export function cart(state:ProductsCartProps[] = [], action: cartActionsTypes) {
  switch(action.type){
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft: ProductsCartProps[]) => {
        const { product } = action;
        draft.push(product);
      });
    case '@cart/REMOVE':
      return produce(state, (draft: ProductsCartProps[]) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);
        if(productIndex >= 0) draft.splice(productIndex, 1);
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, (draft: ProductsCartProps[]) => {
        const productIndex = draft.findIndex((p) => p.id === action.id);
        if(productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}