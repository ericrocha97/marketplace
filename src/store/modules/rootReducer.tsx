import { combineReducers } from 'redux';
import {cart} from './cart/reducer'

export const rootReducer = combineReducers({
  cart,
});

export type RootState = ReturnType<typeof rootReducer>;