import { ProductsCartProps } from "../../types/ProductsInterface"

export const ADD_REQUEST = "@cart/ADD_REQUEST"
export const ADD_SUCCESS = "@cart/ADD_SUCCESS"
export const REMOVE = "@cart/REMOVE"
export const UPDATE_AMOUNT_REQUEST = "@cart/UPDATE_AMOUNT_REQUEST"
export const UPDATE_AMOUNT_SUCCESS = "@cart/UPDATE_AMOUNT_SUCCESS"

interface addRequest {
  type: typeof ADD_REQUEST;
  id: string;
}

interface addSuccess {
  type: typeof ADD_SUCCESS;
  product: ProductsCartProps;
}

interface remove {
  type: typeof REMOVE;
  id: string;
}

interface updateAmountRequest {
  type: typeof UPDATE_AMOUNT_REQUEST;
  id: string;
  amount: number;
}

interface updateAmountSuccess {
  type: typeof UPDATE_AMOUNT_SUCCESS;
  id: string;
  amount: number;
}

export type cartActionsTypes = 
  addRequest | 
  addSuccess | 
  remove | 
  updateAmountRequest | 
  updateAmountSuccess;
