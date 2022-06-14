import React, { Component } from 'react';
import CartItems from '../components/Cart/CartItems';
import styled from 'styled-components';

const Name = styled.h1`
  font-weight: 700;
  font-size: 32px;
  margin-bottom: 60px;
`

class CartPage extends Component {
  render() {
    return (
      <>
        <Name>CART</Name>
        <CartItems data={this.props.data} />
      </>
    )
  }
}

export default CartPage