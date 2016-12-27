import { Map } from 'immutable';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ActionCreators } from '../app/actions';
import { ProductForm } from './component';

export class Product extends Component {

  constructor(props) {
    super(props)
    this.state = Map({
      units: '1',
      quantity: '1',
      price: '1.0'
    }) 
  }

  render() {
    return (
        <ProductForm />
    );
  }

}

function mapStateToProps(state) {
  return {
    units: state.get('units', '1'),
    quantity: state.get('quantity', '1'),
    price: state.get('price', '1.0')
  };
}

export default connect(mapStateToProps,
  (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch)
  })
)(Product);
