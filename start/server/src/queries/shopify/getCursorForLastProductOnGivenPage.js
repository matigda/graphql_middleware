const { gql } = require('apollo-server');

const GET_CURSOR_FOR_LAST_PRODUCT_ON_GIVEN_PAGE = gql`
query ($first: Int){
	products(first: $first) {
	  edges {
	    cursor
	  }
    }
}
`;

module.exports = GET_CURSOR_FOR_LAST_PRODUCT_ON_GIVEN_PAGE;