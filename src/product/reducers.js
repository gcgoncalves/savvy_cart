import {
  updateUnits, 
  updateQuantity, 
  updatePrice, 
  calcPrice
} from './product';

export function product(state, action) {
  return function reducer(state, action) {
    switch(action.type) {
      case 'UPDATE_UNITS':
        return updateUnits(state, action.units);
      case 'UPDATE_QUANTITY':
        return updateQuantity(state, action.quantity);
      case 'UPDATE_PRICE':
        return updatePrice(state, action.price);
    }

    return state;
  };
}
