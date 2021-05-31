import { call, put, select } from "redux-saga/effects";
import { ProductsCartProps } from "../../../types/ProductsInterface";
import api from "../../../services/api";
import formatValue from "../../../utils/formatValue";
import { addToCartSuccess } from "./actions";

export function* addToCart({id}:ProductsCartProps) : any {
  const productExists: any = yield select((state) => 
    state.cart.find((product:ProductsCartProps) => product.id === id)
  )

  if(productExists) {
    //dispara action qtd carrinho
  } else {
    const response = yield call(api.get, `products/${id}`);

    const data: ProductsCartProps = {
      ... response.data,
      amount: 1,
      priceFormatted: formatValue(response.data.price),
    };

    yield put(addToCartSuccess(data))
  }

}

