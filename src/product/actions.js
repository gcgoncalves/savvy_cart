import { product } from './reducers'

export const UPDATE_UNITS = 'UPDATE_UNITS';
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
export const UPDATE_PRICE = 'UPDATE_PRICE';

export function updateUnits(state, units) {
  return product(state, {type: UPDATE_UNITS, units: units});
}

export function updateQuantity(state, quantity) {
  return product(state, {type: UPDATE_QUANTITY, quantity: quantity});
}

export function updatePrice(state, price) {
  return product(state, {type: UPDATE_PRICE, price: price});
}
