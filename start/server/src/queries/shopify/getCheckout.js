const { gql } = require('apollo-server');
const CheckoutFragment = require("../../mutations/shopify/checkoutFragment");

const CHECKOUT = gql`
  query Checkout($id: ID!) {
    node(id: $id) {
      ...CheckoutFragment
    }
  }
  
  ${CheckoutFragment}
`;

module.exports = CHECKOUT;