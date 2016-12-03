import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	TextInput,
  View,
  Dimensions
} from 'react-native';

import I18n from 'react-native-i18n';
import ReactNativeI18n from 'react-native-i18n';

import {translations} from '../assets/translations';

const width = Dimensions.get('window').width;
const deviceLocale = ReactNativeI18n.locale;

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;
I18n.locale = deviceLocale;
I18n.translations = translations;

function limitPrecision(price) {
  return Math.round(price * 1000) / 1000;
}

export class ProductForm extends Component {
  
  constructor(props) {
    super(props);
    this.state =  {
      units: '1', 
      quantity: '1', 
      price: '1'};
  }

  calcPrice() {
    units = parseInt(this.state.units);
    quantity = parseInt(this.state.quantity);
    priceString = this.state.price.replace(',', '.');
    price = parseFloat(priceString);

    units = isNaN(units) ? 1 : units;
    quantity = isNaN(quantity) ? 1 : quantity;
    price = isNaN(price) ? 1 : price;

    price = limitPrecision(price/(units*quantity));
    price = I18n.toCurrency(price, 
                            {
                              precision: 3,
                              strip_insignificant_zeros: true,
                              sign_first: I18n.t('sign_first')
                            });

    return price.toString();
  }

  handleUnitsChange(event) {
    this.setState({
        units: event.nativeEvent.text,
        quantity: this.state.quantity, 
        price: this.state.price, 
      }
    );
  }
  
  handleQuantityChange(event) {
    this.setState({
        units: this.state.units,
        quantity: event.nativeEvent.text, 
        price: this.state.price, 
      }
    );
  }
  
  handlePriceChange(event) {
    this.setState({
        units: this.state.units,
        quantity: this.state.quantity, 
        price: event.nativeEvent.text, 
        cost: this.state.cost
      }
    );
  }

  render() {
    var cost = this.calcPrice();
    return (
      <View style={styles.container}>
        <TextInput keyboardType="numeric" placeholder={I18n.t('units')} onChange={this.handleUnitsChange.bind(this)} style={styles.input} />
        <TextInput keyboardType="numeric" placeholder={I18n.t('quantity')} onChange={this.handleQuantityChange.bind(this)} style={styles.input} />
        <TextInput keyboardType="numeric" placeholder={I18n.t('price')} onChange={this.handlePriceChange.bind(this)} style={styles.input} />
        <Text style={styles.cost}>{cost}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    fontSize: 20,
    textAlign: 'left',
    width: width*0.45,
    margin: 10,
  },
  cost: {
    fontSize: 30,
    textAlign: 'center',
    width: width*0.45,
    margin: 10,
  },
});
