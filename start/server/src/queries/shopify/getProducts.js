const { gql } = require('apollo-server');

const PRODUCTS = gql`
query ($first: Int, $last: Int, $before: String, $after: String){
	products(first: $first, last: $last, before: $before, after: $after) {
	  edges {
	    cursor
	    node {
	      availableForSale
	      collections(first: 100) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                cursor
                node {
                  id
                  handle
                  updatedAt
                  title
                  image {
                    originalSrc
                    squareSrc: transformedSrc(
                        maxWidth: 200
                        maxHeight: 200
                        crop: CENTER)
                    naturalSrc: transformedSrc
                    altText
                  }
                }
              }
            }
	      createdAt
	      description
	      descriptionHtml
	      handle
	      id
	      images(first: 100) {
          edges {
            cursor
            node {
                originalSrc
                squareSrc: transformedSrc(
                    maxWidth: 200
                    maxHeight: 200
                    crop: CENTER)
                naturalSrc: transformedSrc
                altText
            }
          }
        }
	      onlineStoreUrl
	      options {
          name
          values
          id
        }
	      presentmentPriceRanges(first: 100) {
          edges {
            node {
            maxVariantPrice {
              amount
              currencyCode
          	}
            minVariantPrice {
              amount
              currencyCode
            }
            }
          }
        }
	      priceRange {
          maxVariantPrice {
            amount
            currencyCode
          }
          minVariantPrice {
            amount
            currencyCode
          }
        }
	      productType
	      publishedAt
	      tags
	      title
	      updatedAt
	      variants(first: 100) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                cursor
                node {
                  title
                  availableForSale
                  id
                  price: priceV2 {
                     amount
                     currencyCode
                  }
                  selectedOptions {
                     name
                     value
                  }
                }
              }
            }
	    }
	  }
	  pageInfo {
	    hasNextPage
	    hasPreviousPage
	  }
	} 
}
`;

module.exports = PRODUCTS;