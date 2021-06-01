import { call, put, select } from "redux-saga/effects";
import { ProductsCartProps } from "../../../types/ProductsInterface";
import api from "../../../services/api";
import formatValue from "../../../utils/formatValue";
import { addToCartSuccess, updateAmountSuccess } from "./actions";

export function* addToCart({id}:ProductsCartProps) : any {
  const productExists: ProductsCartProps = yield select((state) => 
    state.cart.find((product:ProductsCartProps) => product.id === id)
  )
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if(productExists) {
    yield put(updateAmountSuccess(id, amount));
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

export function* updateAmount({id, amount}: ProductsCartProps) : any {
  if (amount <= 0) return;
  yield put(updateAmountSuccess(id, amount));
}

