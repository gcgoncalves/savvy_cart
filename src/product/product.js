import { Map } from 'immutable';
import I18n from 'react-native-i18n';
import ReactNativeI18n from 'react-native-i18n';

import { translations } from '../../assets/translations';

const deviceLocale = ReactNativeI18n.locale;

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;
I18n.locale = deviceLocale;
I18n.translations = translations;

export function updateUnits(state, units) {
  return state.set('units', {units: units});
}

export function updateQuantity(state, quantity) {
  return state.set('quantity', {quantity: quantity});
}

export function updatePrice(state, {price: price}) {
  return state.set('price', price);
}

export function calcPrice(state) {
  units = parseInt(state.get('units', '1'));
  quantity = parseInt(state.get('quantity', '1'));
  price = parseFloat(state.get('price', '1')
                          .replace(',', '.'));

  price = price/(units*quantity);
  return I18n.toCurrency(price, 
                         {
                           precision: 3,
                           strip_insignificant_zeros: true,
                           sign_first: I18n.t('sign_first')
                         });
}
