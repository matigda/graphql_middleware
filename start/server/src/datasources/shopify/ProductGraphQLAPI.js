const AbstractPaginatedGraphQLAPI = require('../AbstractPaginatedGraphQLAPI');
const PRODUCT_BY_HANDLE  = require('../../queries/shopify/getProductByHandle');
const PRODUCTS  = require('../../queries/shopify/getProducts');
const GET_CURSOR_FOR_LAST_PRODUCT_ON_GIVEN_PAGE  = require('../../queries/shopify/getCursorForLastProductOnGivenPage');

class ProductGraphQLAPI extends AbstractPaginatedGraphQLAPI {
    constructor() {
        super();
        this.baseURL = 'https://biggest-ecommerce.myshopify.com/api/graphql';
    }

    async productByHandle(handle) {
        try {
            const response = await this.query(PRODUCT_BY_HANDLE, {variables: {handle}});

            return response.data.productByHandle;

        } catch (error) {
            console.error(error);
        }
    }

    async products(pagination) {
        try {
            const newPagination = await this.getPagination(
                pagination,
                GET_CURSOR_FOR_LAST_PRODUCT_ON_GIVEN_PAGE,
                (cursorResponse) => cursorResponse.data.products.edges
            );

            const response = await this.query(PRODUCTS, { variables: { ...newPagination} });

            return response.data.products;

        } catch (error) {
            console.error(error);
        }
    }

    willSendRequest(request) {

        if (!request.headers) {
            request.headers = {};
        }

        request.headers["X-Shopify-Storefront-Access-Token"] = "7a415603317462ae8c7e4f98be2c5b5e";
    }
}


module.exports = ProductGraphQLAPI;