import { CheckoutFragment } from "./checkoutFragment";

const { gql } = require('apollo-server');

const UPDATE_ITEMS_IN_CART = gql`
    mutation checkoutLineItemsReplace(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemUpdateInput!]!
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

module.exports = UPDATE_ITEMS_IN_CART;