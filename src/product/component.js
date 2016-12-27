import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
	TextInput,
  View,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import I18n from 'react-native-i18n';
import ReactNativeI18n from 'react-native-i18n';

import calcPrice from './product';
import product from './reducers';
import { ActionCreators } from '../app/actions';
import { translations } from '../../assets/translations';

const width = Dimensions.get('window').width;
const deviceLocale = ReactNativeI18n.locale;

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;
I18n.locale = deviceLocale;
I18n.translations = translations;

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

class ProductForm extends Component {

  constructor(props) {
    super(props);
  }

  updateUnits(units) {
    return this.props.updateUnits(this.state, units);
  }

  updateQuantity(quantity) {
    return this.props.updateQuantity(this.state, quantity);
  }

  updatePrice(price) {
    return this.props.updatePrice(this.state, price);
  }

  render() {

    var cost = calcPrice(this.context.store.getState());
    return (
      <View style={styles.container}>
        <TextInput keyboardType="numeric" placeholder={I18n.t('units')} onChange={(text) => this.updateUnits(text)} style={styles.input} />
        <TextInput keyboardType="numeric" placeholder={I18n.t('quantity')} onChange={(text) => this.updateQuantity(text)} style={styles.input} />
        <TextInput keyboardType="numeric" placeholder={I18n.t('price')} onChange={(text) => this.updatePrice(text)} style={styles.input} />
        <Text style={styles.cost}>{cost}</Text>
      </View>
    );
  }

}

export default connect((state) => { 
    return {
      units: state.units,
      quantity: state.quantity,
      price: state.price
    };
  }, mapDispatchToProps)(ProductForm)

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
