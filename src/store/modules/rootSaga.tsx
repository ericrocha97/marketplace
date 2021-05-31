// @ts-nocheck
import { all, takeLatest } from 'redux-saga/effects';
import { ADD_REQUEST } from '../types/cart.types';


import { addToCart } from './cart/sagas';

export function* rootSaga() : any{
  const result: any = yield all([
    takeLatest(ADD_REQUEST, addToCart),
  ]);
  return result;
}