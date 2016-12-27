import { Map } from 'immutable';

import {
  updateUnits, 
  updateQuantity, 
  updatePrice, 
  calcPrice
} from '../src/product/product';

describe('Product', function () {
  it('updates units', () => {
    var state = Map({
      units: '1',
      quantity: '1',
      price: '1.0'
    });

    nextState = updateUnits(state, '3')

    expect(nextState).toEqual(Map({
      units: '3',
      quantity: '1',
      price: '1.0'
    }));
  });

  it('updates quantity', () => {
    var state = Map({
      units: '1',
      quantity: '1',
      price: '1.0'
    });

    nextState = updateQuantity(state, '2')

    expect(nextState).toEqual(Map({
      units: '1',
      quantity: '2',
      price: '1.0'
    }));
  });

  it('updates price', () => {
    var state = Map({
      units: '1',
      quantity: '1',
      price: '1.0'
    });

    nextState = updatePrice(state, '3.5')

    expect(nextState).toEqual(Map({
      units: '1',
      quantity: '1',
      price: '3.5'
    }));
  });

  it('calculates cost', () => {
    var state = Map({
      units: '16',
      quantity: '30',
      price: '26.9'
    });

    cost = calcPrice(state);

    expect(cost).toEqual('$0.056');
  });
});
