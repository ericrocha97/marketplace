import { ProductsCartProps } from "../../types/ProductsInterface"

export const ADD_REQUEST = "@cart/ADD_REQUEST"
export const ADD_SUCCESS = "@cart/ADD_SUCCESS"

interface addRequest {
  type: typeof ADD_REQUEST;
  id: string;
}

interface addSuccess {
  type: typeof ADD_SUCCESS;
  product: ProductsCartProps;
}

export type cartActionsTypes = addRequest | addSuccess;
