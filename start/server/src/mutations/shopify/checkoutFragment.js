const { gql } = require('apollo-server');

module.exports = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    subtotalPrice: subtotalPriceV2 {
      amount
      currencyCode
    }
    currencyCode
    totalPrice: totalPriceV2 {
      amount
      currencyCode
    }
    totalTax: totalTaxV2 {
      amount
      currencyCode
    }
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            selectedOptions {
              name
              value
            }
            title
            image {
              id
              altText
              originalSrc
              squareSrc: transformedSrc(
                maxWidth: 200
                maxHeight: 200
                crop: CENTER)
              naturalSrc: transformedSrc
            }
            price: priceV2 {
              amount
              currencyCode
            }
          }
          quantity
        }
      }
    }
  }
`;