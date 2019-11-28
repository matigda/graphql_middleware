const CheckoutFragment = require("./checkoutFragment");

const { gql } = require('apollo-server');

const CHECKOUT_LINE_ITEMS_REPLACE = gql`
  mutation checkoutLineItemsReplace(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemInput!]!
  ) {
    checkoutLineItemsReplace(checkoutId: $checkoutId, lineItems: $lineItems) {
      userErrors {
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

module.exports = CHECKOUT_LINE_ITEMS_REPLACE;