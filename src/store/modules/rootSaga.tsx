// @ts-nocheck
import { all, takeLatest } from 'redux-saga/effects';
import { ADD_REQUEST, UPDATE_AMOUNT_REQUEST } from '../types/cart.types';


import { addToCart, updateAmount } from './cart/sagas';

export function* rootSaga() : any{
  const result: any = yield all([
    takeLatest(ADD_REQUEST, addToCart),
    takeLatest(UPDATE_AMOUNT_REQUEST, updateAmount),
  ]);
  return result;
}