const { GraphQLDataSource } = require('apollo-datasource-graphql');
const CHECKOUT_CREATE = require('../../mutations/shopify/checkoutCreate');
const CHECKOUT_LINE_ITEMS_REPLACE = require('../../mutations/shopify/checkoutLineItemsReplace');

class CheckoutGraphQLAPI extends GraphQLDataSource {
    constructor() {
        super();
        this.baseURL = 'https://biggest-ecommerce.myshopify.com/api/graphql';
    }

    async createCheckout(input = {}) {
        try {
            const response = await this.mutation(CHECKOUT_CREATE, {variables: { input }});

            return response.data.checkoutCreate;
        } catch(error) {
            console.error(error);
        }
    }

    async checkoutLineItemsReplace(checkoutId, lineItems) {
        try {
            const response = await this.mutation(CHECKOUT_LINE_ITEMS_REPLACE, {variables: { lineItems, checkoutId }});

            return response.data.checkoutLineItemsReplace;
        } catch(error) {
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


module.exports = CheckoutGraphQLAPI;