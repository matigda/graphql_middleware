const { gql } = require('apollo-server');

const PRODUCT_BY_HANDLE = gql`

  query query($handle: String!) {
    productByHandle(handle: $handle) {
        availableForSale
        createdAt
        description
        descriptionHtml
        handle
        id
        tags
        title
        variants(first: 100) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
              availableForSale
              title
              selectedOptions {
                name
                value
              }
              
              price: priceV2 {
                amount
                    currencyCode
              }
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
            }
          }
        }
        images(first: 20) {
          edges {
            cursor
            node {
              altText
              originalSrc
              squareSrc: transformedSrc(
                maxWidth: 200
                maxHeight: 200
                crop: CENTER)
              naturalSrc: transformedSrc
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
        }
        onlineStoreUrl
        options {
          id
          name
          values
        }
        }
    }
`;

module.exports = PRODUCT_BY_HANDLE;