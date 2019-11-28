const CheckoutFragment = require("./checkoutFragment");

const { gql } = require('apollo-server');

const CHECKOUT_CREATE = gql`
 mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      userErrors {
        message
        field
      }
      checkoutUserErrors {
        code
        message
        field
      }
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

module.exports = CHECKOUT_CREATE;