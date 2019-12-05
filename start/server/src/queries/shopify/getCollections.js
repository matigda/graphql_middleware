const { gql } = require('apollo-server');

const COLLECTIONS = gql`
query query($amount: Int!) {
    collections(first: $amount) {
      edges {
        node {
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
          title
        }
      }
    }
  }
`;


module.exports = COLLECTIONS;