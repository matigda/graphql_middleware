const { gql } = require('apollo-server');

const COLLECTION_BY_HANDLE = gql`
  query query($collectionName: String!, $productsAmount: Int!) {
    collectionByHandle(handle: $collectionName) {
      description
      descriptionHtml
      handle
      id
      image {
        altText
        id
        originalSrc
        src
        squareSrc: transformedSrc(
            maxWidth: 200
            maxHeight: 200
            crop: CENTER)
        naturalSrc: transformedSrc
      }
      products(first: $productsAmount) {
        edges {
          cursor
          node {
            availableForSale
            description
            descriptionHtml
            handle
            id
            createdAt
             options {
              name
              values
            }
            images(first: 100) {
              edges {
                cursor
                node {
                  altText
                  id
                  originalSrc
                  src
                squareSrc: transformedSrc(
                    maxWidth: 200
                    maxHeight: 200
                    crop: CENTER)
                naturalSrc: transformedSrc
                }
              }
            }
            onlineStoreUrl
            productType
            publishedAt
            tags
            title
            updatedAt
            variants(first: 200) {
              edges {
                cursor
                node {
                  available
                  availableForSale
                  id
                  image {
                    altText
                    id
                    originalSrc
                    src
                    squareSrc: transformedSrc(
                        maxWidth: 200
                        maxHeight: 200
                        crop: CENTER)
                    naturalSrc: transformedSrc
                  }
                  price:  priceV2 {
                    amount
                    currencyCode
                  }
                  requiresShipping
                  sku
                  title
                  weight
                  weightUnit
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
            }
            vendor
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
      title
      updatedAt
    
  }
}

`;

module.exports = COLLECTION_BY_HANDLE;