const AbstractPaginatedGraphQLAPI = require('../AbstractPaginatedGraphQLAPI');
const COLLECTION_BY_HANDLE  = require('../../queries/shopify/getCollectionByHandle');
const COLLECTIONS  = require('../../queries/shopify/getCollections');

class CollectionGraphQLAPI extends AbstractPaginatedGraphQLAPI {
    constructor() {
        super();
        this.baseURL = 'https://biggest-ecommerce.myshopify.com/api/graphql';
    }

    async collectionByHandle(collectionName, productsAmount) {
        try {
            const response = await this.query(COLLECTION_BY_HANDLE, {variables: {collectionName, productsAmount}});

            return response.data.collectionByHandle;

        } catch (error) {
            console.error(error);
        }
    }

    async collections(amount) {
        try {
            const response = await this.query(COLLECTIONS, { variables: { amount } });

            return response.data.collections;

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


module.exports = CollectionGraphQLAPI;