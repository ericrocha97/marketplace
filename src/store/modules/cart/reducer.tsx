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
    default:
      return state;
  }
}